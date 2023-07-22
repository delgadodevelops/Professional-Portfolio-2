import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isToastVisible, setToastVisibility] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'message') setMessage(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message
      };

      const response = await emailjs.send('service_iyf7d3r', 'template_7p2deo2', templateParams, 'EfGTdTFgjfpRrAh7I');
      console.log('Email sent successfully!', response.status, response.text);

      setName('');
      setEmail('');
      setMessage('');

      setToastVisibility(true); // Show the success toast

      setTimeout(() => {
        setToastVisibility(false);
      }, 3000); 

    } catch (error) {
      console.error('Email sending failed:', error);
      setToastVisibility(false); // Hide the success toast if it was visible before
      // Optionally, you can also show an error toast here if you have one available
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-full max-w-7xl">
        <div className="w-3/5 pr-40">
          <img src="./images/contact-photo.png" alt="Contact Photo" className="max-w-full h-auto" />
        </div>
        <div className="w-2/5 p-6 bg-custom-blue rounded-lg ">
          <h1 className="text-custom-orange text-4xl font-bold mb-4">Contact Page //</h1>
          <form onSubmit={handleSubmit} className="bg-custom-blue">
            <p className="text-white mb-8">Want to get in touch with me? Please fill out the form below and I will get back to you as soon as I can. Thank you. </p>
            <div className="bg-custom-blue mb-4">
              <label htmlFor="name" className="block text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="text-white bg-custom-blue border border-custom-orange rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="bg-custom-blue mb-4">
              <label htmlFor="email" className="block text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="text-white bg-custom-blue border border-custom-orange rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="bg-custom-blue mb-4">
              <label htmlFor="message" className="block text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="text-white bg-custom-blue border border-custom-orange rounded-md p-2 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
                name="message"
                value={message}
                onChange={handleChange}
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full max-w-xs bg-custom-orange hover:opacity-50 text-white py-2 px-4 mb-5 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </form>
          {isToastVisible && (
            <div id="toast-simple" className="flex items-center w-full max-w-xs p-4 space-x-4   divide-x divide-gray-200 rounded-lg shadow text-gray-400  space-x bg-custom-bluee" role="alert">
              <svg className="bg-custom-bluee w-5 h-5 text-green-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
              </svg>
              <div className="bg-custom-bluee pl-4 text-sm font-normal">Message sent successfully.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

