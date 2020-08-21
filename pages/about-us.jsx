import React from 'react';
import Head from "next/head";
import BaseLayout from "../components/base_layout";

const AboutUs = () => {
  return (
    <BaseLayout navbarprop="profile">
      <Head>
        <meta
          name="description"
          content="CodeStrike is an online community of coders."/>
      </Head>
      <div class="container aboutus-container">
        <div class="text-center my-2"><br></br>
         <h1>About Us</h1>
        </div>
        <div class="row m-2 p-2">
            <p>
              CodeStrike is a platform for competitive coding contests where coders can learn, develop and show their skills. Codestrike is more than just a coding competition, it's a community of coders. Here at CodeStrike, everyone has the opportunity to showcase their projects, get in touch with fellow programmers to learn, collaborate on projects, and talk about programming in general.
              Sign Up now to take part in exciting coding challenges and enhance your programming skills.
              Join our DISCORD server to get in touch with fellow programmers to learn, develop, and code together.!
            </p>
          </div>
          <div class="text-center my-3">
            <h2>Our Team</h2>
          </div> 
          <div class="row m-2 p-2">
            <div class="col-lg-3 p-3">
                <h2>Tejas Mandre</h2>
                <div>
                    <p><strong>Co-founder</strong></p>
                </div>
                <p>I love to build powerful web applications. Yeah that's pretty much about me. Peace 🖖</p>
                <p>tmandre3@gmail.com</p>
                <a href="mailTo:tmandre3@gmail.com" class="btn btn-md btn-primary">Contact</a>
            </div>
            <div class="col-lg-3 p-3">
                <h2>Suyash Muley</h2>
                <div>
                    <p><strong>Co-founder</strong></p>
                </div>
                <p>I'm looking forward to work on Web Applications and occasionally i love to watch movies and some memes</p>
                <p>suyashmuley5@gmail.com</p>
                <a href="mailTo:suyashmuley5@gmail.com" class="btn btn-md btn-primary">Contact</a>
            </div>
            <div class="col-lg-3 p-3">
                <h2>Anant Mokashi</h2>
                <div>
                    <p><strong>Co-founder</strong></p>
                </div>
                <p>Maybe a FilmMaker </p>
                <p>mokashianant1@gmail.com</p>
                <a href="mailTo:mokashianant1@gmail.com" class="btn btn-md btn-primary">Contact</a>
            </div>
            <div class="col-lg-3 p-3">
                <h2>Sourabh Zadbuke</h2>
                <div>
                    <p><strong>Co-founder</strong></p>
                </div>
                <p>I always keep myself updated about current affairs and starting to work on building powerful Apps </p>
                <p>sourabhzadbuke007@gmail.com</p>
                <a href="mailTo:sourabhzadbuke007@gmail.com" class="btn btn-md btn-primary">Contact</a>
            </div>
        </div>
      </div><br></br><br></br>
    </BaseLayout>
  );
};

export default AboutUs;
