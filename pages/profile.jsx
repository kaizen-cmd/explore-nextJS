import Head from "next/head";
import BaseLayout from "../components/base_layout";

const Profile = () => {
  return (
    <BaseLayout navbarprop="profile">
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

export default Profile;