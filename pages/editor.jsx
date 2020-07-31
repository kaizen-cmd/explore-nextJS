import Head from "next/head";
import BaseLayout from "../components/base_layout";
import Re from "../components/editor/re";
import Editor from "../components/editor/editor";
import { useState, useEffect } from "react";

const EditorPage = () => {
  const [res, setRes] = useState(null);
  useEffect(() => {
    var w = screen.width;
    setRes(w <= 900 ? <Editor /> : <Re />);
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
