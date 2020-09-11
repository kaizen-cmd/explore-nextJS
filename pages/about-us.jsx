import BaseLayout from "../components/base_layout";
import Head from "next/head";

const AboutUs = (props) => {
  return (
    <BaseLayout>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="CodeStrike is created by a bunch of geeky engineers who came together and started competitive coding and train fellow students."
        />
        <meta
          name="og:description"
          content="CodeStrike is created by a bunch of geeky engineers who came together and started competitive coding and train fellow students."
        />
        <meta
          itemprop="description"
          content="CodeStrike is created by a bunch of geeky engineers who came together and started competitive coding and train fellow students."
        />
        <meta
          name="twitter:description"
          content="CodeStrike is created by a bunch of geeky engineers who came together and started competitive coding and train fellow students."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us" />
        <meta name="twitter:url" content={props.cLink} />
        <meta
          name="twitter:image"
          content="https://img.techpowerup.org/200717/codestrike-logo-min.png"
        />
        <meta itemprop="name" content="About Us" />
        <meta
          itemprop="image"
          content="https://img.techpowerup.org/200717/codestrike-logo-min.png"
        />
        <meta name="og:title" content="About Us" />
        <meta name="og:url" content={props.cLink} />
        <meta
          name="og:image"
          content="https://img.techpowerup.org/200717/codestrike-logo-min.png"
        />
        <meta name="og:site_name" content="CodeStrike.in" />
        <meta name="og:email" content="codestrike20@gmail.com" />
        <meta property="og:type" content="Coding community" />
        <meta property="og:points" content="Code Strike_ACHIEVEMENT" />
      </Head>
      <div className="top-head d-flex align-items-center flex-column">
        <div className="my-2"></div>
        <h1 className="text-light my-5">About Us</h1>
        <div className="my-2"></div>
      </div>
      <div className="container">
        <div className="desc mb-4 mt-3">
          <p
            className="font-weight-bold text-center"
            style={{
              lineHeight: 1.8,
            }}
          >
            CodeStrike is formed by a bunch of geeky engineers who have come
            together to provide this platform for students, teachers, and
            recruiters for a range of purposes. Students can use our platform to
            learn, develop your programming skills, and code by participating in
            our weekly coding competition; teachers will be able to create
            personalized contests for students to assess their progress, and
            recruiters can use this platform during the hiring process for the
            technical evaluation of candidates. We also aim to form a community
            of coders where programmers with different skillsets can get in
            touch and develop together.
          </p>
        </div>
        <div className="main-start-hr">
          <div className="d-flex align-items-center">
            <div>
              <h5 className="my-0 mr-1">Meet the team</h5>
            </div>
            <hr
              style={{
                borderBottom: "4px solid black",
                width: "87%",
              }}
            />
          </div>
        </div>
        <div className="co-founders mt-4 mb-5">
          <div className="text-center">
            <h5>Co-Founders</h5>
          </div>
          <hr
            className="w-100"
            style={{
              borderBottom: "4px solid grey",
            }}
          />
          <div className="row">
            <div className="col-lg-4 p-3">
              <div className="shadow rounded px-3 py-5">
                <div className="text-center">
                  <h4 className="font-weight-bold">Tejas Mandre</h4>
                  <p className="font-weight-bold text-primary mt-1">
                    Technical Lead
                  </p>
                  <h6 className="font-weight-bold">
                    <a href="https://www.linkedin.com/in/tejasmandre/">
                      LinkedIn
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-3">
              <div className="shadow rounded px-3 py-5">
                <div className="text-center">
                  <h4 className="font-weight-bold">Suyash Muley</h4>
                  <p className="font-weight-bold text-primary mt-1">
                    Community Admin
                  </p>
                  <h6 className="font-weight-bold">
                    <a href="https://www.linkedin.com/in/suyash-muley">
                      LinkedIn
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-3">
              <div className="shadow rounded px-3 py-5">
                <div className="text-center">
                  <h4 className="font-weight-bold">Anant Mokashi</h4>
                  <p className="font-weight-bold text-primary mt-1">
                    Business Head
                  </p>
                  <h6 className="font-weight-bold">
                    <a href="https://www.linkedin.com/in/anant-mokashi-592a84146/">
                      LinkedIn
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ps-team mb-5">
          <div className="text-center">
            <h5>Code Judges</h5>
          </div>
          <hr
            className="w-100"
            style={{
              borderBottom: "4px solid grey",
            }}
          />
          <div className="row">
            <div className="col-lg-4 p-3">
              <div className="shadow bg-light rounded px-3 py-5">
                <div className="text-center">
                  <h4 className="font-weight-bold">Ayush Srivastav</h4>
                  <p className="font-weight-bold text-primary mt-1">
                    Core Team
                  </p>
                  <h6 className="font-weight-bold">
                    <a href="https://www.linkedin.com/in/ayush-srivastav-55ba79179/">
                      LinkedIn
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-3">
              <div className="shadow bg-light rounded px-3 py-5">
                <div className="text-center">
                  <h4 className="font-weight-bold">Shreyas Vaidya</h4>
                  <p className="font-weight-bold text-primary mt-1">
                    Core Team
                  </p>
                  <h6 className="font-weight-bold">
                    <a href="https://www.linkedin.com/in/shreyas-vaidya-aa0b21183/">
                      LinkedIn
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-3">
              <div className="shadow bg-light rounded px-3 py-5">
                <div className="text-center">
                  <h4 className="font-weight-bold">Divyesh Tharakan</h4>
                  <p className="font-weight-bold text-primary mt-1">
                    Core Team
                  </p>
                  <h6 className="font-weight-bold">
                    <a href="https://www.linkedin.com/in/divyesh-tharakan-3a6225195/">
                      LinkedIn
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="communication mb-5">
          <div className="text-center">
            <h5>Communication and business</h5>
          </div>
          <hr
            className="w-100"
            style={{
              borderBottom: "4px solid grey",
            }}
          />
          <div className="row">
            <div className="col-lg-4 p-3">
              <div className="shadow bg-light rounded px-3 py-5">
                <div className="text-center">
                  <h4 className="font-weight-bold">Hardik Ambati</h4>
                  <p className="font-weight-bold text-primary mt-1">
                    Communication
                  </p>
                  <h6 className="font-weight-bold">
                    <a href="">LinkedIn</a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-3">
              <div className="shadow bg-light rounded px-3 py-5">
                <div className="text-center">
                  <h4 className="font-weight-bold">Vaibhav Prakash</h4>
                  <p className="font-weight-bold text-primary mt-1">
                    Communication
                  </p>
                  <h6 className="font-weight-bold">
                    <a href="https://www.linkedin.com/in/vaibhavprakash8426/">
                      LinkedIn
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-3">
              <div className="shadow bg-light rounded px-3 py-5">
                <div className="text-center">
                  <h4 className="font-weight-bold">Apurv Vidhate</h4>
                  <p className="font-weight-bold text-primary mt-1">Business</p>
                  <h6 className="font-weight-bold">
                    <a href="https://www.linkedin.com/in/apurv-vidhate-b19b8b1a0/">
                      LinkedIn
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="help-support mb-5">
          <div className="text-center">
            <h5>Support and help</h5>
          </div>
          <hr
            className="w-100"
            style={{
              borderBottom: "4px solid grey",
            }}
          />
          <div className="row">
            <div className="col-lg-4 p-3">
              <div className="shadow bg-light rounded px-3 py-5">
                <div className="text-center">
                  <h4 className="font-weight-bold">Viral Sangani</h4>
                  <p className="font-weight-bold text-primary mt-1">
                    Development Consultant
                  </p>
                  <h6 className="font-weight-bold">
                    <a href="https://www.linkedin.com/in/viral-sangani/">
                      LinkedIn
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-3">
              <div className="shadow bg-light rounded px-3 py-5">
                <div className="text-center">
                  <h4 className="font-weight-bold">Anjani Pandey</h4>
                  <p className="font-weight-bold text-primary mt-1">Graphics</p>
                  <h6 className="font-weight-bold">
                    <a href="">LinkedIn</a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-3">
              <div className="shadow bg-light rounded px-3 py-5">
                <div className="text-center">
                  <h4 className="font-weight-bold">Shantanu Patil</h4>
                  <p className="font-weight-bold text-primary mt-1">
                    Code Analysis
                  </p>
                  <h6 className="font-weight-bold">
                    <a href="https://www.linkedin.com/in/shantanupatil23/">
                      LinkedIn
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-head d-flex align-items-center flex-column">
        <div className="my-2"></div>
        <h3 className="text-light mt-5">We are always growing.</h3>
        <h4 className="font-weight-bold text-light">Want to join us?</h4>
        <a
          href="mailTo:codestrike20@gmail.com"
          className="btn btn-md font-weight-bold text-light mt-1 mb-5 px-4"
          style={{
            backgroundColor: "#315079",
          }}
        >
          Join CodeStrike
        </a>
        <div className="my-2"></div>
      </div>
    </BaseLayout>
  );
};

export default AboutUs;

AboutUs.getInitialProps = (ctx) => {
  return {
    cLink: "https://codestrike.in" + ctx.asPath,
  };
};
