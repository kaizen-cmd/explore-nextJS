import Head from "next/head";
import BaseLayout from "../../components/base_layout";
import axios from "axios";
import URL from "../../components/url";

const Profile = (props) => {
  return (
    <BaseLayout>
      <Head>
        {props.user.first_name != "" && props.user.last_name != "" ? (
          <title>
            {props.user.first_name} {props.user.last_name} | CodeStrike
          </title>
        ) : (
          <title>{props.user.username} | CodeStrike</title>
        )}
        <meta
          name="description"
          content={props.user.bio.slice(0, 125) + "...More on codestrike.in"}
        />
        {props.user.first_name != "" && props.user.last_name != "" ? (
          <meta
            name="og:title"
            content={`${props.user.first_name} ${props.user.last_name} | CodeStrike`}
          />
        ) : (
          <meta
            name="og:title"
            content={`${props.user.username} | CodeStrike`}
          />
        )}

        <meta name="og:url" content={props.cLink} />
        <meta name="og:image" content={props.user.profile_pic} />
        <meta
          name="og:description"
          content={props.user.bio.slice(0, 125) + "...More on codestrike.in"}
        />
        <meta name="twitter:card" content="summary_large_image" />
        {props.user.first_name != "" && props.user.last_name != "" ? (
          <meta
            name="twitter:title"
            content={`${props.user.first_name} ${props.user.last_name} | CodeStrike`}
          />
        ) : (
          <meta
            name="twitter:title"
            content={`${props.user.username} | CodeStrike`}
          />
        )}
        <meta name="twitter:url" content={props.cLink} />
        <meta
          name="twitter:description"
          content={props.user.bio.slice(0, 125) + "...More on codestrike.in"}
        />
        <meta name="twitter:image" content={props.user.profile_pic} />
        {props.user.first_name != "" && props.user.last_name != "" ? (
          <meta
            itemProp="name"
            content={`${props.user.first_name} ${props.user.last_name} | CodeStrike`}
          />
        ) : (
          <meta
            itemProp="name"
            content={`${props.user.username} | CodeStrike`}
          />
        )}
        <meta
          itemProp="description"
          content={props.user.bio.slice(0, 125) + "...More on codestrike.in"}
        />
        <meta itemProp="image" content={props.user.profile_pic} />
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
              <h4 className="mb-0 mt-0">{`${props.user.first_name.slice(
                0,
                15
              )} ${props.user.last_name.slice(0, 15)}`}</h4>
              <p>@{props.user.username}</p>
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
                    href={`${props.user.github_link}`}
                    style={{ color: "blue", wordBreak: "break-word" }}
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
                    style={{ color: "blue", wordBreak: "break-word" }}
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
  const res = await axios.get(URL + ctx.asPath);
  const profile = res["data"];
  return {
    user: profile,
    cLink: "https://codestrike.in" + ctx.asPath,
  };
};
