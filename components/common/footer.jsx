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
          key={1}
          head="Quick Links"
          linkarray={[
            { link: "/", text: "Home" },
            { link: "/codeportal/records", text: "Practice" },
            {
              link:
                "https://www.payumoney.com/paybypayumoney/#/739DEA8A42A7E089D47B67026DF4172A",
              text: "Donate",
            },
            { link: "/contact-us", text: "Contact Us" },
          ]}
        />
        <FooterCol
          key={2}
          head="Reach us at"
          linkarray={[
            { link: "mailTo:codestrike20@gmail.com", text: "Gmail" },
            { link: "https://discord.gg/qwweqw", text: "Discord" },
            {
              link:
                "https://www.linkedin.com/company/codestrike2-0/?viewAsMember=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_top%3BVvILz4cwSe%2BJWynpw2%2BG9Q%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_search_srp_top-search_srp_result&lici=6o0FPz0%2BSgGxnzmCfVG1jg%3D%3D",
              text: "LinkedIn",
            },
            { link: "#", text: "Telegram" },
          ]}
        />
        <FooterCol
          key={3}
          head="Our Location"
          linkarray={[
            { text: "Maharashtra," },
            { text: "India," },
            { text: "Earth," },
            { text: "Milky Way." },
          ]}
        />
        <div className="col-lg-3">
          <div className="col-lg-12 text-center">
            <img src="/ico.png" alt="logo" />
            <div className="px-4 mt-3">
              <div className="px-5">
                <div className="d-flex mx-5 justify-content-between">
                  <i
                    className="fa fa-instagram text-white"
                    style={{
                      fontSize: "1.5rem",
                    }}
                  ></i>
                  <i
                    className="fa fa-linkedin text-white"
                    style={{
                      fontSize: "1.5rem",
                    }}
                  ></i>
                  <i
                    className="fa fa-youtube text-white"
                    style={{
                      fontSize: "1.5rem",
                    }}
                  ></i>
                </div>
              </div>
            </div>
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
