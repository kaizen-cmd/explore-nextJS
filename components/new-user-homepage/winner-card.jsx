const WinnerCard = ({name, image, git_link, linked_link, bio}) => {
  return (
    <div className="col-lg-4 winner-card">
      <div className="col-lg-12">
          <div className="text-center mt-3">
            <div className="card-img w-100">
              <img src={image} alt={name} />
            </div>
            <h5 className="mt-3">{name}</h5>
            <div className="bio">
                <p>{bio}</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default WinnerCard;
