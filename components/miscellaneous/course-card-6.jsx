import Link from "next/link";

const CourseCard6 = ({ title, description, link }) => {
  return (
    <div className="col-lg-6 px-4 mb-2">
      <div
        className="shadow p-4 text-light"
        style={{
          backgroundColor: "#133b5c",
          // height: "250px",
        }}
      >
        <div className="d-flex align-items-center h-100 justify-content-center flex-column">
          <div className="mb-2">
            <h2 className="font-weight-bold m-0 mb-3">{title}</h2>
            <p
              className="m-0"
              style={{
                wordBreak: "break-word",
              }}
            >
              {description}
            </p>
          </div>
          <Link href={link}>
            <div className="w-100 mt-1 bg-light shadow-lg">
              <a
                className="btn btn-md border-light font-weight-bold w-100 py-2"
                style={{
                  color: "#133b5c",
                }}
              >
                Practice Now
              </a>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard6;
