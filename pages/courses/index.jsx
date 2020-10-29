import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
} from "mdbreact";
import Link from "next/link";
const CourseIndex = () => {
  return (
    <>
        <div className="container ">
            <MDBRow className="m-4 p-2">
                <MDBCol style={{ maxWidth: "20rem" }}>
                    <MDBCard>
                    <MDBCardImage
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                        waves
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </MDBCardText>
                        <Link href="/courses/[title]" as={`/courses/${"xyz"}`}>
                        <MDBBtn href="#" color="info" >Click</MDBBtn>                        
                        </Link>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol style={{ maxWidth: "20rem" }}>
                    <MDBCard>
                    <MDBCardImage
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                        waves
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </MDBCardText>
                        <Link href="/courses/[title]" as={`/courses/${"xyz"}`}>
                        <MDBBtn href="#" color="info" >Click</MDBBtn>                        
                        </Link>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol style={{ maxWidth: "20rem" }}>
                    <MDBCard>
                    <MDBCardImage
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                        waves
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn href="#" color="info">Click</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            </div>
            <div className="container">
            <MDBRow className="m-4 p-2">
                <MDBCol style={{ maxWidth: "20rem" }}>
                    <MDBCard>
                    <MDBCardImage
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                        waves
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </MDBCardText>
                        
                        <MDBBtn href="#">Click</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol style={{ maxWidth: "20rem" }}>
                    <MDBCard>
                    <MDBCardImage
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                        waves
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn href="#">Click</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol style={{ maxWidth: "20rem" }}>
                    <MDBCard>
                    <MDBCardImage
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                        waves
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn href="#">Click</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                </MDBRow>
            </div>
                
    </>
  );
};

export default CourseIndex;
