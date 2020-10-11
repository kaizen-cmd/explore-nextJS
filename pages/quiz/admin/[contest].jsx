import Axios from "axios";
import { MDBTable } from "mdbreact";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BaseLayout from "../../../components/base_layout";
import GenOption from "../../../components/MCQContest/gen-option";
import QuestionBox from "../../../components/MCQContest/question-box";
import URL from "../../../components/url";
import { loggedIn } from "../../_app";

const MCQContest = ({ query }) => {
  const [window, setWindow] = useState("details");
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [opvalue, setOpvalue] = useState("");
  const [questionval, setQuestionval] = useState("");
  const [checkboxval, setCheckboxval] = useState(false);
  const [islive, setIslive] = useState(false);
  const [title, setTilte] = useState("");
  const [desc, setDesc] = useState("");
  const [opMessage, setOpMessage] = useState("");
  const [qMessage, setQMessage] = useState("");
  const [mainMessage, setMainMessage] = useState("");
  const [contestPk, setContestPk] = useState(null);
  const [contestSlug, setContestSlug] = useState("Generated after creation");
  const router = useRouter();

  var unopcounter = -1;

  const deleteOption = (option) => {
    const index = options.findIndex((o) => {
      return o.id == option.id;
    });
    options.splice(index, 1);
    setOptions([...options]);
  };

  const deleteQuestion = (question) => {
    Axios.post(
      `${URL}/mcq/delete-question/`,
      {
        id: question.id,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    const index = questions.findIndex((q) => {
      return q.id == question.id;
    });
    questions.splice(index, 1);
    setQuestions([...questions]);
  };

  const createQuestion = (question, opArray, prevQueArray) => {
    if (title.includes("_dummy") || title.includes("new")) {
      setMainMessage("'new',   '_dummy' word not allowed in contest title");
    } else {
      Axios.post(
        `${URL}/mcq/create-question/`,
        {
          question: question,
          options: opArray,
          update: query === "new" ? false : true,
          slug: query === "new" ? "" : query,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      ).then((res) => {
        setQuestions([
          ...prevQueArray,
          {
            id: res.data.res,
            question: question,
            options: opArray,
          },
        ]);
        setQuestionval("");
        setOptions([]);
        option_main_counter = -1;
        setQMessage("");
      });
    }
  };

  const deleteContest = (contest_id) => {
    Axios.post(
      `${URL}/mcq/delete-contest/`,
      {
        id: contest_id,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    ).then(() => {
      router.push("/quiz/admin")
    });
  };

  const createUpdateContest = (title, desc, questionArray, status, update) => {
    if (questionArray.length === 0) {
      setMainMessage("Add atleast one question");
      setWindow("questions");
    } else if (title === "") {
      setMainMessage("Contest title is mandatory");
      setWindow("details");
    } else if (desc === "") {
      setMainMessage("Description is mandatory");
      setWindow("details");
    } else if (title.includes("_dummy") || title.includes("new")) {
      setMainMessage("'new', '_dummy' word not allowed in contest title");
    } else {
      const data = {
        title: title,
        description: desc,
        status: status,
      };
      const headers = {
        Authorization: localStorage.getItem("token"),
      };
      var url;
      var message;
      if (update) {
        url = `${URL}/mcq/contest/${query}/`;
        message = "Contest updated successfuly";
      } else {
        url = `${URL}/mcq/create-contest/`;
        message = "";
      }
      Axios.post(url, data, { headers }).then((res) => {
        if (res.data.res === "Contest title already used !") {
          setMainMessage(res.data.res);
        } else {
          setMainMessage(message);
          setContestSlug(`https://codestrike.in/quiz/attempt/${res.data.res}`);
          router.push("/quiz/admin/[contest]", `/quiz/admin/${res.data.res}`);
        }
      });
    }
  };

  var option_main_counter = -1;
  var question_counter = 0;

  const ipstyle = {
    border: "none",
    boxShadow: "0px 0px 5px rgba(0, 118, 255, 0.3) inset",
    width: "80%",
    padding: 10,
  };

  useEffect(() => {
    Axios.get(`${URL}/mcq/contest/${query}/ `, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then((res) => {
      const data = res.data;
      if (res.data.res != "None") {
        setTilte(data.title);
        setDesc(data.description);
        setIslive(data.is_live);
        setContestPk(data.pk);
        setContestSlug(`https://codestrike.in/quiz/attempt/${data.slug}`);
        setQuestions(
          data.questions.map((question) => {
            return {
              id: question.pk,
              question: question.question,
              options: question.options,
            };
          })
        );
      }
    });
  }, []);

  return (
    <BaseLayout>
      <Head>
        <title>Admin {title} | CodeStrike</title>
      </Head>
      {loggedIn ? (
        <div
          className="container px-3 py-3 mb-4 shadow-sm"
          style={{
            backgroundColor: "#eeeeee",
          }}
        >
          <div className="d-flex flex-row mb-1">
            <Link href="/quiz/admin">
              <div className="mr-5 hover">
                <p className="m-0 font-weight-bold">← Back</p>
              </div>
            </Link>
            <div className="mr-5 hover">
              <h4
                className={
                  window === "details"
                    ? "m-0 font-weight-bold active"
                    : "m-0 font-weight-bold"
                }
                onClick={() => {
                  setWindow("details");
                }}
              >
                Details
              </h4>
            </div>
            <div className="mr-5 hover">
              <h4
                className={
                  window === "questions"
                    ? "m-0 font-weight-bold active"
                    : "m-0 font-weight-bold"
                }
                onClick={() => {
                  setWindow("questions");
                }}
              >
                Questions
              </h4>
            </div>
            {query != "new" && (
              <div className="hover">
                <h4
                  className={
                    window === "submissions"
                      ? "m-0 font-weight-bold active"
                      : "m-0 font-weight-bold"
                  }
                  onClick={() => {
                    setWindow("submissions");
                  }}
                >
                  Submissions
                </h4>
              </div>
            )}
          </div>
          {window === "details" ? (
            <div className="details">
              <h6 className="m-0 font-weight-bold mt-3">Title:</h6>
              <input
                type="text"
                style={ipstyle}
                value={title}
                onChange={(e) => {
                  setTilte(e.target.value);
                }}
              />
              <h6 className="m-0 font-weight-bold mt-3">Description:</h6>
              <textarea
                style={{
                  width: "80%",
                  height: "170px",
                }}
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              ></textarea>

              <div className="d-flex flex-row align-items-center">
                <div>
                  <br />
                  <p>Is Live: &nbsp;&nbsp;&nbsp;&nbsp;</p>
                </div>
                <input
                  type="checkbox"
                  checked={islive}
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                  onChange={() => {
                    setIslive(!islive);
                  }}
                />
              </div>
              <div className="mb-4">
                <h6 className="font-weight-bold m-0">
                  Share this URL with participants
                </h6>
                <p className="font-weight-bold m-0 text-primary">
                  {contestSlug}
                </p>
              </div>
            </div>
          ) : window === "questions" ? (
            <div className="questions mt-4">
              {questions.map((question) => {
                question_counter++;
                var option_counter = -1;
                return (
                  <QuestionBox
                    key={question.id}
                    question={question}
                    option_counter={option_counter}
                    question_counter={question_counter}
                    delHandler={() => deleteQuestion(question)}
                  />
                );
              })}
              <div className="mt-5">
                <textarea
                  value={questionval}
                  className="font-weight-bold"
                  cols="30"
                  rows="10"
                  placeholder="What is your favourite fruit ?"
                  onChange={(e) => {
                    setQuestionval(e.target.value);
                  }}
                ></textarea>
                {options.map((option) => {
                  option_main_counter++;
                  unopcounter++;
                  return (
                    <GenOption
                      key={unopcounter}
                      option_main_counter={option_main_counter}
                      option={option}
                      delHandler={() => deleteOption(option)}
                      checkboxval={checkboxval}
                    />
                  );
                })}
                <div className="d-flex align-items-center">
                  <div className="w-75">
                    <input
                      type="text"
                      value={opvalue}
                      style={{
                        border: "none",
                        boxShadow: "0px 0px 5px rgba(0, 118, 255, 0.3) inset",
                        width: "100%",
                        padding: 10,
                        fontWeight: "bold",
                      }}
                      placeholder="Apple"
                      onChange={(e) => {
                        setOpvalue(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mr-1">
                    <input
                      type="checkbox"
                      checked={checkboxval}
                      onChange={() => {
                        setCheckboxval(!checkboxval);
                      }}
                      style={{
                        width: 32,
                        height: 32,
                      }}
                    />
                  </div>
                  <div>
                    <p className="m-0 font-weight-bold text-success">
                      Mark option as answer
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    className="btn btn-primary btn-sm font-weight-bold"
                    onClick={() => {
                      if (opvalue === "") {
                        setOpMessage("Option field cannot be blank.");
                      } else {
                        setOptions([
                          ...options,
                          {
                            id: unopcounter,
                            option_text: opvalue,
                            is_correct: checkboxval,
                          },
                        ]);
                        setOpvalue("");
                        setCheckboxval(false);
                        setOpMessage("");
                      }
                    }}
                  >
                    Add option
                  </button>
                  <p className="m-0 font-weight-bold text-danger">
                    {opMessage}
                  </p>
                </div>
                <button
                  className="btn btn-success font-weight-bold my-3"
                  onClick={() => {
                    if (questionval == "") {
                      setQMessage("Question cannot be blank");
                    } else if (options.length === 0) {
                      setQMessage("Add atleast one option");
                    } else {
                      createQuestion(questionval, options, questions);
                    }
                  }}
                >
                  Add Question
                </button>
                <p className="m-0 font-weight-bold text-danger">{qMessage}</p>
              </div>
            </div>
          ) : (
            <>
              {query === "new" && (
                <>
                  <h1>Hello World</h1>
                  <MDBTable />
                </>
              )}
            </>
          )}

          <div className="text-center">
            {query === "new" ? (
              <button
                className="btn bg-light border-primary text-primary font-weight-bold w-75"
                onClick={() =>
                  createUpdateContest(title, desc, questions, islive, false)
                }
              >
                Create Contest
              </button>
            ) : (
              window != "submissions" && (
                <>
                  <button
                    className="btn bg-light border-primary text-primary font-weight-bold w-75"
                    onClick={() =>
                      createUpdateContest(title, desc, questions, islive, true)
                    }
                  >
                    Update Contest
                  </button>
                    <a
                      className="btn bg-light text-danger font-weight-bold border-danger w-75 mt-3"
                      onClick={() => deleteContest(contestPk)}
                    >
                      Delete Contest
                    </a>
                </>
              )
            )}
            <p className="text-danger font-weight-bold m-0 mt-2">
              {mainMessage}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </BaseLayout>
  );
};

export default MCQContest;

MCQContest.getInitialProps = ({ query }) => {
  return {
    query: query.contest,
  };
};
