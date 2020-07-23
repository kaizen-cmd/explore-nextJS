const SignUpContainer = ({option}) => {
  if (option === "top") {
    return (
      <div className="top-container">
        <div className="container pt-4 pb-5">
          <div className="row homepage-top">
            <div className="col-md-6">
              <img src="/images/homepage.svg" alt="" />
            </div>
            <div className="col-md-6">
              <div className="col-lg-12 p-5 h-50 head">
                <h1>
                  Signup to participate in exciting coding contests and win
                  amazing prizes.
                </h1>
                <div className="w-50 signup-btn">
                  <button className="animate__animated animate__pulse animate__slow animate__infinite">
                    Signup →
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
      <div className="top-container">
        <div className="container pt-4 pb-5">
          <div className="row homepage-top">
            <div className="col-md-6">
              <div className="col-lg-12 p-5 h-50 head">
                <h1>
                  To enjoy all these events and tutorials, Sign up today without
                  fail!
                </h1>
                <div className="w-50 signup-btn ml-0">
                  <button className="animate__animated animate__pulse animate__slow animate__infinite">
                    Signup →
                  </button>
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
