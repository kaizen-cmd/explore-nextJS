import Head from "next/head";
import BaseLayout from "../../components/base_layout";
import axios from "axios";
import URL, { referer } from "../../components/url";
import Link from "next/link";

const PsIndex = (props) => {
  return (
    <BaseLayout navbarprop="psindex">
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
              <th scope="col">Problem</th>
              <th scope="col">Author</th>
              <th scope="col">Total Subs</th>
              <th scope="col">Correct %</th>
            </tr>
          </thead>
          <tbody>
            {props.ps_objs.map((ps_obj) => {
              return (
                <tr>
                  <td>
                    <Link
                      href="/problem/[editor]/"
                      as={`/problem/${ps_obj.pk}/`}
                    >
                      <a>{ps_obj.title}</a>
                    </Link>
                  </td>
                  <Link
                    href="/profile/[profile]/"
                    as={`/profile/${ps_obj.author}/`}
                  >
                    <a>
                      <td>{ps_obj.author}</td>
                    </a>
                  </Link>
                  <td>{ps_obj.total_subs}</td>
                  <td>{ps_obj.correct_percentage}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </BaseLayout>
  );
};

export default PsIndex;

PsIndex.getInitialProps = async () => {
  const res = await axios.get(URL + "/codeportal/ps-records/", {
    headers: {
      Referer: referer,
    },
  });
  const data = res["data"];
  return {
    ps_objs: data,
  };
};
