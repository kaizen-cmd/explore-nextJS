import Head from "next/head";
import BaseLayout from "../../../components/base_layout";
import { useState, useEffect } from "react";
import axios from "axios";
import URL from "../../../components/url";
import FormData from "form-data";
import { useRouter } from "next/router";
import { setDot, setPp } from "../../_app";
import SmLoader from "../../../components/common/sm-loader";
import WinnerCard from "../../../components/new-user-homepage/winner-card";

const Profile = () => {
  const [bio, setBio] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [rollno, setrollno] = useState("");
  const [ghlink, setGhlink] = useState("");
  const [linlink, setLinlink] = useState("");
  const [collegename, setCollegename] = useState("");
  const [branchname, setBranchname] = useState("");
  const [yearofstudy, setYearofStudy] = useState("");
  //const [profilePic, setProfilePic] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [points, setPoints] = useState({});
  const [attemptedExams, setAttemptedExams] = useState([]);
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
          setrollno(profile.roll_no);
          setGhlink(profile.github_link);
          setLinlink(profile.linkedin_link);
          //setProfilePic(profile.profile_pic);
          setUsername(profile.username);
          setCollegename(
            profile.college_name
              ? profile.college_name.college_name
              : "Select College"
          );
          setBranchname(
            profile.branch_name
              ? profile.branch_name.branch_name
              : "Select Branch"
          );
          setYearofStudy(
            profile.year_of_study
              ? profile.year_of_study.year_of_study
              : "Select Year"
          );
        });

      axios
        .get(`${URL}/mcqexam/user/attempted-exams/`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => setAttemptedExams(res.data));
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
          <div className="col-lg-12">
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
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                    value={firstname}
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
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                    value={lastname}
                  />
                </span>
              </div>
              <br />
              <div>
                College Name:{" "}
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <select
                    value={collegename}
                    onChange={(e) => setCollegename(e.currentTarget.value)}
                  >
                    <option value="Select College" disabled>
                      Select College
                    </option>
                    <option value="MITSOE">MIT SOE</option>
                    <option value="MITCOE">MIT COE</option>
                    <option value="MITAOE">MIT AOE</option>
                  </select>
                </span>
              </div>
              <br />
              <div>
                Branch / Dept:{" "}
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <select
                    value={branchname}
                    onChange={(e) => setBranchname(e.currentTarget.value)}
                  >
                    <option value=" Select Branch" disabled>
                      Select Branch
                    </option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                    <option value="MECH">Mechanical</option>
                    <option value="CIVIL">Civil</option>
                    <option value="AERO">Aerospace</option>
                  </select>
                </span>
              </div>
              <br />
              <div>
                Year of Study: <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <select
                  value={yearofstudy}
                  onChange={(e) => setYearofStudy(e.currentTarget.value)}
                >
                  <option value="Select Year" disabled>
                    Select Year
                  </option>
                  <option value="FIRST">FIRST</option>
                  <option value="SECOND">SECOND</option>
                  <option value="THIRD">THIRD</option>
                  <option value="FOURTH">FOURTH</option>
                </select>
              </div>
              <br />
              <div>
                Roll Number :{"   "}
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="text"
                    placeholder="Roll No"
                    onChange={(e) => {
                      setrollno(e.target.value);
                    }}
                    value={rollno}
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

                      ghlink === "" && url.test(ghlink) !== true
                        ? ""
                        : formData.append("github_link", ghlink);

                      rollno === "" ? "" : formData.append("roll_no", rollno);

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
        <h5>MCQ Exam history</h5>
        <div className="d-flex">
          {attemptedExams.map((exam, index) => {
            return (
              <WinnerCard
                key={index}
                link={`/accounts/exam/${exam.slug}/`}
                bio={
                  <div>
                    <p>{exam.title}</p>
                    <p>
                      Score: {exam.scored_marks} / {exam.max_score}
                    </p>
                    <p>View Solution</p>
                  </div>
                }
                image={""}
                newPage={false}
              />
            );
          })}
        </div>
        <br />
        <br />
      </div>
    </BaseLayout>
  );
};

export default Profile;
