import Head from "next/head";
import BaseLayout from "../../../components/base_layout";
import Re from "../../../components/editor/re";
import Editor from "../../../components/editor/editor";
import { useState, useEffect } from "react";
import URL from "../../../components/url";
import axios from "axios";

const EditorPage = (props) => {
  const [res, setRes] = useState(null);
  useEffect(() => {
    var w = screen.width;
    setRes(
      w <= 900 ? (
        <Editor ps={props.ps} psUrl={props.psUrl} />
      ) : (
        <Re ps={props.ps} psUrl={props.psUrl} />
      )
    );
  }, []);
  return (
    <BaseLayout>
      <Head>
        <title>{ps.title} Contest | CodeStrike</title>
        <meta
          name="description"
          content="CodeStrike is an online community of coders."
        />
      </Head>
      {res}
    </BaseLayout>
  );
};

export default EditorPage;

EditorPage.getInitialProps = async ({ query }) => {
  const url =
    URL +
    "/codeportal/contest-ps-detail/" +
    query.name +
    "/" +
    query.ps_id +
    "/";
  const ps = await axios.get(url);
  const ps_obj = ps["data"];
  return {
    ps: ps_obj,
    psUrl: url,
  };
};
