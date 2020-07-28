const Dashboard = () => {
  return (
    <div className="top-container">
      <div className="container pt-3 pb-0">
        <div className="row homepage-top">
          <div className="col-md-6">
            <div className="col-lg-12 px-5 pt-3 head">
              <div className="mb-4">
                <h4>
                  Hi,{" "}
                  <span>
                    <strong>Tejas</strong>
                  </span>{" "}
                  choose anyone problem and try solving it.
                </h4>
                <h4>When in doubt, use bruteforce.</h4>
              </div>
              <div>
                <p>
                  Total Attempts:{" "}
                  <span>
                    <strong>12</strong>
                  </span>
                </p>
              </div>
              <div>
                <p>
                  Correct Percentage:{" "}
                  <span>
                    <strong>12</strong>
                  </span>
                </p>
              </div>
              <div>
                <p>
                  Total Correct Attempts:{" "}
                  <span>
                    <strong>12</strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-lg-12 mt-2">
              <div className="mb-2 text-center">
                <h4 className="mb-0">Live Problems</h4>
              </div>
              <table class="table ps-table">
                <thead class="black white-text">
                  <tr>
                    <th scope="col">Points</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">10</th>
                    <td>Mark</td>
                    <td>tmandre</td>
                  </tr>
                  <tr>
                    <th scope="row">20</th>
                    <td>Jacob</td>
                    <td>tmandre</td>
                  </tr>
                  <tr>
                    <th scope="row">30</th>
                    <td>Larry</td>
                    <td>tmandre</td>
                  </tr>
                  <tr>
                    <th scope="row">30</th>
                    <td>Larry</td>
                    <td>tmandre</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>Larry</td>
                    <td>tmandre</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
