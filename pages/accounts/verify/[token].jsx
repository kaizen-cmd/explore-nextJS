import { useState, useEffect } from "react";
import BaseLayout from "../../../components/base_layout";
import axios from "axios";
import URL from "../../../components/url";
import SmLoader from "../../../components/common/sm-loader";
import { useRouter } from "next/router";

const Verified = () => {
  const router = useRouter();
  const [message, setMessage] = useState(<SmLoader />);
  useEffect(() => {
    var url = `${URL}${window.location["pathname"]}`;
    axios.get(url).then((response) => {
      setMessage(response["data"]["res"] + " You can now login.");
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
