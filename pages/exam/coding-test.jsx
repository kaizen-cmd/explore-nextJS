import Head from "next/head";
import PaleBlueContainer from "../../components/miscellaneous/pale-blue-container";
import URL, { DEBUG } from "../../components/url";
import BaseLayout from "../../components/base_layout";
import WinnerCard from "../../components/new-user-homepage/winner-card";
import { useState, useEffect } from "react";
import axios from "axios";

const Codeindex = () => {
  const [availableCodeExam, setAvailableExams] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .get(`${URL}/codeportal/available-contests/`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          // console.log(res.data.res)
          setAvailableExams(res.data.res);
          // return res.data
        });
    } else {
      router.push("/");
    }
  }, []);
  return (
    <BaseLayout>
      <Head>
        <title>Coding Test | CodeStrike</title>
      </Head>
      <PaleBlueContainer text="Coding Test"></PaleBlueContainer>
      <div className="container">
        <div className="row mb-4">
          {availableCodeExam.map((exam, index) => {
            return (
              <WinnerCard
                key={index}
                link={`https://codestrike.in/contest/${exam.slug}/`}
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

export default Codeindex;
