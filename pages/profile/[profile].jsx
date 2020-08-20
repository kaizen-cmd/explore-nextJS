import Head from "next/head";
import BaseLayout from "../../components/base_layout";
import axios from "axios";
import URL, { referer } from "../../components/url";

const Profile = (props) => {
  return (
    <BaseLayout>
      <Head>
        <meta
          name="description"
          content="CodeStrike is an online community of coders."
        />
      </Head>
      <div className="container profile-container">
        <div className="row">
          <div className="col-lg-4 d-flex flex-column align-items-center mb-0">
            <div className="pt-5">
              <img
                src={`${props.user.profile_pic}`}
                alt={props.user.username}
                className="mb-0 p-3"
                style={{
                  width: 225,
                  height: 225,
                  borderRadius: "50%",
                }}
              />
            </div>

            <div>
              <h4 className="mb-0 mt-0">{`${props.user.first_name} ${props.user.last_name}`}</h4>
              <p>@{`${props.user.username}`}</p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="d-flex flex-column mt-4">
              <div className="mb-3">
                <div>
                  <h5>My bio</h5>
                </div>
                <div className="mb-3">{`${props.user.bio}`}</div>
              </div>
              <div>
                <h5>Other Profiles</h5>
              </div>
              <div>
                GitHub Profile:{" "}
                <span>
                  <a
                    href="{`${props.user.github_link}`}"
                    style={{ color: "blue" }}
                  >
                    &nbsp;&nbsp;&nbsp;{`${props.user.github_link}`}
                  </a>
                </span>
              </div>
              <div>
                LinkedIn Profile:{" "}
                <span>
                  <a
                    href={`${props.user.linkedin_link}`}
                    style={{ color: "blue" }}
                  >
                    {`${props.user.linkedin_link}`}
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
                    <strong>{props.user.attempts}</strong>
                  </span>
                </h6>
              </div>
              <div>
                <h6>
                  Total Correct: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    <strong>{props.user.c_attempts}</strong>
                  </span>
                </h6>
              </div>
              <div className="mt-4 mb-2">
                <h5>Member from</h5>
              </div>
              <div className="mb-4">
                <h6>
                  <span>
                    <strong>{props.user.member_from}</strong>
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

Profile.getInitialProps = async (ctx) => {
  const res = await axios.get(URL + ctx.asPath, {
    headers: {
      Referer: referer,
    },
  });
  const profile = res["data"];
  return {
    user: profile,
  };
};
