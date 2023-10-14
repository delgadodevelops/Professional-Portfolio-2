import emailjs from "emailjs-com";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isToastVisible, setToastVisibility] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "message") setMessage(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      const response = await emailjs.send(
        "service_iyf7d3r",
        "template_7p2deo2",
        templateParams,
        "EfGTdTFgjfpRrAh7I"
      );
      console.log("Email sent successfully!", response.status, response.text);

      setName("");
      setEmail("");
      setMessage("");

      setToastVisibility(true); // Show the success toast

      setTimeout(() => {
        setToastVisibility(false);
      }, 3000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setToastVisibility(false); // Hide the success toast if it was visible before
      // Optionally, you can also show an error toast here if you have one available
    }
  };

  return (
    <div className="bg-gradient-to-b from-custom-blue to-custom-bluee min-h-screen flex flex-col justify-center items-center py-5">
      <div className="p-5 m-5">
        {/* Contact Photo */}
        <div className="flex justify-center items-center">
          <img
            src="./images/contact-photo.png"
            alt="Portrait shot"
            className="w-56 h-auto"
          />
        </div>
        {/* Contact Form */}
        <div className="">
          <h1 className="text-custom-orange text-3xl text-center font-bold px-8 pt-6 mb-2">
            Contact Me
          </h1>
          <form onSubmit={handleSubmit} className=" pb-10">
            <p className="mb-6 text-center text-white  ">
              Want to get in touch with me? Please fill out the form below.
              Thank you.
            </p>
            <div className="mb-2">
              <label htmlFor="name" className="block text-white  mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className=" bg-custom-blue rounded w-full py-2 px-3 text-white  focus:outline-none focus:shadow-outline"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className=" bg-custom-blue  rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="message" className="block text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                className=" bg-custom-blue rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                name="message"
                value={message}
                onChange={handleChange}
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="group relative bg-custom-blue  hover:bg-orange-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline overflow-hidden"
            >
              <div className="absolute inset-0 w-2 bg-amber-400 transition-all duration-250 ease-out group-hover:w-full"></div>
              <span className="bg-transparent relative group-hover:text-white">
                Send Message
              </span>
            </button>
          </form>
          {isToastVisible && (
            <div className=" mx-auto px-6 md:flex items-center">
              <div className="bg-green-500 text-white rounded-lg shadow-md flex items-center px-4 py-4 w-full">
                <svg
                  className="bg-transparent w-6 h-6 mr-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 "
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="bg-transparent flex-1">
                  Message sent successfully.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
