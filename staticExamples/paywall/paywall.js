const m = new Map();
m.set("ronald", "12345");
m.set("danielle", "56789");

async function auth({ userName, passWord }) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (m.get(userName) === passWord) resolve({ userName, passWord });
      reject(new Error("Invalid username / password combination"));
    }, 300);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const paywall = document.querySelector(".paywall");
  const form = document.querySelector("#paywallForm");
  const errorMsg = document.querySelector(".errorMsg");

  // show paywall after a second
  setTimeout(() => {
    paywall.classList.remove("hidden");
  }, 500);

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const user = e.target.user.value;
    const pw = e.target.pw.value;
    try {
      await auth({ userName: user, passWord: pw });
      paywall.classList.add("hidden");
    } catch (e) {
      errorMsg.innerText = e.message;
    }
  });
});
