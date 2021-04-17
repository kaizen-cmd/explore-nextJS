import React, { useEffect } from "react";
import Head from "next/head";
import BaseLayout from "../../components/base_layout";
import { loggedIn } from "../_app";

const ExamSlug = (props) => {
  return (
    <BaseLayout>
      <Head>
          <div>
              Hello
          </div>
        
      </Head>
    </BaseLayout>
  );
};

export default ExamSlug;