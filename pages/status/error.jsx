import React from "react";
import Head from "next/head";
import BaseLayout from "../../components/base_layout";

const TransFail = (props) => {
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
          <div className="d-flex justify-content-center p-4 ">
            <img
              src="/images/payment-failure.svg"
              className=" align-items-center mw-100"
            />
          </div>
          <div className="d-flex justify-content-center">
            <h1>
              Transaction Failed
              <br />
              <a href="https://www.payumoney.com/paybypayumoney/#/739DEA8A42A7E089D47B67026DF4172A">
                Please try again here →
              </a>
            </h1>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default TransFail;
