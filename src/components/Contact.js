import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [details, setDetails] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send("service_1ucj7ms", "template_gn1tso5", details, "YgRlGfr5byoi2MjAE")
      .then(
        () => {
          console.log("SUCCESS");
        },
        (error) => {
          console.log("FAILED", error.text);
        }
      );
    setDetails({ name: "", email: "", message: "" });
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form onSubmit={sendEmail} className=" flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={handleChange}
              value={details.name}
            />
            <input
              type="text"
              name="email"
              value={details.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              value={details.message}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <input
              type="submit"
              value="Let's talk"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
