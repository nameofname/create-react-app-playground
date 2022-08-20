import { FormEvent } from "react";
import { FC } from "react";
import styles from "./payWall.module.css";
import { AuthProvider, AuthConsumer } from "./AuthContext";

const ProtectedArticle: FC = () => {
  return (
    <>
      <p>
        dhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj kdfjk
        dhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj
        kdfjkdhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj
        kdfjkdhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj
        kdfjkdhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj
        kdfjkdhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj kdfjk
      </p>
      <p>
        dhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj kdfjk
        dhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj
        kdfjkdhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj
        kdfjkdhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj
        kdfjkdhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj
        kdfjkdhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj kdfjk
      </p>
      <p>
        dhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj kdfjk
        dhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj
        kdfjkdhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj
        kdfjkdhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj
        kdfjkdhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj
        kdfjkdhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj kdfjk
      </p>
      <p>
        dhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj kdfjk
        dhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj
        kdfjkdhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj
        kdfjkdhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj
        kdfjkdhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj
        kdfjkdhsfjklah jkrjkhrejkw jkfhadkshf wejklhrejkwr kjadfsjkdsfhj kdfjk
      </p>
    </>
  );
};

const PayWall: FC = () => {
  let nameInput: HTMLInputElement | null;
  let pwInput: HTMLInputElement | null;

  function update(e: FormEvent<HTMLFormElement>, callback: Function) {
    e.preventDefault();
    const user = nameInput?.value;
    const pw = pwInput?.value;
    callback({ userName: user, passWord: pw });
  }

  return (
    <AuthConsumer>
      {({ credentials, updateCredentials }) => {
        if (credentials.isValid) return "";
        return (
          <div className={styles.paywall}>
            <p>Login to access this article and more :</p>
            <form
              id="paywallForm"
              onSubmit={(e) => update(e, updateCredentials)}
            >
              <input
                ref={(node) => (nameInput = node)}
                name="user"
                type="text"
              />
              <input ref={(node) => (pwInput = node)} name="pw" type="text" />
              <button type="submit" form="paywallForm">
                submit
              </button>
            </form>
            <div>
              <p className={styles.errorMessage}>{credentials.errorMessage}</p>
            </div>
          </div>
        );
      }}
    </AuthConsumer>
  );
};

// 12:00 - pause at 12:10 to read about react context
// picking up at 4:37 after learning context
export const PayWallApp: FC = () => {
  return (
    <AuthProvider>
      <div className="wrapper">
        <div className={styles.header}>
          <AuthConsumer>
            {({ credentials }) => <p>User: {credentials.userName}</p>}
          </AuthConsumer>
        </div>
        <div className={styles.article}>
          <ProtectedArticle />
        </div>
      </div>
      <PayWall />
    </AuthProvider>
  );
};
