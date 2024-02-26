import React from "react";
import { ThreeDCardDemo } from "./3dcard";
import CalculateExperience from "../utils/calculateExperience";
const BigCircleCard = () => {
  return (
    <div className="px-4">
      <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="max-w-7xl w-full mx-auto min-h-screen pt-20 h-full">
          <div className="lg:flex gap-20">
            <div>
              <ThreeDCardDemo
                name="BigCircle"
                description="Innovating Excellence, Empowering India's Software Future"
                image="/bigcircle.png"
              />
            </div>
            <div className="py-10 ">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  <span className="block mb-2 text-2xl font-bold tracking-tight leading-8 text-gray-900 dark:text-gray-50 sm:text-4xl">
                    BigCircle
                  </span>
                </h2>
                <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-300">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 20 20"
                    className="w-5 h-5"
                    role="presentation"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span role="link" tabIndex={0}>
                    <span>
                      <a
                        href="https://www.bigcircle.tech/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="font-medium"
                        aria-label=""
                      >
                        bigcircle.tech
                      </a>
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-base font-semibold tracking-wide text-indigo-600 uppercase dark:text-yellow-300">
                  Jul 2022 - Now
                </div>
                <div className="text-base text-indigo-600 font-medium dark:text-yellow-300">
                  - {CalculateExperience("Jul 2022")}
                </div>
              </div>
              <div className="py-6">
                <p className="text-gray-600 dark:text-gray-200">
                  <span role="link" tabIndex={0}>
                    <span>
                      <a
                        href="https://www.bigcircle.tech/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="font-semibold underline dark:text-white"
                        aria-label=""
                      >
                        Big Circle{" "}
                      </a>
                    </span>
                  </span>
                  Innovating Excellence, Empowering India's Software Future
                </p>

                <div className="py-4">
                  <a
                    target=""
                    className="block justify-between items-center w-full font-semibold text-indigo-500 no-underline rounded-l rounded-r-full dark:text-white sm:text-base lg:text-sm xl:text-base hover:text-indigo-700"
                    aria-label=""
                    href="/work/rax#product-architect"
                  >
                    <span className="inline-flex items-center px-3 py-0.5 rounded bg-indigo-600 text-white text-sm font-medium select-none">
                      Software Developer Engineer
                    </span>
                  </a>
                </div>
                <div className="prose prose-lg font-normal dark:text-indigo-100">
                  <p>
                    As a SDE at BigCircle, I Worked on Diffrent client project
                    like
                    <span className="font-medium mx-1 px-0.5 rounded dark:bg-opacity-10 bg-[#FFEBEF] text-[#113537] dark:text-[#D5FFD9]">
                      BigCircle, blueland, missionsustainability , Timeless
                      Traditions by Harsiddhi Chavda (TTHC) , CATCH Foundation ,
                      shuddhi
                    </span>
                    improved visibility by
                    <span className=" mx-1 px-0.5 rounded dark:bg-opacity-10 bg-[#FEE2E2] dark:text-blue-400 text-lg font-semibold">
                      creating clean and clear Ui
                    </span>
                    using different Advanced technologies .I spearheaded various
                    projects aimed at enhancing product functionality and user
                    experience
                  </p>
                  <p className="py-4">
                    In my capacity
                    <span className="font-medium mx-1 px-0.5 rounded dark:bg-opacity-10 bg-[#EFF6FF] text-blue-700 dark:text-yellow-400 ml-0">
                      as a Full Stack Developer ,
                    </span>
                    I continually strived for innovation and excellence, driving
                    forward BigCircle's technological capabilities and fostering
                    a culture of continuous improvement. My multifaceted skill
                    set, encompassing both front-end and back-end development,
                    allowed me to tackle complex challenges with agility and
                    creativity, delivering solutions that exceeded expectations
                    and propelled the company towards its strategic objectives.
                  </p>
                  <div className="">
                    <a
                      target=""
                      className="inline-flex items-center text-base font-medium text-indigo-600 dark:text-lime-300 hover:space-x-8"
                      aria-label=""
                      href="/work/bigcircle"
                    >
                      Learn more about my work at BigCircle
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 20 20"
                        className="mx-1 w-5 h-5"
                        aria-hidden="true"
                        role="presentation"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCircleCard;
