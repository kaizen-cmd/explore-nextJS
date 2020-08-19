import Head from "next/head";
import BaseLayout from "../../components/base_layout";
import axios from "axios";
import URL from "../../components/url";
import Link from "next/link";

const Ranking = (props) => {
  return (
    <BaseLayout navbarprop="ranking">
      <Head>
        <meta
          name="description"
          content="CodeStrike is an online community of coders."
        />
      </Head>
      <div className="w-50 mx-auto my-5 ps-tab-div">
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
