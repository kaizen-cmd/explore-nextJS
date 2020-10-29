import BaseLayout from "../../../components/base_layout";
import { MDBDataTable } from "mdbreact";
import { loggedIn } from "../../_app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Axios from "axios";
import URL from "../../../components/url";
import Head from "next/head";

const QuizAdminIndex = () => {
  const router = useRouter();
  const [contests, setContests] = useState([]);
  useEffect(() => {
    !loggedIn
      ? router.push("/")
      : Axios.get(`${URL}/mcq/user-contests`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }).then((res) => {
          setContests(
            res.data.map((contest) => {
              return {
                title: contest.title,
                is_live: contest.is_live ? "Live" : "Not Live",
                created_on: contest.created_on,
                clickEvent: () => {
                  router.push(
                    `/quiz/admin/[contest]`,
                    `/quiz/admin/${contest.slug}`
                  );
                },
              };
            })
          );
        });
  }, [loggedIn]);
  const data = {
    columns: [
      {
        label: "Contest Name",
        field: "title",
        sort: "asc",
      },
      {
        label: "Status",
        field: "is_live",
        sort: "asc",
      },
      {
        label: "Date",
        field: "created_on",
        sort: "asc",
      },
    ],
    rows: contests,
  };
  return (
    <>
      <BaseLayout>
      <Head>
        <title>MCQ Admin | CodeStrike</title>
      </Head>
        {loggedIn ? (
          <div className="container px-0 mt-2 mb-4">
            <div className="row">
              <div
                className="col-lg-9 pt-3 pb-1 shadow-sm"
                style={{
                  backgroundColor: "#eeeeee",
                }}
              >
                <div className="top">
                  <div className="d-flex flex-row pb-3 align-items-center">
                    <div>
                      <h4 className="m-0">MCQ Contest Administration</h4>
                    </div>
                    <div className="ml-auto">
                      <button
                        className="btn btn-success btn-md ml-2 font-weight-bold"
                        onClick={() => {
                          router.push(
                            "/quiz/admin/[contest]",
                            "/quiz/admin/new"
                          );
                        }}
                      >
                        + Create MCQ contest
                      </button>
                    </div>
                  </div>
                </div>
                <div className="current-contest-table">
                  <MDBDataTable
                    paging={false}
                    searching={false}
                    data={data}
                    noBottomColumns={true}
                    bordered={true}
                  />
                </div>
              </div>
              <div className="col-lg-3"></div>
            </div>
          </div>
        ) : (
          ""
        )}
      </BaseLayout>
    </>
  );
};

export default QuizAdminIndex;
