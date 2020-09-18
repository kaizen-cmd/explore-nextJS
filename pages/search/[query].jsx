import SearchResultBox from "../../components/miscellaneous/search-result-box";
import axios from "axios";
import BaseLayout from "../../components/base_layout";
import URL from "../../components/url";
import PaleBlueContainer from "../../components/miscellaneous/pale-blue-container";
import Head from "next/head";

const SearchResults = (props) => {
  return (
    <BaseLayout>
      <Head>
        <title>Search {props.query} | CodeStrike</title>
      </Head>
      <PaleBlueContainer
        text={
          <>
            Search results for <span className="text-dark">{props.query}</span>
          </>
        }
      />
      <div className="container">
        <div className="problems">
          <h4 className="font-weight-bold mt-4 mb-2">Questions</h4>
          {props.results.problems != []
            ? props.results.problems.map((problem) => {
                return (
                  <SearchResultBox
                    title={problem.title}
                    link={problem.slug}
                    points={problem.points}
                    isProblem={true}
                  />
                );
              })
            : "No problems found"}
        </div>
        <div className="users mb-4">
          <h4 className="font-weight-bold mt-4 mb-2">CodeStrike Users</h4>
          {props.results.users != []
            ? props.results.users.map((user) => {
                return (
                  <SearchResultBox
                    title={user.username}
                    link={user.username}
                    bio={user.bio}
                    image={user.image}
                  />
                );
              })
            : "No Users found"}
        </div>
      </div>
    </BaseLayout>
  );
};

export default SearchResults;

SearchResults.getInitialProps = async (ctx) => {
  const url = `${URL}/search/${ctx.query.query}/`;
  const res = await axios.get(url);
  return {
    results: res.data,
    query: ctx.query.query,
  };
};
