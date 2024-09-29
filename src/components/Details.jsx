// Details.jsx
import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const Details = () => {
  return (
    <div>
      {/* First container */}
      <div id="details" className="p-6 mt-20 rounded-xl overflow-visible mx-auto max-w-5xl">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-black text-center mt-16">
          Details
        </h1>
        <section className="flex flex-col lg:flex-row p-4 lg:p-10 space-y-4 lg:space-y-10 rounded-xl bg-white">
          <div className='w-full'>
            <div className='p-3 text-lg overflow-visible'>
              <div className='scrolling-container md:text-lg tabs_text sm:text-xs'>
                <div className='flex justify-center items max-h-fit'>
                  <ul className='list-disc'>
                    <div className='md:grid md:grid-cols-[5fr_1fr]'>
                      <li className="square-bullet">
                        <span className='font-bold'>Kongu Engineering College, Erode</span>
                        <p>Secured CGPA - 8.15(till 5th sem)</p>
                        <div className='time_period'>
                          <p className='flex items-center rounded-full w-fit px-4'>2021-2025</p>
                        </div>
                      </li>
                    </div>
                    <br />
                    <div className='md:grid md:grid-cols-[5fr_1fr]'>
                      <li className="square-bullet">
                        <span className='font-bold'>Vidhya Vikashni Matric Higher Secondary School, Tiruppur</span>
                        <p>Higher Secondary School - 90.18%</p>
                        <div className='time_period ml-2'>
                          <p className='flex item-center rounded-full w-fit px-4'>2020-2021</p>
                        </div>
                      </li>
                    </div>
                    <br />
                    <div className='md:grid md:grid-cols-[5fr_1fr]'>
                      <li className="square-bullet">
                        <span className='font-bold'>Vidhya Vikashni Matriculation Higher Secondary School, Tiruppur</span>
                        <p>Secondary School - 88.4%</p>
                        <div className='time_period ml-4'>
                          <p className='flex item-center rounded-full w-fit px-4'>2018-2019</p>
                        </div>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Skills container */}
      <div id="skills" className="p-6 mt-4 rounded-xl overflow-visible mx-auto max-w-5xl">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-black text-center">
          Skills
        </h1>
        <div className='p-3 text-lg overflow-hidden rounded-xl bg-white'>
          <div className='scrolling-container md:text-lg tabs_text sm:text-xs'>
            <ul className='ml-2'>
              <li className="mb-2">
                <span className='font-bold'>Java Programming</span>
                <div className='flex items-center'>
                  <div className='w-full'>
                    <LinearProgress color="primary" variant="determinate" value={75} />
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <span className='font-bold'>HTML, CSS, JavaScript</span>
                <div className='flex items-center'>
                  <div className='w-full'>
                    <LinearProgress color="primary" variant="determinate" value={75} />
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <span className='font-bold'>React</span>
                <div className='flex items-center'>
                  <div className='w-full'>
                    <LinearProgress color="primary" variant="determinate" value={80} />
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <span className='font-bold'>Node.js, Express.js</span>
                <div className='flex items-center'>
                  <div className='w-full'>
                    <LinearProgress color="primary" variant="determinate" value={60} />
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <span className='font-bold'>MongoDB</span>
                <div className='flex items-center'>
                  <div className='w-full'>
                    <LinearProgress color="primary" variant="determinate" value={50} />
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <span className='font-bold'>Figma</span>
                <div className='flex items-center'>
                  <div className='w-full'>
                    <LinearProgress color="primary" variant="determinate" value={60} />
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <span className='font-bold'>C Programming</span>
                <div className='flex items-center'>
                  <div className='w-full'>
                    <LinearProgress color="primary" variant="determinate" value={50} />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
