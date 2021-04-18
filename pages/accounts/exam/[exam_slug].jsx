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
    </div>
    
    </BaseLayout>
  );
};

export default ExamSlug;

// ExamSlug.getInitialProps = async (ctx) => {
//   return {
//     leader_objs: data,
//     cLink: "https://codestrike.in" + ctx.asPath,
//   };
// };