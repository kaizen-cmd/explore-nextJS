import Link from "next/link";

const CourseCard6 = ({ title, description, link }) => {
  return (
    <div className="col-lg-6 px-2 mb-2">
      <div
        className="shadow p-3 text-light"
        style={{
          backgroundColor: "#133b5c",
          // height: "250px",
        }}
      >
        <div className="d-flex align-items-center h-100 justify-content-center flex-column">
          <div className="mb-2">
            <h2 className="font-weight-bold m-0 mb-3">{title}</h2>
            <p className="m-0" style={{
                wordBreak: "break-word"
            }}>{description}</p>
          </div>
          <Link href={link}>
            <div className="w-100 mt-1">
              <a className="btn btn-md border-light text-light w-100 py-2">
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
