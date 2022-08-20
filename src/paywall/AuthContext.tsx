import { FC, createContext, useState, ReactNode } from "react";
import { auth } from "./api";

type AuthProviderProps = {
  children: ReactNode;
};
type AuthCreds = {
  userName?: string;
  passWord?: string;
};
type Auth = AuthCreds & {
  isValid?: boolean;
  errorMessage?: string;
};
type AuthContextType = {
  credentials: Auth;
  updateCredentials: Function;
};
const AuthContext = createContext<AuthContextType>({
  credentials: {},
  updateCredentials: () => {},
});

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const [credentials, setCredentials] = useState<Auth>({});

  async function updateCredentials({ userName, passWord }: AuthCreds) {
    if (userName && passWord) {
      try {
        await auth({ userName, passWord });
        setCredentials({ userName, passWord, isValid: true, errorMessage: "" });
      } catch (e) {
        let errorMessage: string | undefined;
        if (e instanceof Error) errorMessage = e.message;
        setCredentials({ userName, passWord, isValid: false, errorMessage });
      }
    } else {
      setCredentials({ userName, passWord, isValid: false, errorMessage: "" });
    }
  }

  return (
    <AuthContext.Provider value={{ credentials, updateCredentials }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;
