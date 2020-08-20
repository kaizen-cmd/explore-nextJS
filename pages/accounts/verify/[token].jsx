import { useState, useEffect } from "react";
import BaseLayout from "../../../components/base_layout";
import axios from "axios";
import URL, { referer } from "../../../components/url";
import { useRouter } from "next/router";

const Verified = (props) => {
  const router = useRouter();
  const [message, setMessage] = useState("Loading...");
  useEffect(() => {
    var url = `${URL}${window.location["pathname"]}`;
    axios
      .get(url, {
        headers: {
          Referer: referer,
        },
      })
      .then((response) => {
        setMessage(response["data"]["res"] + "You can now login.");
        setTimeout(() => {
          router.push("/");
        }, 2500);
      });
  }, []);
  return (
    <BaseLayout>
      <div className="my-5"></div>
      <div className="d-flex align-items-center justify-content-center">
        <h4 className="text-success font-weight-bold">{message}</h4>
      </div>
      <div className="my-5"></div>
    </BaseLayout>
  );
};

export default Verified;
