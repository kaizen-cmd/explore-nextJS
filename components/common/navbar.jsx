import Link from "next/link";
import { useEffect } from "react";
import { setLogin } from "../base_layout";
import Login from "../new-user-homepage/login";
import { setDashboard } from "../../pages";
import { loggedIn, setLoggedIn, user, pp, dot } from "../../pages/_app";

const NavBar = (props) => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > 300) {
        document
          .getElementsByClassName("navbar")[0]
          .classList.add("color-black");
        var elems = document.getElementsByClassName("dropdown-menu");
        Array.prototype.forEach.call(elems, function (el) {
          el.classList.add("color-black");
        });
      }
      if (st < 300) {
        document
          .getElementsByClassName("navbar")[0]
          .classList.remove("color-black");
        var elems1 = document.getElementsByClassName("dropdown-menu");
        Array.prototype.forEach.call(elems1, function (el) {
          el.classList.remove("color-black");
        });
      }
    });
  }, []);

  const activator = (id) => {
    var elems = document.getElementsByClassName("nav-item");
    Array.prototype.forEach.call(elems, function (el) {
      el.classList.contains("active") && el.classList.remove("active");
    });
    id.classList.add("active");
    window.innerWidth <= 990 && document.getElementById("navbar-btn").click();
  };

  const activator1 = () => {
    window.innerWidth <= 990 && document.getElementById("navbar-btn").click();
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <Link href="/">
          <a className="navbar-brand">CodeStrike</a>
        </Link>
        <button
          id="navbar-btn"
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
              className="nav-item"
              onClick={() =>
                activator(document.getElementsByClassName("nav-item")[0])
              }
            >
              <Link href="/">
                <a className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li
              className="nav-item"
              onClick={() =>
                activator(document.getElementsByClassName("nav-item")[1])
              }
            >
              <Link href="/codeportal/records">
                <a className="nav-link">
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        position: "absolute",
                        left: -12,
                        bottom: 1,
                      }}
                    >
                      <img
                        src="/images/new.png/"
                        alt=""
                        style={{
                          width: 30,
                        }}
                      />
                    </div>
                    Practice
                  </div>
                </a>
              </Link>
            </li>
            <li
              className="nav-item"
              onClick={() =>
                activator(document.getElementsByClassName("nav-item")[2])
              }
            >
              <Link href="/codeportal/leaderboard">
                <a className="nav-link">Ranking</a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About Us
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  <Link href="/about-us">
                    <a className="nav-link" onClick={activator1}>
                      Our Team
                    </a>
                  </Link>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  <Link href="/contact-us">
                    <a className="nav-link" onClick={activator1}>
                      Contact Us
                    </a>
                  </Link>
                </a>
              </div>
            </li>
            {loggedIn ? (
              <>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src={pp}
                      className="rounded-circle"
                      alt="my-profile"
                      style={{
                        width: "30px",
                        height: "30px",
                      }}
                    />
                    {dot ? (
                      <div
                        style={{
                          width: "15px",
                          height: "15px",
                          backgroundColor: "orangered",
                          borderRadius: "50%",
                          display: "inline-block",
                          position: "absolute",
                          right: "17px",
                        }}
                      ></div>
                    ) : (
                      <></>
                    )}
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#" onClick={activator1}>
                      <Link
                        href="/accounts/edit/[user]/"
                        as={`/accounts/edit/${user}/`}
                      >
                        <a className="nav-link">
                          Edit Profile{" "}
                          {dot ? (
                            <div className="d-inline-block text-light bg-danger px-1 rounded">
                              Pending
                            </div>
                          ) : (
                            <></>
                          )}
                        </a>
                      </Link>
                    </a>
                    <a className="dropdown-item" href="#" onClick={activator1}>
                      <Link href="/contest/admin">
                        <a className="nav-link">My contests</a>
                      </Link>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#" onClick={activator1}>
                      <Link href="/">
                        <a
                          className="nav-link"
                          onClick={() => {
                            localStorage.removeItem("token");
                            setLoggedIn(false);
                            setDashboard(false);
                          }}
                        >
                          Logout
                        </a>
                      </Link>
                    </a>
                  </div>
                </li>
              </>
            ) : (
              <li className="nav-item bg-primary rounded">
                <a
                  className="nav-link text-light px-4"
                  id="login-btn"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setLogin(<Login />);
                    document.body.style.overflow = "hidden";
                    document.getElementById("navbar-btn").click();
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
