// Detail view of Contest Dashboard
import BaseLayout from "../../../components/base_layout";
import { useState, useEffect } from "react";
import axios from "axios";
import URL from "../../../components/url";
import SmLoader from "../../../components/common/sm-loader";
import { useRouter } from "next/router";
import { loggedIn } from "../../_app";

const ContestDetailAdmin = () => {
  const [view, setView] = useState("details");
  const [cSlug, setCSlug] = useState("");
  const [cSlugUrl, setCSlugUrl] = useState("");
  const [presentArray, setPresentArray] = useState([]);
  const [availArray, setAvailArray] = useState([]);
  const [desc, setDesc] = useState("");
  const [isLive, setIsLive] = useState("");
  const [subArr, setSubArr] = useState([]);
  const [detailM, setDetailM] = useState("");
  const [problemM, setProbleM] = useState("");
  const [lastURLSegment1, setLastURLSegment1] = useState("");
  const [elems, setElems] = useState([]);
  const [delPop, setDelPop] = useState(null);
  const router = useRouter();
  useEffect(() => {
    !localStorage.getItem("token") && router.push("/");
    setElems(document.getElementsByClassName("admin-contest-head"));
    var pageURL = window.location.href;
    var lastURLSegment;
    lastURLSegment = pageURL.substr(pageURL.lastIndexOf("/") + 1);
    axios
      .get(URL + "/codeportal/admin-contest/" + lastURLSegment + "/", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setCSlug(res.data.title);
        setDesc(res.data.desc);
        setIsLive(res.data.is_live);
        setPresentArray([...res.data.ps_list]);
        setAvailArray([...res.data.all_ps_list]);
        setSubArr([...res.data.sub_list]);
        setCSlugUrl(res.data.url);
        setLastURLSegment1(res.data.pk);
      });
  }, []);
  return (
    <BaseLayout>
      <div className="container mt-4">
        {delPop}
        <div className="w-100 h-25 mb-4">
          <div
            className="d-flex flex-row"
            id="contest-navbar"
            style={{
              backgroundColor: "#e5e5e5",
              overflowX: "scroll",
            }}
          >
            <div className="px-5 pt-4 pb-2 admin-contest">
              <h5
                className="admin-contest-head my-0"
                onClick={() => {
                  setView("details");
                  Array.prototype.forEach.call(elems, function (el) {
                    el.style.borderBottom = "none";
                  });
                  document.getElementsByClassName(
                    "admin-contest-head"
                  )[0].style.borderBottom = "4px solid #0070f3";
                }}
              >
                Details
              </h5>
            </div>
            <div className="px-5 pt-4 pb-2 admin-contest">
              <h5
                className="admin-contest-head my-0"
                onClick={() => {
                  setView("problems");
                  Array.prototype.forEach.call(elems, function (el) {
                    el.style.borderBottom = "none";
                  });
                  document.getElementsByClassName(
                    "admin-contest-head"
                  )[1].style.borderBottom = "4px solid #0070f3";
                }}
              >
                Problems
              </h5>
            </div>
            <div className="px-5 pt-4 pb-2 admin-contest">
              <h5
                className="admin-contest-head my-0"
                onClick={() => {
                  setView("subs");
                  Array.prototype.forEach.call(elems, function (el) {
                    el.style.borderBottom = "none";
                  });
                  document.getElementsByClassName(
                    "admin-contest-head"
                  )[2].style.borderBottom = "4px solid #0070f3";
                }}
              >
                Submissions
              </h5>
            </div>
          </div>
        </div>

        {view === "details" && (
          <div>
            <div className="mb-3">
              <p>Title: </p>
              <input
                type="text"
                id="c-name"
                style={{
                  border: "none",
                  boxShadow: "0px 0px 5px rgba(0, 118, 255, 0.3) inset",
                  width: "80%",
                  padding: 10,
                }}
                value={cSlug}
                onChange={(e) => {
                  setCSlug(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <p>Description: </p>
              <textarea
                style={{
                  width: "80%",
                  height: "170px",
                }}
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="mb-3">
              <div className="d-flex flex-row align-items-center">
                <div>
                  <br />
                  <p>Is Live: &nbsp;&nbsp;&nbsp;&nbsp;</p>
                </div>
                <input
                  type="checkbox"
                  checked={isLive}
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                  onClick={() => {
                    isLive ? setIsLive(false) : setIsLive(true);
                  }}
                />
              </div>
            </div>
            <button
              className="btn btn-md btn-success mt-1 mb-3 px-5 font-weight-bold mr-3"
              onClick={() => {
                setDetailM(<SmLoader />);
                if (cSlug !== "" && desc !== "") {
                  axios
                    .put(
                      `${URL}/codeportal/admin-contest/${lastURLSegment1}/`,
                      {
                        title: cSlug,
                        desc: desc,
                        is_live: isLive,
                      },
                      {
                        headers: {
                          Authorization: localStorage.getItem("token"),
                        },
                      }
                    )
                    .then((res) => {
                      setCSlugUrl(res.data.contest_url);
                      res.data.res === "Title already used by other contest"
                        ? setDetailM(
                            <p className="text-danger font-weight-bold d-inline">
                              Contest with this title already exists.
                            </p>
                          )
                        : setDetailM(
                            <p className="text-success font-weight-bold d-inline">
                              Saved
                            </p>
                          );
                      setTimeout(() => {
                        setDetailM(null);
                      }, 2500);
                    });
                } else {
                  setDetailM(
                    <p className="d-inline text-danger font-weight-bold">
                      Fill in the required fields
                    </p>
                  );
                }
              }}
            >
              Save
            </button>
            {detailM}
            <div className="mb-5">
              <p className="mb-0">Share this URL with participants: </p>
              <a href={cSlugUrl}>{cSlugUrl}</a>
            </div>
            <button
              className="btn btn-md btn-danger font-weight-bold mt-1 mb-3 px-2"
              onClick={() => {
                axios
                  .delete(
                    `${URL}/codeportal/admin-contest/${lastURLSegment1}/`,
                    {
                      headers: {
                        Authorization: localStorage.getItem("token"),
                      },
                    }
                  )
                  .then(() => {
                    router.push("/contest/admin");
                  });
              }}
            >
              Delete Contest
            </button>
          </div>
        )}

        {view === "problems" && (
          <div className="row">
            <div className="col-lg-9">
              <div>
                <h4 className="mb-3">Problems in Contest</h4>
                <div className="w-100 mx-auto mb-4 mt-2 ps-tab-div">
                  <table className="table ps-table">
                    <thead className="black white-text">
                      <tr>
                        <th scope="col">Problem</th>
                        <th scope="col">Points</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {presentArray.map((p) => {
                        return (
                          <tr id={p.pk}>
                            <td>
                              <a href={`${URL}${p.link}`}>{p.title}</a>
                            </td>
                            <td>{p.points}</td>
                            <td>
                              <button
                                style={{
                                  borderRadius: "50%",
                                  outline: "none",
                                  backgroundColor: "transparent",
                                  border: "2px solid orangered",
                                  color: "orangered",
                                  width: "27px",
                                }}
                                onClick={() => {
                                  var index = presentArray.findIndex(
                                    (pq) => pq.pk == p.pk
                                  );
                                  presentArray.splice(index, 1);
                                  setPresentArray([...presentArray]);
                                }}
                              >
                                <strong>-</strong>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <button
                className="btn btn-md btn-success mb-2 px-5 mr-3 font-weight-bold"
                onClick={() => {
                  setProbleM(<SmLoader />);
                  var ps_list = [];
                  presentArray.map((ele) => {
                    ps_list.push(ele.pk);
                  });

                  axios
                    .put(
                      `${URL}/codeportal/admin-contest/${lastURLSegment1}/`,
                      {
                        ps_list: ps_list,
                      },
                      {
                        headers: {
                          Authorization: localStorage.getItem("token"),
                        },
                      }
                    )
                    .then(() => {
                      setProbleM(
                        <p className="text-success font-weight-bold d-inline">
                          Saved
                        </p>
                      );
                    });
                }}
              >
                Save
              </button>
              {problemM}
            </div>
            <hr
              style={{
                width: "100%",
                borderBottom: "2px",
              }}
            />
            <div className="col-lg-9">
              <div>
                <h4 className="mb-3">Available Problems</h4>
                <div className="w-100 mx-auto mb-5 mt-2 ps-tab-div">
                  <table className="table ps-table">
                    <thead className="black white-text">
                      <tr>
                        <th scope="col">Problem</th>
                        <th scope="col">Points</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {availArray.map((p) => {
                        return (
                          <tr>
                            <td>
                              <a href={`${URL}${p.link}`} target="_blank">{p.title}</a>
                            </td>
                            <td>{p.points}</td>
                            <td>
                              <button
                                style={{
                                  borderRadius: "50%",
                                  outline: "none",
                                  backgroundColor: "transparent",
                                  border: "2px solid #09db1a",
                                  color: "#09db1a",
                                  width: "27px",
                                }}
                                onClick={() => {
                                  setPresentArray([
                                    ...presentArray,
                                    {
                                      title: p.title,
                                      points: p.points,
                                      pk: p.pk,
                                    },
                                  ]);
                                }}
                              >
                                <strong>+</strong>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === "subs" && (
          <div>
            <div className="col-lg-9">
              <div>
                <h4 className="mb-3">Submissions Recieved so far</h4>
                <div className="w-100 mx-auto mb-5 mt-2 ps-tab-div">
                  <table className="table ps-table">
                    <thead className="black white-text">
                      <tr>
                        <th scope="col">Problem</th>
                        <th scope="col">Username</th>
                        <th scope="col">Solution</th>
                        <th scope="col">Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subArr.map((p) => {
                        return (
                          <tr>
                            <td className="font-weight-bold">{p.ps_title}</td>
                            <td className="font-weight-bold">{p.user}</td>
                            <a href={`${URL}${p.file_path}`} target="_blank">
                              <td>Click to view</td>
                            </a>
                            <td>
                              {p.is_correct ? (
                                <p className="text-success font-weight-bold my-0">
                                  Correct
                                </p>
                              ) : (
                                <p className="text-danger font-weight-bold my-0">
                                  Wrong
                                </p>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </BaseLayout>
  );
};

export default ContestDetailAdmin;
