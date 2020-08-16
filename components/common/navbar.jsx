import Link from "next/link";
import { useEffect, useState } from "react";
import { setLogin } from "../base_layout";
import Login from "../new-user-homepage/login";
import axios from "axios";
import URL from "../url";
import { setDashboard } from "../../pages";

var loggedIn, setLoggedIn;
const NavBar = (props) => {
  [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .post(`${URL}/accounts/validate-token/`, {
          token: localStorage.getItem("token"),
        })
        .then((response) => {
          response["data"]["res"] === true && setLoggedIn(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > 300) {
        document
          .getElementsByClassName("navbar")[0]
          .classList.add("color-black");
      }
      if (st < 300) {
        document
          .getElementsByClassName("navbar")[0]
          .classList.remove("color-black");
      }
    });
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <Link href="/">
          <a className="navbar-brand">CodeStrike</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          |||
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li
              className={
                "nav-item " + `${props.active === "home" ? "active" : ""}`
              }
            >
              <Link href="/">
                <a className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li
              className={
                "nav-item " + `${props.active === "psindex" ? "active" : ""}`
              }
            >
              <Link href="/problem-index">
                <a className="nav-link">Past Problems</a>
              </Link>
            </li>
            <li
              className={
                "nav-item " + `${props.active === "ranking" ? "active" : ""}`
              }
            >
              <Link href="/ranking">
                <a className="nav-link">Ranking</a>
              </Link>
            </li>
            {loggedIn ? (
              <>
                <li
                  className={
                    "nav-item " +
                    `${props.active === "profile" ? "active" : ""}`
                  }
                >
                  <Link href="/profile">
                    <a className="nav-link">My Profile</a>
                  </Link>
                </li>
                <li className="nav-item bg-primary rounded">
                  <Link href="/">
                    <a className="nav-link text-light" onClick={() => {
                      localStorage.removeItem("token");
                      setLoggedIn(false);
                      setDashboard(false);
                    }}>Logout</a>
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item bg-primary rounded">
                <a
                  className="nav-link text-light"
                  id="login-btn"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setLogin(<Login />);
                    document.body.style.overflow = "hidden";
                  }}
                >
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
export { setLoggedIn, loggedIn };
