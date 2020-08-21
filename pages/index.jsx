import Head from "next/head";
import BaseLayout from "../components/base_layout";
import WinnerCard from "../components/new-user-homepage/winner-card";
import SignUpContainer from "../components/new-user-homepage/sign-up-container";
import Dashboard from "../components/new-user-homepage/dashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import URL, { referer } from "../components/url";

var dashboard, setDashboard;
const Index = (props) => {
  [dashboard, setDashboard] = useState(false);
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
