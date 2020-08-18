import { setLogin } from "../base_layout";
import Login from "./login";
import axios from "axios";
import URL from "../url";
import { useState } from "react";

const ForgotPass = (props) => {
  const [message, setMessage] = useState("");
  return (
    <div
      className="login-container h-100 justify-content-center animate__animated animate__bounceIn"
      id="forgotpass-container"
    >
      <div className="container inner-main-login">
        <div className="d-flex flex-column inner-login-container">
          <div className="d-flex flex-row login-header-container">
            <div className="mr-auto mb-0 login-heading">
              <h4 className="mb-0">Forgot Password</h4>
            </div>
            <div className="mb-0">
              <button
                className="mb-0"
                id="close-btn"
                onClick={() => {
                  document
                    .getElementById("forgotpass-container")
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
              <input type="email" placeholder="Email" id="f-email" />
            </div>
            <div>
              <button
                onClick={() => {
                  const email = document.getElementById("f-email").value;
                  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                  if (emailPattern.test(email)) {
                    setMessage("Loading ...");
                    axios
                      .post(`${URL}/accounts/pass-reset-email/`, {
                        email: email,
                      })
                      .then((response) => {
                        setMessage(response["data"]["res"]);
                        setTimeout(() => {
                          document.getElementById("close-btn").click();
                        }, 2500);
                      });
                  } else {
                    setMessage("Enter a valid email");
                  }
                }}
              >
                Send reset mail
              </button>
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
            <div className="mb-4">
              <a
                href="#"
                onClick={() => {
                  document
                    .getElementById("forgotpass-container")
                    .classList.add("animate__bounceOut");
                  setTimeout(() => {
                    setLogin(<Login />);
                  }, 500);
                }}
              >
                Login here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
