const button = document.querySelector(".btn");
const form = document.querySelector(".form");
const loginInfo = document.querySelector(".loginInfo");

gotoMainPanel = () => {
  setTimeout((window.location.href = "http://localhost:3001"), 5000);
};

handleLogin = async () => {
  if (register()) {
  }
};

register = async () => {
  let name = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  const url = "http://localhost:3000/users";
  const data = {
    name: name,
    email: email,
    password: password,
  };
  console.log(data);
  try {
    const response = await fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json().then((data) => {
      console.log(data);
      if (data.token !== undefined) {
        let info = "Account created, going to main panel...";
        console.log("Logging...");
        loginInfo.classList.remove("disable");
        loginInfo.classList.remove("error");
        loginInfo.classList.add("success");
        loginInfo.innerHTML = info;
        gotoMainPanel();
      } else {
        let info = "Error creating this account - bad form or email is busy";
        loginInfo.classList.remove("disable");
        loginInfo.classList.add("error");
        loginInfo.innerHTML = info;
      }
    });
  } catch (error) {
    console.log(error);
  }
};
