import React from "react";

const education = [
  {
    id: 1,
    school_name: "Pragati Engineering College",
    degree: "Bachelor Of Technology",
    specilization: "Electronics And Communication Engineering",
    year_of_passing: 2023,
    cgpa: 7.1,
  },
  {
    id: 2,
    school_name: "Narayana Junior College",
    degree: "Intermediate",
    specilization: "MPC",
    year_of_passing: 2019,
    cgpa: 9.38,
  },
  {
    id: 3,
    school_name: "Sri Sai Srinivas High School",
    degree: "10th",
    specilization: "Science (Physics, Chemistry, Biology/Mathematics)",
    year_of_passing: 2017,
    cgpa: 8.5,
  },
];

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white pb-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Education
          </p>
        </div>
        <div className="display flex md:flex-row md:justify-between flex-col pt-4 md:gap-0 gap-5">
          {education.map(
            ({
              id,
              school_name,
              degree,
              specilization,
              year_of_passing,
              cgpa,
            }) => (
              <div
                key={id}
                className="flex flex-col items-start gap-2 shadow-gray-400 shadow-lg  p-4 hover:scale-105 duration-300 rounded-md"
              >
                <p className="text-lg font-bold">{school_name}</p>
                <p className="text-sm">{degree}</p>
                <p className="text-sm">{specilization}</p>
                <p className="text-sm">{year_of_passing}</p>
                <p className="text-sm">CGPA: {cgpa}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
