// Detail view of Contest Dashboard
import BaseLayout from "../../../components/base_layout";
import { useState, useEffect } from "react";

const ContestDetailAdmin = () => {
  const [view, setView] = useState("details");
  const [cSlug, setCSlug] = useState("");
  const [presentArray, setPresentArray] = useState([]);
  const [availArray, setAvailArray] = useState([]);
  var c = -1;
  var [elems, setElems] = useState([]);
  var testarray = [
    { title: "sdfuhsiuhsudhsudh", points: "10" },
    { title: "sdfuhsiuhsudhsudh", points: "20" },
    { title: "sdfuhsiuhsudhsudh", points: "30" },
  ];
  useEffect(() => {
    setElems(document.getElementsByClassName("admin-contest-head"));
    setPresentArray([...testarray]);
    setAvailArray([...testarray]);
  }, []);
  return (
    <BaseLayout>
      <div className="container mt-4">
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
                  var p = e.target.value.replace(" ", "-");
                  setCSlug(p);
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
                  name=""
                  id=""
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                />
              </div>
            </div>
            <div>
              <p className="mb-0">Share this URL with participants: </p>
              <a href={"https://codestrike.vercel.app/" + cSlug}>
                {"https://codestrike.vercel.app/contest/" + cSlug}
              </a>
            </div>
            <button className="btn btn-md btn-success my-5 px-5">Save</button>
          </div>
        )}

        {view === "problems" && (
          <div className="row">
            <div className="col-lg-9">
              <div>
                <h4 className="mb-3">Problems in Contest</h4>
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
                      {presentArray.map((p) => {
                        c++;
                        return (
                          <tr>
                            <td>{p.title}</td>
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
                                  presentArray.splice(c, 1);
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
                            <td>{p.title}</td>
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
                                    { title: p.title, points: p.points },
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
                      {availArray.map((p) => {
                        return (
                          <tr>
                            <td>{p.title}</td>
                            <td>{p.points}</td>
                            <td>{p.title}</td>
                            <td>
                              <p className="text-success p-0 m-0">Correct</p>
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
