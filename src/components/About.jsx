import React from "react";
import "./About.css";
import profile from "../images/profiles.png";
import Resume from "../images/Mrudhula Shri.M (3).pdf";

const About = () => {
  const resumeLink = "https://drive.google.com/file/d/1lecRZdoKkJSDZRPY2K_1XChi5uMhFk9x/view?usp=sharing";

  // const handleGetResume = () => {
  //   window.open("https://drive.google.com/drive/u/0/folders/1fyMeNHcYlamLXERma3Rg9OuwspDEad_i", "_blank");
  // };

  return (
    <div id="about" className="p-6 mt-4">
      <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-black text-center mt-16">
        About Me
      </h1>
      <section
        id="home"
        className="flex flex-col lg:flex-row p-4 lg:p-10 space-y-4 lg:space-y-10"
      >
        <div className="content bg-white p-6 rounded-lg text-center w-full lg:w-auto lg:flex lg:items-center justify-center">
          <div className="lg:mr-4">
            <div className="rounded-full overflow-hidden custom-border">
              <img
                src={profile}
                alt=""
                className="w-full h-auto lg:w-64 lg:h-64 rounded-full"
              />
            </div>
          </div>
          <div className="lg:max-w-md text-center"> {/* Centered container */}
            <p className="text-base lg:text-xl ssm:text-xl mb-2 mt-4 lg:mt-0 lg:mb-4 lg:pr-10">
              Seeking a challenging position in a reputed organization where I
              can passionately expand my skills and knowledge. Eager to
              contribute my dedication and enthusiasm to a team environment for
              mutual growth and success
            </p>
            <a href={resumeLink} download><button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Resume</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
