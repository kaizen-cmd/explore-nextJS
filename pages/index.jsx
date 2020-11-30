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
import CourseCard6 from "../components/miscellaneous/course-card-6";

var dashboard, setDashboard;
const Index = (props) => {
  [dashboard, setDashboard] = useState(false);
  const router = useRouter();
  useEffect(() => {
    window.localStorage.getItem("token") && setDashboard(true);
  }, []);
  var key = 0;
  return (
    <BaseLayout>
      <Head>
        <title>Home | CodeStrike</title>
        <meta
          name="description"
          content="CodeStrike is an online programming skills testing platform for employers, hiring managers and computer science students."
        />
        <meta
          name="og:description"
          content="CodeStrike is an online programming skills testing platform for employers, hiring managers and computer science students."
        />
        <meta
          itemProp="description"
          content="CodeStrike is an online programming skills testing platform for employers, hiring managers and computer science students."
        />
        <meta
          name="twitter:description"
          content="CodeStrike is an online programming skills testing platform for employers, hiring managers and computer science students."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | CodeStrike" />
        <meta name="twitter:url" content={props.cLink} />
        <meta
          name="twitter:image"
          content="https://img.techpowerup.org/200717/codestrike-logo-min.png"
        />
        <meta itemProp="name" content="Home | CodeStrike" />
        <meta
          itemProp="image"
          content="https://img.techpowerup.org/200717/codestrike-logo-min.png"
        />
        <meta name="og:title" content="Home | CodeStrike" />
        <meta name="og:url" content={props.cLink} />
        <meta
          name="og:image"
          content="https://img.techpowerup.org/200717/codestrike-logo-min.png"
        />
        <meta name="og:site_name" content="CodeStrike.in" />
        <meta name="og:email" content="codestrike20@gmail.com" />
        <meta property="og:type" content="Coding community" />
        <meta property="og:points" content="Code Strike_ACHIEVEMENT" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(props.schema),
          }}
        ></script>
      </Head>
      {loggedIn ? <Dashboard /> : <SignUpContainer option="top" />}

      <div className="container mb-2 mt-5">
        <div className="row mt-5">
          {!loggedIn ? (
            <>
              <div className="col-lg-6">
                <div className="pt-5">
                  <h3>
                    Use CodeStrike to host your own contests! Our platform is
                    open for hiring purpose, creating personal contests and much
                    more!
                  </h3>
                  <button
                    className="btn btn-success mt-4 mb-2 cc-btn"
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
            </>
          ) : (
            <>
              <CourseCard6
                key="1"
                title="Problem Solving"
                description="Try solving these problems to level up your problem-solving skills using anyone of the three languages C++, Java, Python. Make that you pass all the test cases. For discussions on problems join our Discord Server."
                link="/codeportal/problem-solving"
              />
              <CourseCard6
                key="2"
                title="Java"
                description="Basic java problems straight from the Java basics. Try solving these problems to learn control flow, conditional statements and the syntax of Java language. Be sure to select the java language from the drop-down."
                link="/codeportal/java"
              />
            </>
          )}
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row mt-5">

            <div className="col-lg-6">
              <div
                style={{
                  height: "500px",
                }}
              >
                <div className="d-flex h-100 align-items-center w-100 justify-content-center flex-column">
                  <img src="/images/blog.svg" alt="codestrike-blog" style={{
                    maxWidth: "90%"
                  }}/>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                style={{
                  height: "500px",
                }}
              >
                <div className="d-flex h-100 align-items-center w-100 justify-content-center flex-column">
                  <div>
                    <h3>
                      Want to read about latest tech, industry news ? Got an
                      article on mind and want to share it with the world ?
                    </h3>
                  </div>
                  <div className="mt-2">
                    <a
                      href="https://blog.codestrike.in"
                      target="_blank"
                      className="btn btn-succes bnt-lg cc-btn font-weight-bold bg-success text-light"
                    >
                      Head to our Blog
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-3" id="db-user">
        <div className="container px-3">
          <div className="d-flex justify-content-start">
            <div className="mr-2">
              <h3>Latest Winners</h3>
            </div>
            <hr style={{ width: "79%" }} />
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
              <h3>CodeStrike Projects</h3>
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
            <button className="btn btn-success font-weight-bold py-2 px-4 mt-2">
              Donate
            </button>
          </a>
        </div>
      </div>

      {!dashboard && <SignUpContainer option="bottom" />}
    </BaseLayout>
  );
};

export default Index;
export { setDashboard };

Index.getInitialProps = async (ctx) => {
  const data = await axios.get(URL + "/home/");
  const dict = data["data"];
  return {
    dict: dict,
    cLink: "https://codestrike.in" + ctx.asPath,
    shcema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Code_Strike",
      legalName: "CodeStrike.in",
      url: "http://codestrike.in/",
      logo: "https://img.techpowerup.org/200717/codestrike-logo-min.png",
      foundingDate: "2020",
      founders: [
        {
          "@type": "Person",
          name: "Tejas Mandre",
        },
        {
          "@type": "Person",
          name: "Anant Mokashi",
        },
        {
          "@type": "Person",
          name: "Suyash Muley",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "MIT SOE, MIT ADT University",
        addressLocality: "Pune",
        addressRegion: "MH",
        postalCode: "411014",
        addressCountry: "India",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "[+91-9021343679]",
        email: "codestrike200@gmail.com",
      },
      sameAs: ["https://discord.gg/C5UfaXy"],
    },
  };
};
