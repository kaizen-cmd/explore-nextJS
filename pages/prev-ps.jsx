import Head from "next/head";
import BaseLayout from "../components/base_layout";

const PsIndex = (props) => {
  return (
    <BaseLayout navbarprop="psindex">
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
              <th scope="col">Problem</th>
              <th scope="col">Points</th>
              <th scope="col">Total Subs</th>
              <th scope="col">Correct %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark sdfsdfsf</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>53%</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>53%</td>
            </tr>
            <tr>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>53%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </BaseLayout>
  );
};

export default PsIndex;
