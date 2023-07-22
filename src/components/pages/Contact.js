import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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

      alert('Email sent successfully!');
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Email sending failed, please try again.');
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
            <p className="text-white mb-8">Want to get in touch with me? Please fill out the form below and i will get back to you as soon as i can. Thank you. </p>
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
                placeholder="Type your message here..." // Added placeholder attribute
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-custom-orange hover:opacity-50 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

