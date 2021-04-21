import Head from "next/head";
import PaleBlueContainer from "../../components/miscellaneous/pale-blue-container";
import URL from "../../components/url";
import BaseLayout from "../../components/base_layout";
import WinnerCard from "../../components/new-user-homepage/winner-card";
import { useState, useEffect } from "react";
import axios from "axios";

const InPSindex = () => {
  const [availableExam, setAvailableExams] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .get(`${URL}/mcqexam/user/available-exams/`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          setAvailableExams(res.data);
        });
    } else {
      router.push("/");
    }
  }, []);
  return (
    <BaseLayout>
      <Head>
        <title>MCQ Test | CodeStrike</title>
      </Head>
      <PaleBlueContainer text="MCQ Tests"></PaleBlueContainer>
      <div className="container">
        <div className="row mb-4">
          {availableExam.map((exam, index) => {
            return (
              <WinnerCard
                key={index}
                link={`https://exam.codestrike.in/${exam.slug}/`}
                bio={
                  <div>
                    <p>{exam.title}</p>
                    <p>Click here</p>
                  </div>
                }
                image={""}
                newPage={false}
              />
            );
          })}
        </div>
      </div>
    </BaseLayout>
  );
};

export default InPSindex;
