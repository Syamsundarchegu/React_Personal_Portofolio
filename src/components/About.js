import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl">
          Hello! My name is Syamsundar Chegu, and I hail from Lingasamudram. I
          graduated in 2023 with a degree in Electronics and Communication
          Engineering. Prior to that, I completed my intermediate education at
          Narayana Junior College and schooling at Sri Sai Srinivasa High
          School. After graduation, I pursued an 8-month Machine Learning
          Bootcamp at iNeuron, Bangalore, where I gained hands-on experience in
          machine learning and its applications. As part of the program, I
          undertook an unpaid internship, during which I developed and deployed
          an end-to-end machine learning project on Render. For this, I received
          an internship offer letter and an experience letter from iNeuron.
          Beyond machine learning, I expanded my expertise into Deep Learning,
          Natural Language Processing (NLP), and full-stack development. I
          developed a React Application (RAG), further enhancing my skills in
          frontend frameworks like React, Tailwind CSS, and backend technologies
          such as Express.js and MongoDB. Using these tools, I built a personal
          portfolio to showcase my skills and projects effectively. I am
          passionate about leveraging technology to build innovative solutions
          and am excited about the opportunities to grow and contribute further
          in the tech industry.
        </p>
      </div>
    </div>
  );
};

export default About;
