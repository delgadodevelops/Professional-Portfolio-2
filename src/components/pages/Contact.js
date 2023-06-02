import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from 'react-icons/ai';
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

      // Display success alert
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Email sending failed:', error);

      // Display error alert
      alert('Email sending failed, please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-3xl w-full p-6 bg-custom-bluee rounded-lg shadow-lg">
        <h1 className="text-custom-orange bg-custom-bluee text-2xl font-bold mb-4">Contact Page</h1>
        <form onSubmit={handleSubmit} className="bg-custom-bluee">
          <div className="bg-custom-bluee mb-4">
            <label htmlFor="name" className="bg-custom-bluee block text-white font-bold mb-2">
              <AiOutlineUser className="bg-custom-bluee inline-block mr-2 mb-1" />
              Name
            </label>
            <input
              type="text"
              id="name"
              className="text-white bg-custom-bluee border border-custom-orange rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="bg-custom-bluee mb-4">
            <label htmlFor="email" className="bg-custom-bluee block text-white font-bold mb-2">
              <AiOutlineMail className="bg-custom-bluee inline-block mr-2 mb-1" />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="text-white bg-custom-bluee border border-custom-orange rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="bg-custom-bluee mb-4">
            <label htmlFor="message" className="bg-custom-bluee block text-white font-bold mb-2">
              <AiOutlineMessage className="bg-custom-bluee inline-block mr-2 mb-1" />
              Message
            </label>
            <textarea
              id="message"
              className="text-white bg-custom-bluee border border-custom-orange rounded-md p-2 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-custom-orange hover:opacity-50 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
