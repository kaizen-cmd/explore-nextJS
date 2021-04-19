import Head from "next/head";
import PaleBlueContainer from "../../../components/miscellaneous/pale-blue-container";
// import URL from "../../components/url";
import BaseLayout from "../../../components/base_layout";
import WinnerCard from "../../../components/new-user-homepage/winner-card";

const InPSindex = () => {
  return (
    <BaseLayout>
      <Head>
        <title>MCQ Test | CodeStrike</title>
      </Head>
      <PaleBlueContainer text="MITSOE MCQ Test"></PaleBlueContainer>
      <div className="container">
        <div className="row mb-4">
          <WinnerCard
            name="MCQ Pretest - C language"
            image="https://www.tutorialspoint.com/svg/images/questions_and_answers.png"
            bio="Click Here"
            link="https://exam.codestrike.in/mcq-pretest"
          ></WinnerCard>
          <WinnerCard
            name="DBMS Session 1 & 2 MCQ Test"
            image="https://www.tutorialspoint.com/svg/images/questions_and_answers.png"
            bio="Click Here"
            link="https://exam.codestrike.in/dbms-session-1-and-2-mcq"
          ></WinnerCard>
          <WinnerCard
            name="MCQ Test Session 1 & 2"
            image="https://www.tutorialspoint.com/svg/images/questions_and_answers.png"
            bio="Click Here"
            link="https://exam.codestrike.in/mcq-test-session-1-2"
          ></WinnerCard>
          <WinnerCard
            name="MCQ Test [April 12 Session]"
            image="https://www.tutorialspoint.com/svg/images/questions_and_answers.png"
            bio="Click Here"
            link="https://exam.codestrike.in/mcq-test-april-12-session"
          ></WinnerCard>

          <WinnerCard
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
          ></WinnerCard>
          <WinnerCard
            name="MCQ Test [April 19th Session]"
            image="https://www.tutorialspoint.com/svg/images/questions_and_answers.png"
            bio="Click Here"
            link="https://exam.codestrike.in/mcq-test-19th-april-session"
          ></WinnerCard>
        </div>
      </div>
    </BaseLayout>
  );
};

export default InPSindex;
