import Head from "next/head";
import PaleBlueContainer from "../../components/miscellaneous/pale-blue-container";
import URL from "../../components/url";
import BaseLayout from "../../components/base_layout";
import WinnerCard from "../../components/new-user-homepage/winner-card";
import axios from "axios";

const ProblemIndex = ({ contests, cLink }) => {
  return (
    <BaseLayout>
      <Head>
        <title>Practice Porblems | CodeStrike</title>
        <meta
          name="description"
          content="Practice problems on CodeStrike and see your coding skills reach new heights. Porblems are updated on a daily basis."
        />
        <meta name="og:title" content="Practice Problems | CodeStrike" />
        <meta name="og:url" content={cLink} />
        <meta
          name="og:description"
          content="Practice problems on CodeStrike and see your coding skills reach new heights. Porblems are updated on a daily basis."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Practice Problems | CodeStrike" />
        <meta name="twitter:url" content={cLink} />
        <meta
          name="twitter:description"
          content="Practice problems on CodeStrike and see your coding skills reach new heights. Porblems are updated on a daily basis."
        />
        <meta itemProp="name" content="Practice Problems | CodeStrike" />
        <meta
          itemProp="description"
          content="Practice problems on CodeStrike and see your coding skills reach new heights. Porblems are updated on a daily basis."
        />
      </Head>
      <PaleBlueContainer text="Practice Questions"></PaleBlueContainer>
      <div className="container">
        <div className="row mb-4">
          {contests.map((cont) => {
            return (
              <WinnerCard
                name={cont.category}
                image={cont.image}
                bio="Start Solving"
                link={`/codeportal/${cont.slug}`}
                isCat={true}
                is_win={true}
              ></WinnerCard>
            );
          })}
        </div>
      </div>
    </BaseLayout>
  );
};

export default ProblemIndex;

ProblemIndex.getInitialProps = async (ctx) => {
  const contest = await axios.get(`${URL}/codeportal/category`);
  return {
    contests: contest.data,
    cLink: "https://codestrike.in" + ctx.asPath,
  };
};
