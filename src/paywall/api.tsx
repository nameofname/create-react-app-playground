const m = new Map();
m.set("ronald", "12345");
m.set("danielle", "56789");

type AuthArgs = {
  userName: string;
  passWord: string;
};

export async function auth({
  userName,
  passWord,
}: AuthArgs): Promise<AuthArgs> {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (m.get(userName) === passWord) resolve({ userName, passWord });
      reject("Invalid username / password combination");
    }, 300);
  });
}
