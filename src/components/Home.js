import React from "react";
import HeroImage from "../assests/file (1).jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div
      name="home"
      className="h-full w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20 pb-10"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-4">
        <div className="flex flex-col justify-center md:w-1/2 w-[95%]">
          <ReactTyped
            className="text-white text-2xl lg:text-5xl font-semibold "
            strings={[
              "ML Engineer",
              "Full Stack Developer",
              "NlP Engineer",
              "Backend Developer",
            ]}
            typeSpeed={80}
            backSpeed={40}
            loop
          />
          <p className="text-gray-500 py-4 max-w-md lg:text-lg text-sm">
            I'm a fresh graduate of having good knowledge on machine learning,
            natural language processing, react js , node js , tailwind css and
            MongoDB
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-3 py-2 md:px-6 md:py-3 mt-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center md:w-1/2 w-full ">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl w-[45%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
