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
        <title>{props.ps.title} | CodeStrike</title>
        <meta
          name="description"
          content={`${props.ps.statement.slice(0, 140)} ...Solve Now!`}
        />
        <meta name="og:title" content={`${props.ps.title} | CodeStrike`} />
        <meta name="og:url" content={props.cLink} />
        <meta
          name="og:description"
          content={`${props.ps.statement.slice(0, 140)} ...Solve Now!`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${props.ps.title} | CodeStrike`} />
        <meta name="twitter:url" content={props.cLink} />
        <meta
          name="twitter:description"
          content={`${props.ps.statement.slice(0, 140)} ...Solve Now!`}
        />
        <meta itemprop="name" content={`${props.ps.title} | CodeStrike`} />
        <meta
          itemprop="description"
          content={`${props.ps.statement.slice(0, 140)} ...Solve Now!`}
        />
      </Head>
      {res}
    </BaseLayout>
  );
};

export default EditorPage;

EditorPage.getInitialProps = async (ctx) => {
  const url = URL + "/codeportal/ps-detail/" + ctx.query.editor + "/";
  const ps = await axios.get(url);
  const ps_obj = ps["data"];
  return {
    ps: ps_obj,
    psUrl: url,
    cLink: "https://codestrike.in" + ctx.asPath,
  };
};
