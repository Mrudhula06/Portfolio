// Import statements
import React, { useEffect, useState } from "react";
import "./Home.css";
import profile from "../images/profiles.png";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import '../App.css';

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
      <section className="content-box flex justify-evenly items-center p-10 space-x-10 ">
        <div className=" flex flex-col items-center p-10">
          <p className="text-2xl mb-2 z-50 mt-4">I'm Mrudhula Shri M</p>
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
        <div className="flex justify-center">
          <img
            src={profile}
            alt=""
            className="img rounded-full w-[23rem] custom-border"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
