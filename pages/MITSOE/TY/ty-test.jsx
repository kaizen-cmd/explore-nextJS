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
          {/* <WinnerCard
            name="InfyTQ Python Test 1"
            image="https://www.tutorialspoint.com/svg/images/questions_and_answers.png"
            bio="Start Solving"
            link="https://exam.codestrike.in/infytq-python-test-1"
          ></WinnerCard>
          <WinnerCard
            name="InfyTQ Java Test 1"
            image="https://www.tutorialspoint.com/svg/images/questions_and_answers.png"
            bio="Start Solving"
            link="https://exam.codestrike.in/infytq-java-test-1"
          ></WinnerCard> */}
          <WinnerCard
            name="InfyTQ Python Test 4"
            image="https://www.tutorialspoint.com/svg/images/questions_and_answers.png"
            bio="Start Solving"
            link="https://exam.codestrike.in/infytq-python-test-4"
          ></WinnerCard>
          <WinnerCard
            name="InfyTQ Java Test 4"
            image="https://www.tutorialspoint.com/svg/images/questions_and_answers.png"
            bio="Start Solving"
            link="https://exam.codestrike.in/infytq-java-test-day-4"
          ></WinnerCard>
        </div>
      </div>
    </BaseLayout>
  );
};

export default InPSindex;
