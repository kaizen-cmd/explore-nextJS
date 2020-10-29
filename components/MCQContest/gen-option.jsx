const GenOption = ({
  option_main_counter,
  option,
  delHandler,
  checkboxval,
}) => {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];
  return (
    <div className="d-flex align-items-center mb-2">
      <div className="mr-2">
        <p className="font-weight-bold m-0">
          {`${alphabet[option_main_counter]})   ${option.option_text}`}
        </p>
      </div>
      <div>
        {checkboxval && (
          <p className="m-0 font-weight-bold text-success">Answer</p>
        )}
      </div>
      <div className="ml-5">
        <button
          className="btn btn-sm bg-light border-danger text-danger font-weight-bold"
          onClick={delHandler}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default GenOption;
