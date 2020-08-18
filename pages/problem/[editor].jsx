import Head from "next/head";
import BaseLayout from "../../components/base_layout";
import Re from "../../components/editor/re";
import Editor from "../../components/editor/editor";
import { useState, useEffect } from "react";
import URL from "../../components/url";
import axios from "axios";

const EditorPage = (props) => {
  const [res, setRes] = useState(null);
  useEffect(() => {
    var w = screen.width;
    setRes(w <= 900 ? <Editor ps={props.ps} /> : <Re ps={props.ps} />);
  }, [])
  return (
    <BaseLayout>
      <Head>
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
  const url = URL + "/codeportal/ps-detail/" + query.editor + "/";
  const ps = await axios.get(url);
  const ps_obj = ps['data'];
  return {
    ps: ps_obj
  }
}
