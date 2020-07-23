import Head from "next/head";
import BaseLayout from "../components/base_layout";
import WinnerCard from "../components/new-user-homepage/winner-card";
import SignUpContainer from "../components/new-user-homepage/sign-up-container";

const Index = () => {
  return (
    <BaseLayout navbarprop="home">
      <Head>
        <meta
          name="description"
          content="CodeStrike is an online community of coders."
        />
      </Head>
      <SignUpContainer option="top" />
      <div className="mt-5 mb-3">
        <div className="container px-3">
          <h3>Upcoming Tutorials</h3>
        </div>
      </div>
      <div className="mid-container">
        <div className="container">
          <div className="row">
            <WinnerCard
              name="Construct Angular"
              image="/images/angular.png"
              bio="Aniruddh Chakravarty"
            />
            <WinnerCard
              name="React to React"
              image="/images/react.png"
              bio="Viral Sangani"
            />
            <WinnerCard
              name="Get to Know Android"
              image="/images/android.jpg"
              bio="Gaurav Thakkar"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 mb-3">
        <div className="container px-3">
          <h3>Upcoming Events</h3>
        </div>
      </div>
      <div className="mid-container pb-5">
        <div className="container">
          <div className="row">
            <WinnerCard
              name="Robotics MIT"
              image="/images/event-1.jpg"
              bio="MIT SOE"
            />
            <WinnerCard
              name="Tech Talks"
              image="/images/event-2.jpg"
              bio="Nandan Nilekani"
            />
            <WinnerCard
              name="Contest Launch"
              image="/images/event-3.jpg"
              bio="Infosys Ltd."
            />
          </div>
        </div>
      </div>
      <SignUpContainer option="bottom" />
    </BaseLayout>
  );
};

export default Index;
