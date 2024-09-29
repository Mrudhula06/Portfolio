import React from "react";
import pipes from "../images/pipes.png";
import eve from "../images/event.png";
import todo from "../images/todo.png";
import quiz from "../images/quiz.png";
import weather from "../images/weather.png";

function Project() {
  const redirectToGitHub = (repositoryUrl) => {
    window.open(repositoryUrl, "_blank");
  };

  return (
    <div id="projects" className="p-4">
      <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-black text-center mt-16">
        Projects
      </h1>
      <div className="max-w-screen-md mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
          {/* E-commerce Website Container */}
          <div className="max-w-full-md mx-auto rounded-xl shadow-md overflow-hidden hover:animate-pulse bg-white">
            {/* Image part */}
            <div className="text-center p-8">
              <img
                src={pipes}
                alt=""
                width={200}
                height={200}
                className="border-2 border-black"
              />
            </div>

            {/* Content part */}
            <div className="p-4">
              <div className="uppercase tracking-wide text-sm font-semibold">
                E-Commerce Website for PVC Pipes
              </div>
              <p className="mt-2">
                Developed an E-commerce web app using MERN Stack
              </p>
              <button
                onClick={() =>
                  redirectToGitHub("https://github.com/Mrudhula06/NS_polymers.git")
                }
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Code
              </button>
            </div>
          </div>

          {/* College Event Container */}
          <div className="max-w-full-md mx-auto rounded-xl shadow-md overflow-hidden hover:animate-pulse bg-white">
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
                College Event Management
              </div>
              <p className="mt-2">
                Designed a College Event Management app with React frontend and
                MySQL database
              </p>
              <button
                onClick={() =>
                  redirectToGitHub(
                    "https://github.com/INIKA-N/agile-projects.git"
                  )
                }
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Code
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
          {/* Online Quiz Container */}
          <div className="max-w-full-md mx-auto rounded-xl shadow-md overflow-hidden hover:animate-pulse bg-white">
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
              <p className="mt-2">
                Developed an Online Quiz app with HTML, CSS, JavaScript frontend
                and MySQL database
              </p>
              <button
                onClick={() =>
                  redirectToGitHub(
                    "https://github.com/Mrudhula06/Online-Quiz.git"
                  )
                }
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Code
              </button>
            </div>
          </div>

          {/* Todo List Container */}
          <div className="max-w-full-md mx-auto rounded-xl shadow-md overflow-hidden hover:animate-pulse bg-white">
            {/* Image part */}
            <div className="text-center p-8">
              <img
                src={todo}
                alt=""
                width={200}
                height={200}
                className="border-2 border-black"
              />
            </div>

            {/* Content part */}
            <div className="p-4">
              <div className="uppercase tracking-wide text-sm font-semibold">
                Todo List
              </div>
              <p className="mt-2">
                Developed a Todo List app using MERN Stack
              </p>
              <button
                onClick={() =>
                  redirectToGitHub("https://github.com/Mrudhula06/Todo_f.e.git")
                }
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Code
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
          {/* Weather App Container */}
          <div className="max-w-full-md mx-auto rounded-xl shadow-md overflow-hidden hover:animate-pulse bg-white">
            {/* Image part */}
            <div className="text-center p-8">
              <img
                src={weather}
                alt=""
                width={200}
                height={200}
                className="border-2 border-black"
              />
            </div>

            {/* Content part */}
            <div className="p-4">
              <div className="uppercase tracking-wide text-sm font-semibold">
                Weather App
              </div>
              <p className="mt-2">
                Developed a Weather app using MERN Stack
              </p>
              <button
                onClick={() =>
                  redirectToGitHub("https://github.com/Mrudhula06/Weather-f.e.git")
                }
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
