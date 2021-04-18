import axios from "axios";
import parser from "html-react-parser"
import BaseLayout from "../../../components/base_layout";

const ExamSlug = (props) => {
  return (
    <BaseLayout>

    <div 
      style={{
        border: "1px solid black",
        marginTop: "3%",
        marginBottom: "3%",
        marginLeft: "20%",
        marginRight: "20%",
        borderRadius: '5px',
      }}>
        {/* {props.mcq_objs.map((mcq) =>  */}
          <div
            style={{
              border: "1px solid black",
              margin: "5%",
              borderRadius: '5px',
              backgroundColor: "#f1f2f6"
            }}>
              <div 
                style={{
                  margin: "3%",
                  marginBottom: "0%",
                  fontSize: "105%",
                  fontWeight: "600",
                }}>
                Q. Runtime polymorphism feature in java isQ. Runtime polymorphism feature in java is
              </div>

              <div 
                style={{
                  marginBottom: "3%",
                  marginLeft: "3%",
                  marginTop: "1%",
                  fontSize: "100%",
                  fontWeight: "500",
                }}>
                Ans: Hello World
              </div>
          </div> 
        {/* )} */}
    </div>
    
    </BaseLayout>
  );
};

export default ExamSlug;

ExamSlug.getInitialProps = async (ctx) => {
  const auth = {
    headers: {
      'Authorization': "Token c386ea9c041d4ba6f070dc05fa82ec328c2b85ec"
    }
  }
  const res = await axios.get('http://api.codestrike.in/mcqexam/user/attempted-exams/infytq-java-test-1/', auth);
  return {
    mcq_objs: res.data
  };
};