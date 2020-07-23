import Link from "next/link";

const NavBar = (props) => {
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
                <a className="nav-link">Problems</a>
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
            <li
              className={
                "nav-item " + `${props.active === "profile" ? "active" : ""}`
              }
            >
              <Link href="/profile">
                <a className="nav-link">My Profile</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
