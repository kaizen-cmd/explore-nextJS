import Head from "next/head";
import BaseLayout from "../components/base_layout";

const Editor = () => {
  return (
    <BaseLayout navbarprop="editor">
      <Head>
        <meta
          name="description"
          content="CodeStrike is an online community of coders."
        />
      </Head>
      <h1>Hello World</h1>
    </BaseLayout>
  );
};

export default Editor;
