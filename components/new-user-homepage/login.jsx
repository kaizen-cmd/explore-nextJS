import { setLogin } from "../base_layout";
import Register from "./register";
import URL from "../url";
import axios from "axios";
import { setLoggedIn } from "../common/navbar";
import { useState } from "react";
import ForgotPass from "./forgot-pass";
import { setDashboard } from "../../pages/index";

const Login = () => {
  const [message, setMessage] = useState("");
  return (
    <div
      className="login-container h-100 justify-content-center animate__animated animate__bounceIn"
      id="login-container"
    >
      <div className="container inner-main-login">
        <div className="d-flex flex-column inner-login-container">
          <div className="d-flex flex-row login-header-container">
            <div className="mr-auto mb-0 login-heading">
              <h4 className="mb-0">CodeStrike-Login</h4>
            </div>
            <div className="mb-0">
              <button
                id="close-btn"
                className="mb-0"
                onClick={() => {
                  document
                    .getElementById("login-container")
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
          <div className="d-flex flex-column align-items-center">
            <div>
              <input type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <input type="password" placeholder="Password" id="password" />
            </div>
            <div>
              <button
                onClick={() => {
                  const username = document.getElementById("username").value;
                  const password = document.getElementById("password").value;
                  if (username !== "" && password !== "") {
                    axios
                      .post(`${URL}/accounts/login/`, {
                        username: username,
                        password: password,
                      })
                      .then(function (response) {
                        if (
                          response["data"]["token"] !== "Incorrect credentials"
                        ) {
                          setLoggedIn(true);
                          setDashboard(true);
                          document.getElementById("close-btn").click();
                          localStorage.setItem(
                            "token",
                            `${response["data"]["token"]}`
                          );
                        } else {
                          setMessage("Incorrect credentials");
                        }
                      });
                  }
                }}
              >
                Login
              </button>
            </div>
            <div
              style={{
                color: "red",
                fontWeight: "bold",
              }}
            >
              <p>{message}</p>
            </div>
            <div>
              <a
                href="#"
                onClick={() => {
                  document
                    .getElementById("login-container")
                    .classList.add("animate__bounceOut");
                  setTimeout(() => {
                    setLogin(<ForgotPass />);
                  }, 500);
                }}
              >
                <p>Forgot Password ?</p>
              </a>
            </div>
            <div className="mb-4">
              <a
                href="#"
                onClick={() => {
                  document
                    .getElementById("login-container")
                    .classList.add("animate__bounceOut");
                  setTimeout(() => {
                    setLogin(<Register />);
                  }, 500);
                }}
              >
                New member? Register here.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
