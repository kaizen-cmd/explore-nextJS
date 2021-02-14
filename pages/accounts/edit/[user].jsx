import Head from "next/head";
import BaseLayout from "../../../components/base_layout";
import { useState, useEffect } from "react";
import axios from "axios";
import URL from "../../../components/url";
import FormData from "form-data";
import { useRouter } from "next/router";
import { setDot, setPp } from "../../_app";
import SmLoader from "../../../components/common/sm-loader";

const Profile = () => {
  const [bio, setBio] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [ghlink, setGhlink] = useState("");
  const [linlink, setLinlink] = useState("");
  const [collegename, setCollegename] = useState("");
  const [branchname, setBranchname] = useState("");
  const [yearofstudy, setYearofStudy] = useState("");
  //const [profilePic, setProfilePic] = useState("");
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
          //setProfilePic(profile.profile_pic);
          setUsername(profile.username);
          setCollegename(profile.college_name);
          setBranchname(profile.branch_name);
          setYearofStudy(profile.year_of_study)
        });
    } else {
      router.push("/");
    }
  }, []);
  return (
    <BaseLayout navbarprop="profile">
      <Head>
        <title>My Profile | CodeStrike</title>
      </Head>
      <div className="container profile-container profile-container-edit">
        <div className="row">
          <div className="col-lg-4 d-flex flex-column align-items-center mb-0">
          </div>
          <div className="col-lg-8">
            <div className="d-flex flex-column mt-4">
              <div>
                <h5>Profile</h5>
              </div>
              <div>
                First Name:{" "} 
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="text"
                    placeholder="First Name"
                    // onChange={(e) => {
                    //   setGhlink(e.target.value);
                    // }}
                    // value={ghlink}
                  />
                </span>
              </div>
              <br />
              <div>
                Last Name:{" "} 
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="text"
                    placeholder="Last Name"
                    // onChange={(e) => {
                    //   setGhlink(e.target.value);
                    // }}
                    // value={ghlink}
                  />
                </span>
              </div>
              <br />
              <div>
                College Name:{" "} 
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <select value={collegename} onChange={(e) => setCollegename(e.currentTarget.value)}>
                    <option value="MIT">MIT</option>
                    <option value="IIT">IIT</option>
                    <option value="VIT">VIT</option>
                  </select>
                </span>
              </div>
              <br />
              <div>
                Branch / Dept:{" "}
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <select value={branchname} onChange={(e) => setBranchname(e.currentTarget.value)}>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                  </select>
                </span>
              </div>
              <br />
              <div>
                Year of Study:{" "}
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                  <select value={yearofstudy} onChange={(e) => setYearofStudy(e.currentTarget.value)}>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>
              </div>
              <br />
              <div>
                Roll Number  :{"   "}
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="text"
                    placeholder="Roll No"
                    // onChangey={(e) => {
                    //   setGhlink(e.target.value);
                    // }}
                    // value={ghlink}
                  />
                </span>
              </div>
              <br />
              <div>
                GitHub Profile:{" "}
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="url"
                    placeholder="Github profile link"
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
                    placeholder="Linkedin profile link"
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
                    <strong>{points.c_attempts}</strong>
                  </span>
                </h6>
              </div>
              <div className="mb-4">
                <h6>
                  <button
                    className="btn btn-md btn-success px-5"
                    onClick={() => {
                      setMessage(<SmLoader />);
                      var regexQuery =
                        "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
                      var url = new RegExp(regexQuery, "i");
                      var formData = new FormData();

                      firstname === ""
                        ? ""
                        : formData.append("first_name", firstname);

                      collegename === ""
                        ? ""
                        : formData.append("college_name", collegename);
                      
                      branchname === ""
                        ? ""
                        : formData.append("branch_name", branchname);
                      
                      yearofstudy === ""
                        ? ""
                        : formData.append("year_of_study", yearofstudy);

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
                          setPp(response["data"].profile_pic);
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
