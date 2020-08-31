import React from 'react';
import Head from "next/head";
import BaseLayout from "../../components/base_layout";

const Success = (props) => {
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
            <div className="d-flex justify-content-center p-2 ">
                < img src="/images/wallet.svg" className=" align-items-center"/>
            </div>
            <div className="d-flex align-items-center">
                <h1>Transaction Successful<br/>
                  Thank You For Donating to CodeStrike<br/>
                  <a href="/">Go to Home →</a>
                </h1>
            </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Success;


