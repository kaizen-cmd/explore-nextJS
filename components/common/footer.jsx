import FooterCol from "./footer-col";

const Footer = (props) => {
  var year = new Date().getFullYear();
  return (
    <div className="footer">
      <br />
      <br />
      <br />
      <div className="row m-0 p-0">
        <FooterCol
        key="1"
          head="Quick Links"
          linkarray={["Home", "My Profile", "Problems", "Rankings"]}
        />
        <FooterCol
        key="2"
          head="Reach us at"
          linkarray={[
            "codestrike20@gmail.com",
            "https://discord.gg/qwweqw",
            "MIT SOE",
            "+91 9021343679",
          ]}
        />
        <FooterCol
        key="3"
          head="Our Location"
          linkarray={["MIT SOE,", "MIT ADTU,", "Loni Kalbhor,", "Pune."]}
        />
        <div className="col-lg-3">
          <div className="col-lg-12 text-center">
            <img
              src="https://img.techpowerup.org/200717/codestrike-logo-min.png"
              alt="logo"
            />
          </div>
        </div>
        <div className="cp-text mt-5">
          <p>Copy Rights, Team Code_Strike® {year}</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Footer;
