import Head from "next/head";
import BaseLayout from "../../../components/base_layout";
import { useState, useEffect } from "react";
import axios from "axios";
import URL, { referer } from "../../../components/url";
import FormData from "form-data";
import { useRouter } from "next/router";
import { setDot } from "../../_app";

const Profile = (props) => {
  const [bio, setBio] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [ghlink, setGhlink] = useState("");
  const [linlink, setLinlink] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [points, setPoints] = useState({});
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .get(`${URL}/accounts/user/`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          const profile = response["data"];
          setPoints(profile);
          setBio(profile.bio);
          setFirstname(profile.first_name);
          setLastname(profile.last_name);
          setGhlink(profile.github_link);
          setLinlink(profile.linkedin_link);
          setProfilePic(profile.profile_pic);
          setUsername(profile.username);
        });
    } else {
      router.push("/");
    }
  }, []);
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
            <div className="pt-5">
              <img
                src={profilePic}
                alt={firstname + " " + lastname}
                className="mb-0 p-3"
                style={{
                  width: 225,
                  height: 225,
                  borderRadius: "50%",
                }}
              />
              <label htmlFor="profile_pic">Upload new picture</label>
              <input
                type="file"
                accept="image/*"
                style={{
                  fontSize: "1rem",
                  padding: 0,
                  width: "225px",
                  marginBottom: 10,
                }}
                id="picUpload"
                onChange={() => {
                  var formData = new FormData();
                  setMessage("Loading...");
                  document.getElementById("picUpload").value === ""
                    ? ""
                    : formData.append(
                        "profile_pic",
                        document.getElementById("picUpload").files[0]
                      );
                  formData.append("username", username);
                  axios
                    .put(`${URL}/accounts/user/`, formData, {
                      headers: {
                        Authorization: localStorage.getItem("token"),
                        "Content-Type": "multipart/form-data",
                      },
                    })
                    .then((response) => {
                      setProfilePic(response["data"].profile_pic);
                      setMessage("Saved Successfully");
                    });
                }}
              />
            </div>

            <div>
              <h4 className="mb-0 mt-0">
                <input
                  type="text"
                  className="w-50"
                  placeholder="first"
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                  value={firstname}
                />
                <input
                  type="text"
                  className="w-50"
                  placeholder="last"
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                  value={lastname}
                />
              </h4>
              <p className="mt-3">
                <strong>@{username}</strong>
              </p>
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
                    value={bio}
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
                    type="url"
                    placeholder="github profile link"
                    onChange={(e) => {
                      setGhlink(e.target.value);
                    }}
                    value={ghlink}
                  />
                </span>
              </div>
              <br />
              <div>
                LinkedIn Profile:{" "}
                <span>
                  &nbsp;
                  <input
                    type="url"
                    placeholder="linkedin profile link"
                    onChange={(e) => {
                      setLinlink(e.target.value);
                    }}
                    value={linlink}
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
                    <strong>{points.attempts}</strong>
                  </span>
                </h6>
              </div>
              <div className="mb-4">
                <h6>
                  Total Correct: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    <strong>{points.attempts}</strong>
                  </span>
                </h6>
              </div>
              <div className="mb-4">
                <h6>
                  <button
                    className="btn btn-md btn-success px-5"
                    onClick={() => {
                      setMessage("Loading...");
                      var regexQuery =
                        "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
                      var url = new RegExp(regexQuery, "i");
                      var formData = new FormData();

                      firstname === ""
                        ? ""
                        : formData.append("first_name", firstname);

                      lastname === ""
                        ? ""
                        : formData.append("last_name", lastname);
                      bio === "" ? "" : formData.append("bio", bio);

                      ghlink === "" && url.test(ghlink) !== true
                        ? ""
                        : formData.append("github_link", ghlink);

                      linlink === "" && url.test(linlink) !== true
                        ? ""
                        : formData.append("linkedin_link", linlink);

                      formData.append("username", username);
                      axios
                        .put(`${URL}/accounts/user/`, formData, {
                          headers: {
                            Authorization: localStorage.getItem("token"),
                            "Content-Type": "multipart/form-data",
                          },
                        })
                        .then((response) => {
                          setMessage("Saved Successfully");
                          setGhlink(response["data"].github_link);
                          setLinlink(response["data"].linkedin_link);
                          setTimeout(() => {
                            setMessage("");
                            firstname !== "" &&
                              lastname !== "" &&
                              bio !== "" &&
                              ghlink !== "" &&
                              linlink !== "" &&
                              setDot(false);
                          }, 2000);
                        });
                    }}
                  >
                    Save
                  </button>
                  <p className="d-inline text-danger font-weight-bold ml-3">
                    {message}
                  </p>
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
