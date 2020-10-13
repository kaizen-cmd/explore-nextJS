import "../styles/global.css";
import axios from "axios";
import URL from "../components/url";
import Footer from "../components/common/footer";
import Head from "next/head";
import NavBar from "../components/common/navbar";

// This default export is required in a new `pages/_app.js` file.
import { useState, useEffect } from "react";

var loggedIn, setLoggedIn;
var user, setUser;
var dot, setDot;
var pp, setPp;

export default function MyApp({ Component, pageProps }) {
  [loggedIn, setLoggedIn] = useState(false);
  [user, setUser] = useState("");
  [pp, setPp] = useState("Profile");
  [dot, setDot] = useState(false);

  useEffect(() => {
    if (user === "") {
      if (localStorage.getItem("token")) {
        axios
          .post(`${URL}/accounts/validate-token/`, {
            token: localStorage.getItem("token"),
          })
          .then((response) => {
            if (response.data.res === true) {
              setLoggedIn(true);
              axios
                .get(`${URL}/accounts/user/`, {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                })
                .then((response) => {
                  const profile = response["data"];
                  setUser(profile.username);
                  profile.first_name !== "" &&
                  profile.last_name !== "" &&
                  profile.github_link !== "" &&
                  profile.linkedin_link !== ""
                    ? setDot(false)
                    : setDot(true);
                  setPp(profile.profile_pic);
                });
            } else {
              setLoggedIn(false);
              localStorage.removeItem("token");
            }
          });
      }
    }
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="keywords"
          content="codestrike, competitive programming, coding, hackerrank, contest, recruitment, technology, kickstart"
        />
        <meta
          name="google-site-verification"
          content="IhXOHLrIIqBUyYgV1CklI9WGqrMmPrF-WnvQJ39dnfM"
        />
        <link rel="manifest" href="/manifest.json" />
        <link href="/ico.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/ico.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/ico.png"></link>
        <meta name="theme-color" content="#317EFB" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
        />
        <script src="/src/jquery3.5.1.js"></script>
        <script src="/src/popper.js"></script>
        <script src="/src/bootstrap4.js"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <button
        id="discord-btn"
        className="animate__animated animate__pulse animate__slow animate__infinite"
      >
        {!loggedIn && (
          <a href="https://discord.gg/aFrUQnJ">
            <img src="/images/discord.png" alt="codestrike-discord" />
            <div
              style={{
                width: "23px",
                height: "23px",
                backgroundColor: "orangered",
                borderRadius: "50%",
                display: "inline-block",
                position: "absolute",
                right: "0px",
                color: "white",
              }}
            >
              1
            </div>
          </a>
        )}
      </button>
      <Footer />
    </>
  );
}

export { loggedIn, setLoggedIn, user, setUser, pp, setPp, dot, setDot };
