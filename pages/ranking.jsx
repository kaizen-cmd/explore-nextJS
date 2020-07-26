import Head from "next/head";
import BaseLayout from "../components/base_layout";

const Ranking = () => {
  return (
    <BaseLayout navbarprop="ranking">
      <Head>
        <meta
          name="description"
          content="CodeStrike is an online community of coders."
        />
      </Head>
      <div className="w-50 mx-auto my-5 ps-tab-div">
        <table className="table ps-table">
          <thead className="black white-text">
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Name</th>
              <th scope="col">Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
            </tr>
          </tbody>
        </table>
      </div>
    </BaseLayout>
  );
};

export default Ranking;
