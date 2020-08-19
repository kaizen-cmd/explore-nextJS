import Head from "next/head";
import BaseLayout from "../components/base_layout";
import WinnerCard from "../components/new-user-homepage/winner-card";
import SignUpContainer from "../components/new-user-homepage/sign-up-container";
import Dashboard from "../components/new-user-homepage/dashboard";
import { useEffect, useState } from "react";


var dashboard, setDashboard;
const Index = (props) => {
  [dashboard, setDashboard] = useState(false)
  useEffect(() => {
    window.localStorage.getItem("token") && setDashboard(true);
  }, [])
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
            <WinnerCard
            key="1"
              name="Construct Angular"
              image="/images/angular.png"
              bio="Aniruddh Chakravarty"
            />
            <WinnerCard
            key="2"
              name="React to React"
              image="/images/react.png"
              bio="Viral Sangani"
            />
            <WinnerCard
            key="3"
              name="Get to Know Android"
              image="/images/android.jpg"
              bio="Gaurav Thakkar"
            />
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
            <WinnerCard
            key="4"
              name="Robotics MIT"
              image="/images/event-1.jpg"
              bio="MIT SOE"
            />
            <WinnerCard
            key="5"
              name="Tech Talks"
              image="/images/event-2.jpg"
              bio="Nandan Nilekani"
            />
            <WinnerCard
            key="6"
              name="Contest Launch"
              image="/images/event-3.jpg"
              bio="Infosys Ltd."
            />
          </div>
        </div>
      </div>
      {!dashboard && <SignUpContainer option="bottom" />}
    </BaseLayout>
  );
};

export default Index;
export { setDashboard };

