import Head from "next/head";
import BaseLayout from "../components/base_layout";
import Editor from "../components/editor/editor";

const EditorPage = () => {
  return (
    <BaseLayout navbarprop="editor">
      <Head>
        <meta
          name="description"
          content="CodeStrike is an online community of coders."
        />
      </Head>
      <Editor />
    </BaseLayout>
  );
};

export default EditorPage;
