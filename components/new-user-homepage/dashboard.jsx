import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import URL from "../url";

const Dashboard = (props) => {
  const [liveps, setLiveps] = useState([]);
  const [user, setUser] = useState({
    username: "",
    attempts: "",
    c_attempts: "",
  });

  useEffect(() => {
    axios.get(URL + "/codeportal/live-ps/", {}).then((response) => {
      setLiveps(response["data"]);
    });

    axios
      .get(`${URL}/accounts/user/`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUser(response["data"]);
      });
  }, []);

  return (
    <div className="top-container">
      <div className="container pt-3 pb-0">
        <div className="row homepage-top">
          <div className="col-md-6">
            <div className="col-lg-12 px-5 pt-3 head">
              <div className="mb-4">
                <h4>
                  Hi,{" "}
                  <span>
                    <strong>{user.username}</strong>
                  </span>{" "}
                  choose any one problem and solve it. Keep Coding!
                </h4>
                <h4>When in doubt, use bruteforce.</h4>
              </div>
              <div>
                <p>
                  Total Attempts:{" "}
                  <span>
                    <strong>{user.attempts}</strong>
                  </span>
                </p>
              </div>
              <div>
                <p>
                  Correct Percentage:{" "}
                  <span>
                    <strong>{user.c_percentage}</strong>
                  </span>
                </p>
              </div>
              <div>
                <p>
                  Total Correct Attempts:{" "}
                  <span>
                    <strong>{user.c_attempts}</strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-lg-12 mt-2">
              <div className="mb-2 text-center">
                <h4 className="mb-0">CodeStrike Contest Live</h4>
              </div>
              <table className="table ps-table">
                <thead className="black white-text">
                  <tr>
                    <th scope="col">Points</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                  </tr>
                </thead>
                <tbody>
                  {liveps.map((ps) => {
                    return (
                      <tr>
                        <th scope="row">{ps[2]}</th>
                        <td>
                          <Link
                            href="/problem/[editor]/"
                            as={`/problem/${ps[3]}/`}
                          >
                            <a target="_blank">{ps[0]}</a>
                          </Link>
                        </td>
                        <Link
                          href="/profile/[profile]/"
                          as={`/profile/${ps[1]}/`}
                        >
                          <td>
                            <a>{ps[1]}</a>
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
      </div>
    </div>
  );
};

export default Dashboard;
