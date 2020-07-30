import Head from "next/head";
import BaseLayout from "../components/base_layout";
import Re from "../components/editor/re";

const EditorPage = () => {
  return (
    <BaseLayout>
      <Head>
        <meta
          name="description"
          content="CodeStrike is an online community of coders."
        />
      </Head>
      <Re />
    </BaseLayout>
  );
};

export default EditorPage;
