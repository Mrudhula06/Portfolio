import React from "react";

import plant from "../images/plant.png";
import eve from "../images/event.png";
import air from "../images/Airline.png";
import quiz from "../images/quiz.png";

function Project() {
  const redirectToGitHub = (repositoryUrl) => {
    window.open(repositoryUrl, "_blank");
  };

  return (
    <>
      <div id='projects' className="p-4"> 
      <h1 className='text-2xl lg:text-3xl font-bold mb-4 text-black text-center mt-32'>Projects</h1>
        </div>
        <div className=" max-w-screen-md mx-auto"> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-5 ">
          {/* Plant Website Container */}
          <div className="max-w-full-md mx-auto rounded-xl shadowed-md overflow-hidden md:max-w-2xl hover:animate-pulse bg-white">
            {/* Image part */}
            <div className="text-center p-8">
              <img
                src={plant}
                alt=""
                width={200}
                height={200}
                className="border-2 border-black"
              />
            </div>

            {/* Content part */}
            <div className="p-4">
              <div className="uppercase tracking-wide text-sm font-semibold">
                Plant Shopping Website
              </div>
              <p className="mt-2">Designed a plant shopping website<br />
                to explore my HTML, CSS and <br />  JavaScript Knowledge</p>
              <button
                onClick={() => redirectToGitHub("https://github.com/Mrudhula06/online-plant-shopping-website.git")}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Code
              </button>
            </div>
          </div>

          {/* College Event Container */}
          <div className="max-w-full-md mx-auto rounded-xl shadowed-md overflow-hidden md:max-w-2xl hover:animate-pulse bg-white">
            {/* Image part */}
            <div className="text-center p-8">
              <img
                src={eve}
                alt=""
                width={200}
                height={200}
                className="border-2 border-black"
              />
            </div>

            {/* Content part */}
            <div className="p-4">
              <div className="uppercase tracking-wide text-sm font-semibold">
                College Event
              </div>
              <p className="mt-2">Designed a College Event<br/> Management with React for the<br /> front-end and utilized MySQL for the<br />  backend.</p>
              <button
                onClick={() => redirectToGitHub("https://github.com/INIKA-N/agile-projects.git")}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Code
              </button>
            </div>
          </div>
        </div>

        {/* Airline and Quiz Containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-5">
          {/* Airline Container */}
          <div className="max-w-full-md mx-auto rounded-xl shadowed-md overflow-hidden md:max-w-2xl hover:animate-pulse bg-white">
            {/* Image part */}
            <div className="text-center p-8 ">
              <img
                src={air}
                alt=""
                width={200}
                height={200}
                className="border-2 border-black"
              />
            </div>

            {/* Content part */}
            <div className="p-4">
              <div className="uppercase tracking-wide text-sm font-semibold">
                Airline Reservation System
              </div>
              <p className="mt-2">Developed a Java-based application<br /> with JavaFXML for the front-end <br /> and utilized MySQL for the backend.</p>
              <button
                onClick={() => redirectToGitHub("https://github.com/Mrudhula06/Airline-reservation-System.git")}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Code
              </button>
            </div>
          </div>

          {/* Quiz Container */}
          <div className="max-w-full-md mx-auto bg-gray-300 rounded-xl shadowed-md overflow-hidden md:max-w-2xl hover:animate-pulse bg-white">
            {/* Image part */}
            <div className="text-center p-8">
              <img
                src={quiz}
                alt=""
                width={200}
                height={200}
                className="border-2 border-black"
              />
            </div>

            {/* Content part */}
            <div className="p-4">
              <div className="uppercase tracking-wide text-sm font-semibold">
                Online Quiz
              </div>
              <p className="mt-2">Designed a Online Quiz with HTML,<br />CSS and JavaScripit for front-end<br /> and utilized MySQL for the backend.</p>
              <button
                onClick={() => redirectToGitHub("https://github.com/Mrudhula06/Online-Quiz.git")}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
