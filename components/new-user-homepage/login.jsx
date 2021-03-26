import { setLogin } from "../base_layout";
import Register from "./register";
import URL from "../url";
import axios from "axios";
import { useState } from "react";
import ForgotPass from "./forgot-pass";
import { setDashboard } from "../../pages/index";
import {
  loggedIn,
  setLoggedIn,
  user,
  setUser,
  pp,
  setPp,
  dot,
  setDot,
} from "../../pages/_app";
import SmLoader from "../common/sm-loader";

const Login = (props) => {
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
          <form
            className="d-flex flex-column align-items-center"
            onSubmit={(e) => {
              e.preventDefault();
              const username = document.getElementById("username").value;
              const password = document.getElementById("password").value;
              if (username !== "" && password !== "") {
                setMessage(<SmLoader />);
                axios
                  .post(`${URL}/accounts/login/`, {
                    username: username,
                    password: password,
                  })
                  .then(function (response) {
                    if (response["data"]["token"] !== "Incorrect credentials") {
                      localStorage.setItem(
                        "token",
                        `${response["data"]["token"]}`
                      );
                      axios
                        .get(`${URL}/accounts/user/`, {
                          headers: {
                            Authorization: localStorage.getItem("token"),
                          },
                        })
                        .then((response) => {
                          setPp(response["data"].profile_pic);
                        });
                      axios
                        .post(`${URL}/accounts/validate-token/`, {
                          token: localStorage.getItem("token"),
                        })
                        .then((response) => {
                          response["data"]["res"] === true && setLoggedIn(true);
                          axios
                            .get(`${URL}/accounts/user/`, {
                              headers: {
                                Authorization: localStorage.getItem("token"),
                              },
                            })
                            .then((response) => {
                              const profile = response["data"];
                              setUser(profile.username);
                              profile.first_name !== "" &&
                              profile.last_name !== "" &&
                              profile.github_link !== "" &&
                              profile.linkedin_link !== ""
                                ? setDot(false)
                                : setDot(true);
                              setPp(profile.profile_pic);
                            });
                        });
                      document.getElementById("close-btn").click();
                      setLoggedIn(true);
                      document.getElementById("db-user")
                        ? setDashboard(true)
                        : "";
                    } else {
                      setMessage("Incorrect credentials");
                    }
                  });
              }
            }}
          >
            <div>
              <input type="text" placeholder="Username 8 characters" id="username" maxLength="30"/>
            </div>
            <div>
              <input type="password" placeholder="Password" id="password" maxLength="16"/>
            </div>
            <div>
              <button type="submit">Login</button>
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
                id="register-btn"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
