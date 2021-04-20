import Head from "next/head";
import PaleBlueContainer from "../../../components/miscellaneous/pale-blue-container";
// import URL from "../../components/url";
import BaseLayout from "../../../components/base_layout";
import WinnerCard from "../../../components/new-user-homepage/winner-card";
import { useState,useEffect } from "react";
import axios from "axios";

const InPSindex = () => {
  const [availableExam, setAvailableExams] = useState([])
  useEffect(() => {
    if (localStorage.getItem("token")) {
         axios
           .get('https://api.codestrike.in/mcqexam/user/available-exams/',{
             headers: { Authorization: localStorage.getItem("token") }
           })
           .then((res) =>{
             setAvailableExams(res.data)
           })
              
    } else {
      router.push("/");
    }
  }, []);
  return (
    <BaseLayout>
      <Head>
        <title>MCQ Test | CodeStrike</title>
      </Head>
      <PaleBlueContainer text="MITSOE MCQ Test"></PaleBlueContainer>
      <div className="container">
        <div className="row mb-4">
          {/* <WinnerCard
            name="MCQ Pretest - C language"
            image="https://www.tutorialspoint.com/svg/images/questions_and_answers.png"
            bio="Click Here"
            link="https://exam.codestrike.in/c-mcq-pretest"
          ></WinnerCard> */}
          {/* <WinnerCard
            name="DBMS Session 1 & 2 MCQ Test"
            image="https://www.tutorialspoint.com/svg/images/questions_and_answers.png"
            bio="Click Here"
            link="https://exam.codestrike.in/dbms-session-1-and-2-mcq"
          ></WinnerCard> */}
          {/* <WinnerCard
            name="MCQ Test Session 1 & 2"
            image="https://www.tutorialspoint.com/svg/images/questions_and_answers.png"
            bio="Click Here"
            link="https://exam.codestrike.in/mcq-test-session-1-2"
          ></WinnerCard> */}
          {/* <WinnerCard
            name="MCQ Test [April 12 Session]"
            image="https://www.tutorialspoint.com/svg/images/questions_and_answers.png"
            bio="Click Here"
            link="https://exam.codestrike.in/c-mcq-test-april-12-session"
          ></WinnerCard> */}

          {/* <WinnerCard
            name="DBMS Session 3"
            image="https://www.tutorialspoint.com/svg/images/questions_and_answers.png"
            bio="Click Here"
            link="https://exam.codestrike.in/dbms-session-3"
          ></WinnerCard>
          <WinnerCard
            name="DBMS Session 4"
            image="https://www.tutorialspoint.com/svg/images/questions_and_answers.png"
            bio="Click Here"
            link="https://exam.codestrike.in/dbms-session-4"
          ></WinnerCard>
          <WinnerCard
            name="DBMS Session 5"
            image="https://www.tutorialspoint.com/svg/images/questions_and_answers.png"
            bio="Click Here"
            link="https://exam.codestrike.in/dbms-session-5"
          ></WinnerCard> */}
          {/* <WinnerCard
            name="C MCQ Test [April 19th Session]"
            image="https://www.tutorialspoint.com/svg/images/questions_and_answers.png"
            bio="Click Here"
            link="https://exam.codestrike.in/c-mcq-test-19th-april-session"
          ></WinnerCard> */}
           <div className="d-flex">
            {availableExam.map((exam) => {
              return (
                <WinnerCard
                  // key={index}
                  link={`https://exam.codestrike.in/${exam.slug}/`}
                  bio={
                    <div>
                      <p>{exam.title}</p>
                      <p>
                        Click here 
                      </p>
                    </div>
                  }
                  image={""}
                  newPage={false}
                />
              );
            })}
           </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default InPSindex;
