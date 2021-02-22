// list all the PS in this contest for participants
import { useEffect, useState } from "react";
import URL from "../../../components/url";
import axios from "axios";
import BaseLayout from "../../../components/base_layout";
import { loggedIn } from "../../_app";
import Link from "next/link";
import Head from "next/head";
import parser from "html-react-parser";

const PsIndex = () => {
  const [presentArray, setPresentArray] = useState([]);
  const [lastURLSegment1, setLastURLSegment1] = useState("");
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");
  const [desc, setDesc] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      var pageURL = window.location.href;
      var lastURLSegment;
      lastURLSegment = pageURL.substr(pageURL.lastIndexOf("/") + 1);
      setLastURLSegment1(lastURLSegment);
      axios.get(`${URL}/codeportal${window.location.pathname}/`).then((res) => {
        setTitle(res.data.title);
        setOwner(res.data.owner);
        setPresentArray(res.data.ps_list);
        setDesc(res.data.desc);
      });
    } else {
      document.getElementById("login-btn").click();
      setTimeout(() => {
        document.getElementById("register-btn").click();
      }, 1);
    }
  }, [loggedIn]);
  return (
    <BaseLayout>
      <Head>
        <title>{title} | CodeStrike</title>
        <meta name="description" content={`${desc}`} />
      </Head>
      {loggedIn ? (
        <div
          className="container mt-2 py-4 px-5 mb-4"
          style={{
            backgroundColor: "#f1f3f8",
          }}
        >
          <div className="row">
            <div className="col-lg-6">
              <h1 className="my-0">{title} </h1>
              <Link href="/profile/[profile]" as={`/profile/${owner}`}>
                <h6 className="d-inline my-0">
                  Contest Admin: <a className="text-primary">{owner}</a>
                </h6>
              </Link>
              <hr
                style={{
                  width: "70%",
                  border: "none",
                  borderBottom: "2px solid grey",
                }}
              />
              <div
                style={{
                  wordWrap: "break-word",
                  whiteSpace: "pre-wrap",
                }}
              >
                {parser(desc)}
              </div>
            </div>
            <div className="col-lg-6 mb-5 pt-5 px-0">
              <table className="table ps-table">
                <thead className="black white-text">
                  <tr>
                    <th scope="col">Problem</th>
                    <th scope="col">Points</th>
                    <th scope="col">Author</th>
                  </tr>
                </thead>
                <tbody>
                  {presentArray.map((p) => {
                    return (
                      <tr>
                        <a
                          href={`${window.location.pathname}/${p.pk}`}
                          target="_blank"
                        >
                          <td className="font-weight-bold">
                            <a className="text-primary">{p.title}</a>
                          </td>
                        </a>
                        <Link
                          href="/contest/[name]/[ps_id]"
                          as={`${window.location.pathname}/${p.pk}`}
                        >
                          <td className="font-weight-bold">{p.points}</td>
                        </Link>
                        <Link
                          href="/profile/[profile]"
                          as={`/profile/${owner}`}
                        >
                          <td className="font-weight-bold">
                            <a className="text-primary">{p.author}</a>
                          </td>
                        </Link>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </BaseLayout>
  );
};

export default PsIndex;
