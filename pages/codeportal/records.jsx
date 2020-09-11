import Head from "next/head";
import BaseLayout from "../../components/base_layout";
import axios from "axios";
import URL from "../../components/url";
import { MDBDataTable } from "mdbreact";
import { useRouter } from "next/router";

const PsIndex = (props) => {
  const router = useRouter();
  const data = {
    columns: [
      {
        label: "Problem",
        field: "problem",
        sort: "asc",
        width: 35,
      },
      {
        label: "Author",
        field: "author",
        sort: "asc",
        width: 35,
      },
      {
        label: "Total Subs",
        field: "subs",
        sort: "asc",
        width: 15,
      },
      {
        label: "Correct%",
        field: "correct",
        sort: "asc",
        width: 15,
      },
    ],
    rows: props.ps_objs.map((obj) => {
      return {
        problem: obj.title,
        author: obj.author,
        subs: obj.total_subs,
        correct: obj.correct_percentage,
        clickEvent: () => {
          router.push(`/problem/[editor]`, `/problem/${obj.pk}`);
        },
      };
    }),
  };
  return (
    <BaseLayout navbarprop="psindex">
      <Head>
        <title>Practice Porblems</title>
        <meta
          name="description"
          content="Practice problems on CodeStrike and see your coding skills reach new heights. Porblems are updated on a daily basis."
        />
        <meta name="og:title" content="Practice Porblems" />
        <meta name="og:url" content={props.cLink} />
        <meta
          name="og:description"
          content="Practice problems on CodeStrike and see your coding skills reach new heights. Porblems are updated on a daily basis."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Practice Porblems" />
        <meta name="twitter:url" content={props.cLink} />
        <meta
          name="twitter:description"
          content="Practice problems on CodeStrike and see your coding skills reach new heights. Porblems are updated on a daily basis."
        />
        <meta itemprop="name" content="Practice Porblems" />
        <meta
          itemprop="description"
          content="Practice problems on CodeStrike and see your coding skills reach new heights. Porblems are updated on a daily basis."
        />
      </Head>
      <div className="w-50 mx-auto mb-5 ps-tab-div">
        <MDBDataTable medium data={data} />
      </div>
    </BaseLayout>
  );
};

export default PsIndex;

PsIndex.getInitialProps = async (ctx) => {
  const res = await axios.get(URL + "/codeportal/ps-records/");
  const data = res["data"];
  return {
    ps_objs: data,
    cLink: "https://codestrike.in" + ctx.asPath
  };
};
