import emailjs from "emailjs-com";
import React, { useState } from "react";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

    } catch (error) {
      console.error("Email sending failed:", error);
    }
  };

  return (
    <section className="bg-custom-blue">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-custom-orange">Contact Me</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Want to get in touch with me? Please fill out the form below.
              Thank you.</p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="shadow-sm bg-custom-bluee border border-custom-orange text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@delgadodevelops.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={name}
              onChange={handleChange}
              className="shadow-sm bg-custom-bluee border border-custom-orange text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Let me know why your reaching out."
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400">Your message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleChange}
              rows="6"
              className="shadow-sm bg-custom-bluee border border-custom-orange text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className=" py-3 px-5 text-sm font-medium text-center text-white rounded-lg  sm:w-fit hover:bg-custom-orange ring-2 ring-custom-orange transition ease-in-out duration-300"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
