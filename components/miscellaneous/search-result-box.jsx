import Link from "next/link";

const SearchResultBox = (props) => {
  return (
    <>
      {props.isProblem ? (
        <Link href="/problem/[editor]" as={`/problem/${props.link}`}>
          <a
            style={{
              textDecoration: "none",
            }}
          >
            <div>
              <div className="rows shadow-sm px-2 my-3 py-2">
                <p className="font-weight-bold m-0 text-primary">
                  {props.title}
                </p>
                <p className="font-weight-bold m-0">
                  Points: <span className="text-success">{props.points}</span>
                </p>
              </div>
            </div>
          </a>
        </Link>
      ) : (
        <div>
          <Link href="/profile/[profile]" as={`/profile/${props.link}`}>
            <a
              style={{
                textDecoration: "none",
              }}
            >
              <div>
                <div className="d-flex flex-row shadow-sm my-2 align-items-center">
                  <div className="mr-3 p-2">
                    <img
                      src={props.image}
                      alt={props.title}
                      style={{ width: "75px", height: "75px" }}
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <div>
                      <p className="font-weight-bold text-primary m-0">
                        {props.title}
                      </p>
                    </div>
                    <div>
                      <p className="font-weight-bold m-0">{props.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      )}
    </>
  );
};

export default SearchResultBox;
