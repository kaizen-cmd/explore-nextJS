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
            name="Fundamentals of C & C++"
            image="https://seeklogo.com/images/C/c-logo-672525892C-seeklogo.com.png"
            bio="Start Solving"
            link="https://codestrike.in/MITSOE/ctest"
          ></WinnerCard>
          <WinnerCard
            name="OOP "
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/OOP.svg/180px-OOP.svg.png"
            bio="Start Solving"
            link="http://codestrike.in/MITSOE/ooptest"
          />
          <WinnerCard
            name="OOP based CPP "
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png"
            bio="Start Solving"
            link="http://codestrike.in/MITSOE/cpp-oop"
          />
          <WinnerCard
            name="Java & Python MCQs"
            image="https://raygun.com/blog/images/java-vs-python/java-vs-python.png"
            bio="Start Solving"
            link="http://codestrike.in/MITSOE/java-python"
          />
          <WinnerCard
            name="Basics of Data Structures MCQs"
            image="https://miro.medium.com/max/5442/1*KpDOKMFAgDWaGTQHL0r70g.png"
            bio="Start Solving"
            link="http://codestrike.in/MITSOE/dstest"
          />
          <WinnerCard
            name="Advanced Data Structures MCQs"
            image="https://miro.medium.com/max/5442/1*KpDOKMFAgDWaGTQHL0r70g.png"
            bio="Start Solving"
            link="http://codestrike.in/MITSOE/adstest"
          />
          <WinnerCard
            name="Advanced Java Python C++ MCQs"
            image="https://www.simplilearn.com/ice9/free_resources_article_thumb/Best-Programming-Languages-to-Start-Learning-Today.jpg"
            bio="Start Solving"
            link="http://codestrike.in/MITSOE/adv-java-py-cpp"
          />
          <WinnerCard
            name="Basics of DBMS"
            image="https://s3-us-west-2.amazonaws.com/a.techdemand.io/wp-content/uploads/2020/07/07184901/dbms-1024x631.jpg"
            bio="Start Solving"
            link="http://codestrike.in/MITSOE/basics-dbms"
          />
          <WinnerCard
            name="Basics of OS and CN"
            image="https://www.tutorialspoint.com/svg/images/questions_and_answers.png"
            bio="Start Solving"
            link="http://codestrike.in/MITSOE/basics-os-cn"
          />
          <WinnerCard
            name="Web Technology"
            image="https://peerbits-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/technology-stack-for-web-application-main.jpg"
            bio="Start Solving"
            link="http://codestrike.in/MITSOE/web-tech"
          />
        </div>
      </div>
    </BaseLayout>
  );
};

export default ProblemIndex;
