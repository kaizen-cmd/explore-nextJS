import Link from "next/link";

const WinnerCard = ({ name, image, bio, is_win, link }) => {
  return (
    <>
      {is_win ? (
        <Link href="/profile/[profile]" as={`/profile/${name}`}>
          <div className="col-lg-4 winner-card">
            <div className="col-lg-12">
              <div className="text-center mt-3">
                <div className="card-img w-100">
                  <img src={image} alt={name} className="win" />
                </div>
                <h5 className="mt-3">{name}</h5>
                <div className="bio">
                  <p>{bio}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <div className="col-lg-4 winner-card">
          <div className="col-lg-12">
            <div className="text-center mt-3">
              <div className="card-img w-100">
                <img src={image} alt={name} className="proj" />
              </div>
              <a href={link} target="_blank">
                <h5 className="mt-3">{name}</h5>
                <div className="bio">
                  <p>{bio}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WinnerCard;
