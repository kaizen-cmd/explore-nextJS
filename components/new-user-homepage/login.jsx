import { setLogin } from "../base_layout";
import Register from "./register";

const Login = () => {
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
              <input type="text" placeholder="Username" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
            <div>
              <button>Login</button>
            </div>
            <div>
              <a href="#">
                <p>Forgot Password ?</p>
              </a>
            </div>
            <div className="mb-4">
              <a
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
