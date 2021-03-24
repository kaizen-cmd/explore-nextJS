import Head from "next/head";
import BaseLayout from "../../components/base_layout";
// import axios from "axios";
// import URL from "../../components/url";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { useRouter } from "next/router";

const GRanking = (props) => {
//   const [classer, setClasser] = useState(null);
//   useEffect(() => {
//     window.innerWidth <= 990 ? setClasser("d-none") : setClasser("col-lg-3");
//   }, []);
//   const router = useRouter();
//   const data = {
//     columns: [
//       {
//         label: "Rank",
//         field: "rank",
//         sort: "asc",
//         width: 10,
//       },
//       {
//         label: "Username",
//         field: "username",
//         sort: "asc",
//         width: 70,
//       },
//       {
//         label: "Points",
//         field: "points",
//         sort: "asc",
//         width: 15,
//       },
//     ],
//     rows: props.leader_objs.map((obj) => {
//       return {
//         rank: obj.rank,
//         username: obj.username,
//         points: obj.points,
//         clickEvent: () => {
//           router.push(`/profile/[profile]`, `/profile/${obj.username}`);
//         },
//       };
//     }),
//   };

  return (
    <BaseLayout navbarprop="ranking">
      <Head>
        <title>Leaderboard | CodeStrike</title>
        <meta
          name="description"
          content="Solve the problems on CodeStrike to earn points and see yourself rank up on the leaderboard."
        />
        <meta name="og:title" content="Leaderboard | CodeStrike" />
        <meta name="og:url" content={props.cLink} />
        <meta
          name="og:description"
          content="Solve the problems on CodeStrike to earn points and see yourself rank up on the leaderboard."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Leaderboard | CodeStrike" />
        <meta name="twitter:url" content={props.cLink} />
        <meta
          name="twitter:description"
          content="Solve the problems on CodeStrike to earn points and see yourself rank up on the leaderboard."
        />
        <meta itemProp="name" content="Leaderboard | CodeStrike" />
        <meta
          itemProp="description"
          content="Solve the problems on CodeStrike to earn points and see yourself rank up on the leaderboard."
        />
      </Head>
      <div
        style={{
          width: "99%",
        }}
      >
        <div className="row">
          <div className={classer}>
          </div>
          <div className="col-lg-6">
            <div className="w-100 mx-auto mb-5 mt-2 ps-tab-div">
              <MDBDataTable medium data={data} noBottomColumns={true} />
            </div>
          </div>
          <div className={classer}>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default GRanking;
