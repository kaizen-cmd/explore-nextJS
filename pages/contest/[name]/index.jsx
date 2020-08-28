// list all the PS in this contest for participants
import { useEffect, useState } from "react";
import URL from "../../../components/url";
import axios from "axios";
import BaseLayout from "../../../components/base_layout";
import { loggedIn } from "../../_app";
import Link from "next/link";

const PsIndex = () => {
  const [presentArray, setPresentArray] = useState([]);
  const [lastURLSegment1, setLastURLSegment1] = useState("");
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");
  useEffect(() => {
    var pageURL = window.location.href;
    var lastURLSegment;
    lastURLSegment = pageURL.substr(pageURL.lastIndexOf("/") + 1);
    setLastURLSegment1(lastURLSegment);
    axios.get(`${URL}/codeportal${window.location.pathname}/`).then((res) => {
      setTitle(res.data.title);
      setOwner(res.data.owner);
      setPresentArray(res.data.ps_list);
    });
  }, []);
  return (
    <BaseLayout>
      {loggedIn ? (
        <div>
          <div className="text-center mt-2 mb-3">
            <h1 className="text-center my-0">{title}</h1>
            <p className="text-center my-0">by</p>
            <Link href="/profile/[profile]" as={`/profile/${owner}`}>
              <h3 className="text-center my-0">
                <a href="">{owner}</a>
              </h3>
            </Link>
          </div>
          <div className="col-lg-9 mx-auto mb-5">
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
                      <Link
                        href="/contest/[name]/[ps_id]"
                        as={`${window.location.pathname}/${p.pk}`}
                      >
                        <td className="font-weight-bold"><a>{p.title}</a></td>
                      </Link>
                      <td className="font-weight-bold">{p.points}</td>
                      <Link href="/profile/[profile]" as={`/profile/${owner}`}>
                        <td className="font-weight-bold">
                          <a>{p.author}</a>
                        </td>
                      </Link>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </BaseLayout>
  );
};

export default PsIndex;
