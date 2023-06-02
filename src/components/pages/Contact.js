import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare the email parameters
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message
      };

      // Send the email using EmailJS
      const response = await emailjs.send('service_4yiqpv5', 'template_7p2deo2', templateParams, 'EfGTdTFgjfpRrAh7I');
      console.log('Email sent successfully!', response.status, response.text);

      // Clear form fields after successful submission
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Email sending failed:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="bg-white text-2xl font-bold mb-4">Contact Page</h1>
        <form onSubmit={handleSubmit} className="bg-white">
          <div className="bg-white mb-4">
            <label htmlFor="name" className="bg-white block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-white border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="bg-white mb-4">
            <label htmlFor="email" className="bg-white block text-gray-700 font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="bg-white border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="bg-white mb-4">
            <label htmlFor="message" className="bg-white block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="bg-white border border-gray-300 rounded-md p-2 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
