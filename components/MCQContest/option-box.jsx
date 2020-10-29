const OptionBox = ({ option, option_counter }) => {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];
  return (
    <div
      className="d-flex align-items-center mb-2"
      style={{
        whiteSpace: "pre-line",
        wordWrap: "break-word",
        wordBreak: "break-word",
      }}
    >
      <div className="mr-2">
        <p className="font-weight-bold m-0">
          {`${alphabet[option_counter]})   ${option.option_text}`}
        </p>
      </div>
      <div>
        {option.is_answer && (
          <p className="m-0 text-success font-weight-bold">Answer</p>
        )}
      </div>
    </div>
  );
};

export default OptionBox;
