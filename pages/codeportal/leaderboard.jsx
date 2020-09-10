import Head from "next/head";
import BaseLayout from "../../components/base_layout";
import axios from "axios";
import URL from "../../components/url";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { useRouter } from "next/router";

const Ranking = (props) => {
  const [classer, setClasser] = useState(null);
  useEffect(() => {
    window.innerWidth <= 990 ? setClasser("d-none") : setClasser("col-lg-3");
  }, []);
  const router = useRouter();
  const data = {
    columns: [
      {
        label: "Rank",
        field: "rank",
        sort: "asc",
        width: 10,
      },
      {
        label: "Username",
        field: "username",
        sort: "asc",
        width: 70,
      },
      {
        label: "Points",
        field: "points",
        sort: "asc",
        width: 15,
      },
    ],
    rows: props.leader_objs.map((obj) => {
      return {
        rank: obj.rank,
        username: obj.username,
        points: obj.points,
        clickEvent: () => {
          router.push(`/profile/[profile]`, `/profile/${obj.username}`);
        },
      };
    }),
  };

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
            <Link href="/">
              <div className="shadow p-3 my-2 ml-5 sidebar-col">
                <img src="/ico.png" alt="logo" className="mw-100 p-5" />
                <h5>Head towards the dashboard.</h5>
                <h5>See the live problems. Solve them!</h5>
                <h5>Get Points. It's simple!</h5>
                <h1 className="mb-0 pl-5">→</h1>
              </div>
            </Link>
          </div>
          <div className="col-lg-6">
            <div className="w-100 mx-auto mb-5 mt-2 ps-tab-div">
              <MDBDataTable medium data={data} />
            </div>
          </div>
          <div className={classer}>
            <Link href="/">
              <div className="shadow p-3 my-2 mr-5 sidebar-col">
                <img src="/ico.png" alt="logo" className="mw-100 p-5" />
                <h5>Head towards the dashboard.</h5>
                <h5>See the live problems. Solve them!</h5>
                <h5>Get Points. It's simple!</h5>
                <h1 className="mb-0 pl-5">→</h1>
              </div>
            </Link>
          </div>
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
