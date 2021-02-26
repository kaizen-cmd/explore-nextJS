import React, { useEffect } from "react";
import Head from "next/head";
import BaseLayout from "../../components/base_layout";
import { loggedIn } from "../_app";

const Cform = (props) => {
  useEffect(() => {
    if (!loggedIn) {
      setTimeout(() => {
        document.getElementById("login-btn").click();
      }, 1000);
    }
  });
  return (
    <BaseLayout>
      <Head>
        <meta
          name="description"
          content="CodeStrike is an online community of coders."
        />
      </Head>
      <div className="container ">
        <div className="col-lg-full d-flex flex-column align-items-center mb-5">
          <div className="d-flex justify-content-center">
            {loggedIn && (
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfU2tNmhTTtRBLltn10EjitO10vcSqyOp64DUv61D7Ap2b8OA/viewform?embedded=true"
                width="1280"
                height="960"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading…
              </iframe>
            )}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Cform;