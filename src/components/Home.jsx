// Import statements
import React, { useEffect, useState } from "react";
import "./Home.css";
import profile from "../images/profiles.png";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

function Home() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const textToDisplay = "Web Developer";
    const delay = 250;

    for (let i = 0; i <= textToDisplay.length; i++) {
      setTimeout(() => {
        setDisplayText(textToDisplay.substring(0, i));
      }, i * delay);
    }
  }, []);

  return (
    <div id="home" className="p-20 rounded-lg mt-16">
      <section className="content-box flex justify-between items-center mt-12 p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 ">
        <div className="h-full w-full lg:w-1/2 ssm:w-full lg:mr-4 text-center flex flex-col items-center">
          <p className="text-2xl mb-2 mt-4 lg:mt-0 lg:mb-0 lg:pr-10">
            I'm Mrudhula Shri M
          </p>
          <p className="mt-2 text-xl">{displayText}</p>
          <div className="flex space-x-4 mt-5 cursor-pointer">
            <a
              href="https://www.linkedin.com/in/mrudhulashrimanikantan"
              target="_blank"
              rel=""
            >
              <BsLinkedin
                size={30}
                className="border-7 hover:border-black rounded-full"
              />
            </a>
            <a
              href="https://www.instagram.com/mrudhula_manikantan/"
              target="_blank"
              rel=""
            >
              <BsInstagram
                size={30}
                className="border-7 hover:border-black rounded-full"
              />
            </a>
            <a href="https://github.com/Mrudhula06" target="_blank" rel="">
              <BsGithub
                size={30}
                className="border-7 hover:border-black rounded-full"
              />
            </a>
            <a
              href="https://leetcode.com/MrudhulaShri_M/"
              target="_blank"
              rel=""
            >
              <SiLeetcode
                size={30}
                className="border-7 hover:border-black rounded-full"
              />
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 ssm:w-full items-center lg:mr-auto">
          <img
            src={profile}
            alt=""
            width={350}
            height={350}
            className="rounded-full custom-border"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
