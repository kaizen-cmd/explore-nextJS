import axios from "axios";
import parser from "html-react-parser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BaseLayout from "../../../components/base_layout";
import URL from "../../../components/url";

const ExamSlug = () => {
  const router = useRouter();
  const [mcqObjs, setMcqObjs] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    } else {
      var link = document.location.href.split("/");
      getQuestions(link[5]);
    }
  }, []);

  async function getQuestions(exam_slug) {
    const res = await axios.get(
      `${URL}/mcqexam/user/attempted-exams/${exam_slug}/`,
      {
        headers: { Authorization: localStorage.getItem("token") },
      }
    );
    if (res.data !== "No exam found") {
      setMcqObjs(convertObjectToArray(res.data));
    } else {
      router.push("/");
    }
  }

  function convertObjectToArray(mcqObjs = {}) {
    var arr = [];
    if (mcqObjs !== {}) {
      for (const obj in mcqObjs) {
        var mcq = {};
        mcq["question"] = obj;
        mcq["answers"] = mcqObjs[obj];
        arr.push(mcq);
      }
    }
    return arr;
  }

  return (
    <BaseLayout>
      <div style={{ margin: "50px auto", width: "50%" }}>
        {mcqObjs.map((question, index) => {
          return (
            <div
              key={index}
              style={{
                marginBottom: 50,
                backgroundColor: "gray",
                padding: 20,
              }}
            >
              <div>
                <strong>Q{index + 1}.</strong>
                {parser(question.question)}
              </div>
              <div>
                <strong>Answer:</strong>
                {question.answers.map((answer, index) => {
                  return <div key={index}>{answer}</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </BaseLayout>
  );
};

export default ExamSlug;
