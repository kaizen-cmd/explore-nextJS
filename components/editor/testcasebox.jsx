const TestCase = (props) => {
  var color;
  props.is_correct ? (color = "bg-success") : (color = "bg-danger");
  return (
    <div className={`${color} col-lg-12 mb-2 tc-div py-2`}>
      <p><u>Test Case #1</u></p>
      <p>Input: lorem</p>
      <p>Input: lorem</p>
      <p>Input: lorem</p>
      <p>Input: lorem</p>
    </div>
  );
};

export default TestCase;
