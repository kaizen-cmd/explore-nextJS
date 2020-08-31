import Head from "next/head";
import BaseLayout from "../components/base_layout";
import WinnerCard from "../components/new-user-homepage/winner-card";
import SignUpContainer from "../components/new-user-homepage/sign-up-container";
import Dashboard from "../components/new-user-homepage/dashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import URL from "../components/url";
import { loggedIn } from "./_app";
import { useRouter } from "next/router";

var dashboard, setDashboard;
const Index = (props) => {
  [dashboard, setDashboard] = useState(false);
  const router = useRouter();
  useEffect(() => {
    window.localStorage.getItem("token") && setDashboard(true);
  }, []);
  var key = 0;
  return (
    <BaseLayout navbarprop="home">
      <Head>
        <meta
          name="description"
          content="CodeStrike is an online community of coders."
        />
      </Head>
      {dashboard ? <Dashboard /> : <SignUpContainer option="top" />}
      <div className="container mb-2 mt-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="pt-5">
              <h3>
                Host your very own contest on CodeStrike! Use our platform for
                hiring processes, send a challenge to friends, have fun!
              </h3>
              <button
                className="btn btn-success mt-4 mb-2"
                id="cc-btn"
                onClick={() => {
                  loggedIn
                    ? router.push("/contest/admin")
                    : document.getElementById("login-btn").click();
                }}
              >
                Create Contest Now!
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="/images/contest.svg"
              alt="codestrike-contest"
              className="mw-100"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 mb-3" id="db-user">
        <div className="container px-3">
          <div className="d-flex justify-content-start">
            <div className="mr-2">
              <h3>Latest Winners</h3>
            </div>
            <hr style={{ width: "77%" }} />
          </div>
        </div>
      </div>
      <div className="mid-container">
        <div className="container">
          <div className="row">
            {props.dict.winners.map((winner) => {
              key++;
              return (
                <WinnerCard
                  key={key}
                  is_win={true}
                  name={winner.username}
                  image={winner.profile_pic}
                  bio={`Points: ${winner.points}`}
                />
              );
            })}
          </div>
        </div>
      </div>
      <br />
      <div className="mt-5 mb-3">
        <div className="container px-3">
          <div className="d-flex justify-content-start">
            <div className="mr-2">
              <h3>Student Projects</h3>
            </div>
            <hr style={{ width: "75%" }} />
          </div>
        </div>
      </div>
      <div className="mid-container pb-5">
        <div className="container">
          <div className="row">
            {props.dict.projects.map((winner) => {
              key++;
              return (
                <WinnerCard
                  key={key}
                  name={winner.username}
                  image={winner.pic}
                  bio={winner.desc}
                  link={winner.link}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="text-center">
                <p
                  style={{
                    fontSize: "4rem",
                    fontWeight: "bolder",
                    marginBottom: 0,
                  }}
                >
                  {props.dict.ps_count}
                </p>
                <p style={{ fontSize: "1.5rem" }}>Problems</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center">
                <p
                  style={{
                    fontSize: "4rem",
                    fontWeight: "bolder",
                    marginBottom: 0,
                  }}
                >
                  {props.dict.submission_count}
                </p>
                <p style={{ fontSize: "1.5rem" }}>Submissions</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center">
                <p
                  style={{
                    fontSize: "4rem",
                    fontWeight: "bolder",
                    marginBottom: 0,
                  }}
                >
                  {props.dict.user_count}
                </p>
                <p style={{ fontSize: "1.5rem" }}>Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-center"
        style={{
          marginBottom: 100,
        }}
      >
        <h3>Help us keep our servers running!</h3>
        <div className="pm-button">
          <a href="https://www.payumoney.com/paybypayumoney/#/739DEA8A42A7E089D47B67026DF4172A">
            <img src="https://www.payumoney.com/media/images/payby_payumoney/new_buttons/23.png" />
          </a>
        </div>
      </div>

      {!dashboard && <SignUpContainer option="bottom" />}
    </BaseLayout>
  );
};

export default Index;
export { setDashboard };

Index.getInitialProps = async () => {
  const data = await axios.get(URL + "/home/");
  const dict = data["data"];
  return {
    dict: dict,
  };
};
