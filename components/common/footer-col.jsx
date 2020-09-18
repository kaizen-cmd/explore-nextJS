import FooterLink from "./footer-link";

const FooterCol = ({ head, linkarray }) => {
  var keyCount = 0;
  return (
    <div className="col-lg-3">
      <div className="col-lg-12 pl-5">
        <div className="text-left mb-4">
          <h5>{head}</h5>
        </div>
        {linkarray.map((link) => {
          keyCount++;
          return <FooterLink key={keyCount} link={link} />;
        })}
      </div>
    </div>
  );
};

export default FooterCol;
