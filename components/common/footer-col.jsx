const FooterCol = ({ head, linkarray }) => {
  return (
    <div className="col-lg-3">
      <div className="col-lg-12 pl-5">
        <div className="text-left mb-4">
          <h5>{head}</h5>
        </div>
        {linkarray.map((link) => {
          return (
            <a href={link.link} style={{
              color: "white",
            }}>
              <h6>{link.text}</h6>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FooterCol;
