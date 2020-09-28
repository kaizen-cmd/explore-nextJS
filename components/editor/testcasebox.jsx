import { useState } from "react";

const TestCase = (props) => {
  const [expand, setExpand] = useState(false);
  var color;
  var res;
  var style;
  expand
    ? (style = {
        whiteSpace: "pre-line",
        wordWrap: "break-word",
        wordBreak: "break-word",
      })
    : (style = {
        whiteSpace: "pre-line",
        wordWrap: "break-word",
        wordBreak: "break-word",
        height: "40px",
        overflowY: "hidden",
      });
  console.log(props.is_correct);
  if (props.is_correct && props.is_correct !== "error") {
    color = "bg-success";
    res = "Correct";
  } else {
    color = "bg-danger";
    res = "Wrong";
  }
  return (
    <div className={`${color} col-lg-12 mb-2 tc-div py-2`} style={style}>
      <p
        onClick={() => {
          setExpand(!expand);
        }}
      >
        <u className="mr-2">Test Case #{props.sr_no}</u>
      <span id="click-tc">Click to {expand ? "Collapse": "Expand"}</span>
      </p>
      <p>
        <u className="mr-2">Result:</u>
        <div>{res}</div>
      </p>
      <p>
        <u className="mr-2">Output:</u>
        <div>{props.op}</div>
      </p>
      <p>
        <u className="mr-2">Input:</u>
        <div>{props.ip}</div>
      </p>
      <p>
        <u className="mr-2">Expected:</u>
        <div>{props.exip}</div>
      </p>
    </div>
  );
};

export default TestCase;
