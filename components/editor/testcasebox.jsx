const TestCase = (props) => {
  var color;
  var res;
  if (props.is_correct) {
    color = "bg-success";
    res = "Correct";
  } else {
    color = "bg-danger";
    res = "Wrong";
  }
  return (
    <div
      className={`${color} col-lg-12 mb-2 tc-div py-2`}
      style={{
        wordBreak: "break-word",
      }}
    >
      <p>
        <u>Test Case #{props.sr_no}</u>
      </p>
      <p>
        <u className="mr-2">Result:</u>
        {res}
      </p>
      <p>
        <u className="mr-2">Output:</u>
        {props.op}
      </p>
      <p>
        <u className="mr-2">Input:</u>
        {props.ip}
      </p>
      <p>
        <u className="mr-2">Expected:</u>
        {props.exip}
      </p>
    </div>
  );
};

export default TestCase;
