const FooterLink = ({ link }) => {
  return (
    <a
      href={link.link}
      style={{
        color: "white",
      }}
    >
      <h6>{link.text}</h6>
    </a>
  );
};

export default FooterLink;
