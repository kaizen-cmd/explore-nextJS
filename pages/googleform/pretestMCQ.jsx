import React from "react";
import Head from "next/head";
import BaseLayout from "../../components/base_layout";

const GoogleForm = (props) => {
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
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSf0HBWcT4daCzFopkd8Ppg-TpGW1inkO4vHapXpJAjuPV1yzw/viewform?embedded=true" 
            width="1280" 
            height="960" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default GoogleForm;
