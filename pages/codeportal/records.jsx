import Head from "next/head";
import BaseLayout from "../../components/base_layout";
import axios from "axios";
import URL from "../../components/url";
import Link from "next/link";
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
          router.push(`/problem/${obj.pk}/`);
        },
      };
    }),
  };
  return (
    <BaseLayout navbarprop="psindex">
      <Head>
        <meta
          name="description"
          content="CodeStrike is an online community of coders."
        />
      </Head>
      <div className="w-50 mx-auto mb-5 ps-tab-div">
        <MDBDataTable medium data={data} />
      </div>
    </BaseLayout>
  );
};

export default PsIndex;

PsIndex.getInitialProps = async () => {
  const res = await axios.get(URL + "/codeportal/ps-records/");
  const data = res["data"];
  return {
    ps_objs: data,
  };
};
