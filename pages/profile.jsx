import Head from "next/head";
import BaseLayout from "../components/base_layout";

const Profile = () => {
  return (
    <BaseLayout navbarprop="profile">
      <Head>
        <meta
          name="description"
          content="CodeStrike is an online community of coders."
        />
      </Head>
      <div className="container profile-container">
        <div className="row">
          <div className="col-lg-4 d-flex flex-column align-items-center mb-0">
            <img src="/images/avatar.svg" alt="" className="mb-0" />
            <div>
              <h4 className="mb-0 mt-0">Tejas Mandre</h4>
              <p>@tmandre</p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="d-flex flex-column mt-4">
              <div className="mb-3">
                <div>
                  <h5>My bio</h5>
                </div>
                <div className="mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem sit, eaque veniam nihil alias quaerat porro incidunt
                  veritatis a consectetur pariatur! Officia recusandae dolorem
                  laudantium nesciunt. Vitae ut dignissimos architecto.
                </div>
              </div>
              <div>
                <h5>Other Profiles</h5>
              </div>
              <div>
                GitHub Profile:{" "}
                <span>
                  <a href="#" style={{ color: "blue" }}>
                    &nbsp;&nbsp;&nbsp;https://github.com/
                  </a>
                </span>
              </div>
              <div>
                LinkedIn Profile:{" "}
                <span>
                  <a href="#" style={{ color: "blue" }}>
                    https://linkedin.com/
                  </a>
                </span>
              </div>
              <div className="mt-4 mb-2">
                <h5>My Submissions</h5>
              </div>
              <div>
                <h6>
                  Total Attempted:{" "}
                  <span>
                    <strong>12</strong>
                  </span>
                </h6>
              </div>
              <div className="mb-4">
                <h6>
                  Total Correct: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    <strong>12</strong>
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Profile;
