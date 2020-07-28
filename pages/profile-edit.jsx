import Head from "next/head";
import BaseLayout from "../components/base_layout";
import { useState } from "react";

const Profile = () => {
  const [bio, setBio] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [ghlink, setGhlink] = useState("");
  const [linlink, setLinlink] = useState("");
  return (
    <BaseLayout navbarprop="profile">
      <Head>
        <meta
          name="description"
          content="CodeStrike is an online community of coders."
        />
      </Head>
      <div className="container profile-container profile-container-edit">
        <div className="row">
          <div className="col-lg-4 d-flex flex-column align-items-center mb-0">
            <img src="/images/avatar.svg" alt="" className="mb-0" />
            <div>
              <h4 className="mb-0 mt-0">
                <input
                  type="text"
                  className="w-50"
                  placeholder="first"
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                />
                <input
                  type="text"
                  className="w-50"
                  placeholder="last"
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                />
              </h4>
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
                  <textarea
                    name=""
                    id=""
                    placeholder="bio"
                    value={bio}
                    onChange={(e) => {
                      setBio(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
              <div>
                <h5>Other Profiles</h5>
              </div>
              <div>
                GitHub Profile:{" "}
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="text"
                    placeholder="github profile link"
                    onChange={(e) => {
                      setGhlink(e.target.value);
                    }}
                  />
                </span>
              </div>
              <br />
              <div>
                LinkedIn Profile:{" "}
                <span>
                  &nbsp;
                  <input
                    type="text"
                    placeholder="linkedin profile link"
                    onChange={(e) => {
                      setLinlink(e.target.value);
                    }}
                  />
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
