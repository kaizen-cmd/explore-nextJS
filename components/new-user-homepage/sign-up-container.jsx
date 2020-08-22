import { setLogin } from "../base_layout";
import Login from "./login";

const SignUpContainer = ({ option }) => {
  if (option === "top") {
    return (
      <div className="top-container">
        <div className="container pt-4 pb-5">
          <div className="row homepage-top">
            <div className="col-md-6">
              <img src="/images/rocket.gif" alt="" />
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column w-100 h-100 align-items-center justify-content-center">
                <div>
                  <h1>
                    Signup to participate in weekly coding contests to test your
                    skills and compete with fellow coders.
                  </h1>
                </div>
                <div className="signup-btn">
                  <button
                    onClick={() => {
                      window.scrollTo(0, 0);
                      setLogin(<Login />);
                      document.body.style.overflow = "hidden";
                    }}
                  >
                    Signup Now!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="top-container mb-5">
        <div className="container pt-4 pb-5">
          <div className="row homepage-top">
            <div className="col-md-6">
              <div className="col-lg-12 p-5 h-50 head">
                <div className="d-flex flex-column w-100 h-100 align-items-center justify-content-center">
                  <div>
                    <h1>
                      See the problem. Write the solution. Test it. Submit!
                      Check results after a week. It's simple.
                    </h1>
                  </div>
                  <div className="signup-btn">
                    <button
                      onClick={() => {
                        window.scrollTo(0, 0);
                        setLogin(<Login />);
                        document.body.style.overflow = "hidden";
                      }}
                    >
                      Signup Now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src="/images/homepage-2.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SignUpContainer;
