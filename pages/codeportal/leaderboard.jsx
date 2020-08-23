import Head from "next/head";
import BaseLayout from "../../components/base_layout";
import axios from "axios";
import URL from "../../components/url";
import Link from "next/link";
import { useState, useEffect } from "react";

const Ranking = (props) => {
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
      <div className="row">
        <div className={classer}>
          <Link href="/">
            <div className="shadow p-3 my-2 ml-5 sidebar-col">
              <img src="/ico.png" alt="logo" className="mw-100" />
              <h5>Head towards the dashboard.</h5>
              <h5>See the live problems. Solve them!</h5>
              <h5>Get Points. It's simple!</h5>
              <h1 className="mb-0 pl-5">→</h1>
            </div>
          </Link>
        </div>
        <div className="col-lg-6">
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
                {props.leader_objs.map((obj) => {
                  return (
                    <tr>
                      <th>{obj.rank}</th>
                      <td>
                        <Link
                          href="/profile/[profile]/"
                          as={`/profile/${obj.username}/`}
                        >
                          <a>{obj.username}</a>
                        </Link>
                      </td>
                      <td>{obj.points}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className={classer}>
          <Link href="/codeportal/records">
            <div className="shadow p-3 my-2 mr-5 sidebar-col">
              <img src="/ico.png" alt="logo" className="mw-100" />
              <h5>Want to rank top?</h5>
              <h5>Start solving our practice questions today!</h5>
              <h5>They are completely free.</h5>
              <h1 className="mb-0 pl-5">→</h1>
            </div>
          </Link>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Ranking;

Ranking.getInitialProps = async () => {
  const res = await axios.get(URL + "/codeportal/ranking/");
  const data = res["data"];
  return {
    leader_objs: data,
  };
};
