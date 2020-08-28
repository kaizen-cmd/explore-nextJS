// Index of all created Contests by User
import BaseLayout from "../../../components/base_layout";
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import URL from "../../../components/url";

const ContestIndex = () => {
  const [classer, setClasser] = useState(null);
  const [arr, setArr] = useState([]);
  const [dis, setDis] = useState(null);
  const router = useRouter();
  useEffect(() => {
    window.innerWidth <= 990 ? setClasser("d-none") : setClasser("col-lg-3");
    if (localStorage.getItem("token")) {
      axios
        .get(URL + "/codeportal/contest-list/", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          typeof(res.data.contests) === "object"
            ? setArr(res.data.contests)
            : setArr([]);
          setDis(res.data.disabled);
        });
      localStorage.getItem("token");
    } else {
      router.push("/");
    }
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
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                      if (dis === "disabled") {
                        alert(
                          "To create more than one contest contact us at codestrike20@gmail.com"
                        );
                      } else {
                        router.push("/contest/admin/new-contest");
                      }
                    }}
                  >
                    + Create New Contest
                  </button>
                </div>
              </div>
            </div>
            <div
              className="w-100 mx-auto mb-5 mt-2 ps-tab-div"
              id="ad-index"
              style={{
                overflowX: "scroll",
              }}
            >
              <table className="table ps-table">
                <thead className="black white-text">
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Status</th>
                    <th scope="col">Submissions</th>
                  </tr>
                </thead>
                <tbody>
                  {arr.map((rec) => {
                    return (
                      <Link
                        href="/contest/admin/[id]"
                        as={`/contest/admin/${rec.pk}`}
                      >
                        <tr>
                          <th>{rec.title}</th>
                          <th>
                            {rec.is_live ? (
                              <p className="text-success">Live</p>
                            ) : (
                              <p className="text-danger">Not Live</p>
                            )}
                          </th>
                          <th>{rec.sub_count}</th>
                        </tr>
                      </Link>
                    );
                    1;
                  })}
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
