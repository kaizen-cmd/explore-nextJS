import { setLogin } from "../base_layout";
import Login from "./login";
import { useState } from "react";
import axios from "axios";
import URL from "../url";
import SmLoader from "../../components/common/sm-loader";

const Register = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [uExists, setUExists] = useState("");
  const [eExists, setEExists] = useState("");
  return (
    <div
      className="login-container h-100 justify-content-center animate__animated animate__bounceIn"
      id="register-container"
    >
      <div className="container inner-main-login">
        <div className="d-flex flex-column inner-login-container">
          <div className="d-flex flex-row login-header-container">
            <div className="mr-auto mb-0 login-heading">
              <h4 className="mb-0">CodeStrike-SignUp</h4>
            </div>
            <div className="mb-0">
              <button
                id="close-btn"
                className="mb-0"
                onClick={() => {
                  document
                    .getElementById("register-container")
                    .classList.add("animate__bounceOut");
                  setTimeout(() => {
                    setLogin(<></>);
                  }, 500);
                  document.body.style.overflow = "visible";
                }}
              >
                X
              </button>
            </div>
          </div>
          <form
            className="d-flex flex-column align-items-center"
            onSubmit={(e) => {
              e.preventDefault();
              const username = document.getElementById("username").value;
              const password = document.getElementById("password").value;
              const email = document.getElementById("email").value;
              var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
              if (
                username !== "" &&
                password !== "" &&
                emailPattern.test(email) &&
                username.length >= 4 &&
                password.length >= 8 &&
                uExists === "" &&
                eExists === ""
              ) {
                setMessage(<SmLoader />);
                axios
                  .post(`${URL}/accounts/register/`, {
                    username: username,
                    password: password,
                    email: email,
                  })
                  .then(function (response) {
                    setMessage(response["data"]["res"]);
                    setTimeout(() => {
                      document.getElementById("close-btn").click();
                    }, 2500);
                  });
              } else {
                setMessage("Information Invalid");
              }
            }}
          >
            <div>
              <input
                type="text"
                placeholder="Username(> 4 chars)"
                id="username"
                onBlur={() => {
                  axios
                    .post(`${URL}/accounts/validate/`, {
                      username: document.getElementById("username").value,
                    })
                    .then((response) => {
                      setUExists(response["data"]["username"]);
                    });
                }}
                value={username}
                onChange={(e) => {
                  var val = e.target.value;
                  val = val.replace(" ", "_");
                  setUsername(val);
                }}
              />
              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                {uExists}
              </p>
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                id="email"
                onBlur={() => {
                  axios
                    .post(`${URL}/accounts/validate/`, {
                      email: document.getElementById("email").value,
                    })
                    .then((response) => {
                      setEExists(response["data"]["email"]);
                    });
                }}
              />
              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                {eExists}
              </p>
            </div>
            <div>
              <input
                type="password"
                placeholder="Password (> 8 chars)"
                id="password"
              />
            </div>
            <div>
              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                {message}
              </p>
            </div>
            <div>
              <button tpye="submit">Register</button>
            </div>
            <div className="mb-4">
              <a
                onClick={() => {
                  document
                    .getElementById("register-container")
                    .classList.add("animate__bounceOut");
                  setTimeout(() => {
                    setLogin(<Login />);
                  }, 500);
                }}
              >
                Already a member? Login here.
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
