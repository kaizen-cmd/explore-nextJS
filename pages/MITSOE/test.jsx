import Head from "next/head";
import PaleBlueContainer from "../../components/miscellaneous/pale-blue-container";
// import URL from "../../components/url";
import BaseLayout from "../../components/base_layout";
import WinnerCard from "../../components/new-user-homepage/winner-card";

const ProblemIndex = () => {
  return (
    <BaseLayout>
      <Head>
        <title>MCQ Test | CodeStrike</title>
      </Head>
      <PaleBlueContainer text="MITSOE MCQ Test"></PaleBlueContainer>
      <div className="container">
        <div className="row mb-4">
              <WinnerCard
                name="Pretest"
                image="https://www.tutorialspoint.com/svg/images/questions_and_answers.png"
                bio="Start Solving"
                link="https://codestrike.in/MITSOE/pretestMCQ"
              ></WinnerCard>
              <WinnerCard
                name="C & C++"
                image="https://seeklogo.com/images/C/c-logo-672525892C-seeklogo.com.png"
                bio="Start Solving"
                link="https://codestrike.in/MITSOE/ctest"
              ></WinnerCard>
              <WinnerCard
                name="OOP "
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/OOP.svg/180px-OOP.svg.png"
                bio="Start Solving"
                link="http://codestrike.in/MITSOE/ooptest"
              ></WinnerCard>
              
              {/* <WinnerCard
                name="Python MCQs"
                image="https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png"
                bio="Start Solving"
                link="http://codestrike.in/MITSOE/pythontest"
              ></WinnerCard> */}
        </div>
      </div>
    </BaseLayout>
  );
};

export default ProblemIndex;
