import BaseLayout from "../components/base_layout";
import Head from "next/head";

const ContactUs = (props) => {
  return (
    <BaseLayout>
      <Head>
        <title>Contact Us | CodeStrike</title>
        <meta
          name="description"
          content="Want to turn your idea into a business? Want to hire employees by testing their programming skills? Contact CodeStrike today for availing the service."
        />
        <meta
          name="og:description"
          content="Want to turn your idea into a business? Want to hire employees by testing their programming skills? Contact CodeStrike today for availing the service."
        />
        <meta
          itemprop="description"
          content="Want to turn your idea into a business? Want to hire employees by testing their programming skills? Contact CodeStrike today for availing the service."
        />
        <meta
          name="twitter:description"
          content="Want to turn your idea into a business? Want to hire employees by testing their programming skills? Contact CodeStrike today for availing the service."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | CodeStrike" />
        <meta name="twitter:url" content={props.cLink} />
        <meta
          name="twitter:image"
          content="https://img.techpowerup.org/200717/codestrike-logo-min.png"
        />
        <meta itemprop="name" content="Contact Us | CodeStrike" />
        <meta
          itemprop="image"
          content="https://img.techpowerup.org/200717/codestrike-logo-min.png"
        />
        <meta name="og:title" content="Contact Us | CodeStrike" />
        <meta name="og:url" content={props.cLink} />
        <meta
          name="og:image"
          content="https://img.techpowerup.org/200717/codestrike-logo-min.png"
        />
        <meta name="og:site_name" content="CodeStrike.in" />
        <meta name="og:email" content="codestrike20@gmail.com" />
        <meta property="og:type" content="Coding community" />
        <meta property="og:points" content="Code Strike_ACHIEVEMENT" />
      </Head>
      <div className="top-head d-flex align-items-center flex-column">
        <div className="my-2"></div>
        <h1 className="text-light my-5">Contact Us</h1>
        <div className="my-2"></div>
      </div>
      <div className="container my-5 border-top border-left border-bottom border-dark pl-4 pr-0">
        <div className="d-flex">
          <div
            style={{
              width: "60%",
            }}
          >
            <div className="my-4">
              <h4 className="m-0 mb-1 font-weight-bold">Send us a message</h4>
              <hr
                style={{
                  border: "none",
                  borderTop: "3px solid black",
                  margin: 0,
                  width: "90%",
                }}
              />
            </div>
            <div>
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  style={{
                    outline: "none",
                    padding: "7px 8px",
                    width: "90%",
                    border: "1px solid grey",
                  }}
                  className="mt-2 mb-4 shadow-sm font-weight-bold"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  style={{
                    outline: "none",
                    padding: "7px 8px",
                    width: "90%",
                    border: "1px solid grey",
                  }}
                  className="mb-4 shadow-sm font-weight-bold"
                />
              </div>
            </div>
            <div>
              <p className="font-weight-bold m-0 ml-1 mb-2">Your message</p>
              <textarea
                className="mb-3 shadow-sm font-weight-bold"
                style={{
                  outline: "none",
                  padding: "7px 8px",
                  width: "90%",
                  border: "1px solid grey",
                  height: "200px",
                }}
              ></textarea>
            </div>
            <div
              style={{
                marginLeft: "32%",
              }}
            >
              <button className="btn btn-primary btn-md font-weight-bold mb-4 px-3">
                Send Message
              </button>
            </div>
          </div>
          <div
            style={{
              width: "40%",
            }}
            className="bg-dark"
          >
            <div>
              <div className="my-4 px-3">
                <h4 className="font-weight-bold text-light text-center mb-4">
                  Contact Info
                </h4>
                <hr
                  style={{
                    border: "none",
                    borderTop: "3px solid white",
                    margin: 0,
                    width: "100%",
                  }}
                />
                <h5 className="text-center my-5">
                  <a
                    href="mailTo:codestrike20@gmail.com"
                    className="text-light"
                  >
                    {" "}
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    <span className="mr-1">{"  "} codestrike20@gmail.com</span>
                  </a>
                </h5>
              </div>
              <div className="icons px-5 d-flex justify-content-between mx-5 mb-5">
                <a href="https://www.instagram.com/code_strike/?hl=en">
                  <i className="fa fa-instagram text-white"></i>
                </a>
                <a href="https://www.linkedin.com/company/codestriketech">
                  <i className="fa fa-linkedin text-white"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCtinB90JWpCaPU8IBqJUMLQ">
                  <i className="fa fa-youtube text-white"></i>
                </a>
              </div>
              <div>
                <img
                  src="/images/contact.svg"
                  className="mw-100"
                  alt="customer care codestrike"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default ContactUs;

ContactUs.getInitialProps = (ctx) => {
  return {
    cLink: "https://codestrike.in" + ctx.asPath,
  };
};
