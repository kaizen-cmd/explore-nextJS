import { setLogin } from "../base_layout";
import Login from "./login";

const Register = () => {
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
          <div className="d-flex flex-column align-items-center">
            <div>
              <input type="text" placeholder="Username" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
            <div>
              <button>Register</button>
            </div>
            <div className="mb-4">
              <a
                onClick={() => {
                    document.getElementById("register-container").classList.add("animate__bounceOut");
                    setTimeout(() => {
                      setLogin(<Login />);
                    }, 500);
                }}
              >
                Already a member? Login here.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
