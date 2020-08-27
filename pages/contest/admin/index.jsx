// Index of all created Contests by User
import BaseLayout from "../../../components/base_layout";
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

const ContestIndex = () => {
  const [classer, setClasser] = useState(null);
  useEffect(() => {
    window.innerWidth <= 990 ? setClasser("d-none") : setClasser("col-lg-3");
  }, []);
  return (
    <BaseLayout navbarprop="ranking">
      <Head>
        <meta
          name="description"
          content="CodeStrike is an online community of coders."
        />
      </Head>
      <div
        style={{
          width: "99%",
        }}
      >
        <div className="row">
          <div className={classer}>
            <Link href="#">
              <div className="shadow p-3 my-2 ml-5 sidebar-col">
                <img src="/ico.png" alt="logo" className="mw-100 p-5" />
                <h5>Test the Knowledge of your Students</h5>
                <h5>Select your Problem Statements</h5>
                <h5>Check their solutions. It's simple!</h5>
                <h1 className="mb-0 pl-5">→</h1>
              </div>
            </Link>
          </div>
          <div className="col-lg-6 mt-3">
            <div className="container px-3 mb-3">
              <div className="d-flex justify-content-start">
                <div className="mr-auto">
                  <h4>Contests created so far</h4>
                </div>
                <div>
                  <button type="button" className="btn btn-success">
                    + Create New Contest
                  </button>
                </div>
              </div>
            </div>
            <div className="w-100 mx-auto mb-5 mt-2 ps-tab-div">
              <table className="table ps-table">
                <thead className="black white-text">
                  <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">User</th>
                    <th scope="col">Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>objname</th>
                    <th>objedcreatate</th>
                    <th>objparticipants</th>
                  </tr>
                </tbody>
              </table>
              <a
                onClick={() => {
                  alert(
                    "To create more than one contest contact us at codestrike20@gmail.com"
                  );
                }}
              >
                <p>To create more than one Contest click here</p>
              </a>
            </div>
          </div>
          <div className={classer}>
            <Link href="#">
              <div className="shadow p-3 my-2 mr-5 sidebar-col">
                <img src="/ico.png" alt="logo" className="mw-100 p-5" />
                <h5>Hire employers by giving them a codestrike test</h5>
                <h5>Select your Problem Statements</h5>
                <h5>Check their Solutions. It's simple!</h5>
                <h1 className="mb-0 pl-5">→</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default ContestIndex;
