import OptionBox from "./option-box";

const QuestionBox = ({
  question,
  option_counter,
  question_counter,
  delHandler,
}) => {
  return (
    <div
      className="bg-light shadow-sm py-2 px-3 mb-2"
      style={{
        whiteSpace: "pre-line",
        wordWrap: "break-word",
        wordBreak: "break-word",
      }}
    >
      <p className="font-weight-bold">{`Q${question_counter}.   ${question.question}`}</p>
      {question.options.map((option) => {
        option_counter++;
        return (
          <OptionBox
            key={option_counter}
            option={option}
            option_counter={option_counter}
          />
        );
      })}
      <button
        className="btn btn-sm btn-danger font-weight-bold"
        onClick={delHandler}
      >
        Delete
      </button>
    </div>
  );
};

export default QuestionBox;
