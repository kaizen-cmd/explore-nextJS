import "../styles/global.css";
import axios from "axios";
import URL, { referer } from "../components/url";
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
          .post(
            `${URL}/accounts/validate-token/`,
            {
              token: localStorage.getItem("token"),
            },
            {
              headers: {
                Referer: referer,
              },
            }
          )
          .then((response) => {
            response["data"]["res"] === true && setLoggedIn(true);
            axios
              .get(`${URL}/accounts/user/`, {
                headers: {
                  Authorization: localStorage.getItem("token"),
                  Referer: referer,
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
          });
      }
    }
  }, []);
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>CodeStrike</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/ico.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/ico.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
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
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
          integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export { loggedIn, setLoggedIn, user, setUser, pp, setPp, dot, setDot };
