import Video from "../../components/courses/video";
import Sidebar from "../../components/courses/sidebar";

const CourseTitle = () => {
    return (
        <>
           <div className="row">
               <div className="col-lg-9">
                    <Video/>
               </div>
                <div className="col-lg-3">
                    <Sidebar/>
                </div>
           </div>
       </>
    )
}

export default CourseTitle;