import "../styles/global.css";
import axios from "axios";
import URL, { DEBUG } from "../components/url";
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DSHM5W45FF"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-DSHM5W45FF');
              `,
          }}
        />
        {!DEBUG && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/604ce556f7ce1827092fbfd1/1f0m5vn7i';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
              `,
            }}
          />
        )}
        <script
          data-ad-client="ca-pub-7061616100866138"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
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
      <Footer />
    </>
  );
}

export { loggedIn, setLoggedIn, user, setUser, pp, setPp, dot, setDot };
