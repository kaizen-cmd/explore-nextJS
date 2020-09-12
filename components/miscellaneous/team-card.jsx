const TeamCard = ({ name, role, linlink }) => {
  return (
    <div className="col-lg-4 p-3">
      <div className="shadow rounded px-3 py-5">
        <div className="text-center">
          <h4 className="font-weight-bold">{name}</h4>
          <p className="font-weight-bold text-primary mt-1">{role}</p>
          <h6 className="font-weight-bold">
            <a href={linlink} target="_blank">
              LinkedIn
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
