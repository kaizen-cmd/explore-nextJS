import React from "react";
import Head from "next/head";
import BaseLayout from "../components/base_layout";

const ContactUs = () => {
  return (
    <BaseLayout navbarprop="profile">
      <Head>
        <meta
          name="description"
          content="CodeStrike is an online community of coders."
        />
      </Head>
      <div className="container contactus-container">
        <div class="text-center">
          <br></br>
          <h1>Contact Us</h1>
        </div>
        <div className="row">
          <div className="col-lg-full d-flex flex-column align-items-center mb-5">
            <form method="post">
              <div className=" text-center row-md-3 m-4">
                <h4>Drop us a message, we would love to hear from you!</h4>
              </div>
              <div className="row m-2 p-2 ">
                <div className="col-md-6 m-2 p-2">
                  <div className="form-group p-2">
                    <input
                      type="text"
                      name="txtName"
                      className="form-control text-center"
                      placeholder="Name *"
                    />
                  </div>
                  <div className="form-group p-2">
                    <input
                      type="text"
                      name="txtEmail"
                      className="form-control text-center"
                      placeholder="Email *"
                    />
                  </div>
                  <div className="form-group p-2">
                    <div className="col-sm-auto p-2 ">
                      <textarea
                        className="form-control"
                        rows="5"
                        id="comment"
                        placeholder="Comment *"
                      ></textarea>
                    </div>
                  </div>
                  <div className="align-middle">
                    <div className="form-group p-2">
                      <button
                        type="submit"
                        name="btnSubmit"
                        className="btn btn-primary"
                      >Send Message</button>
                    </div>
                  </div>
                </div>
                <img
                  src="images/contactus.svg"
                  className="m-5 align-items-center"
                ></img>
              </div>
            </form>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default ContactUs;
