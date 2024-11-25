import React from "react";
import weatherimage from "../assests/reactWeather.jpg";
import blogimage from "../assests/blog.png";
import omifood from "../assests/omnifood.png";
import credit from "../assests/creditcard.png";
import mliris from "../assests/mliris.png";
import ast from "../assests/ats.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: weatherimage,
      href: "https://github.com/Syamsundarchegu/syamsundarchegu-zeotap-weather-project-intern",
    },
    {
      id: 2,
      src: blogimage,
      href: "https://github.com/Syamsundarchegu/blog-post",
    },
    {
      id: 3,
      src: omifood,
      href: "https://github.com/Syamsundarchegu/Ominfood",
    },
    {
      id: 4,
      src: credit,
      href: "https://github.com/Syamsundarchegu/ineuron_intern_project",
    },
    {
      id: 5,
      src: mliris,
      href: "https://github.com/Syamsundarchegu/ml-iris-project",
    },
    {
      id: 6,
      src: ast,
      href: "https://github.com/Syamsundarchegu/syamsundarchegu-zeotap-ast-project",
    },
  ];

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-500 w-full text-white h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pd-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5">
          {portfolios.map(({ id, src, href }) => (
            <div
              key={id}
              className="shadow-lg shadow-gray-600 rounded-lg flex flex-col items-center  gap-1 h-fit"
            >
              <img
                src={src}
                className="rounded-md duration-200 hover:scale-105 object-contain"
                alt=""
              />
              <div className="">
                <a
                  className="duration-200 hover:scale-105"
                  target="_blank"
                  href={href}
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
