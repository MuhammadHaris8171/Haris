import { useState } from 'react';
import './LandingPage3.css'
import * as emailjs from "@emailjs/browser";
import { Toaster, toast } from 'react-hot-toast';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

async function sendContact(formData = {}) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    return Promise.reject(new Error('EmailJS configuration missing'));
  }

  try {
    try { emailjs.init(PUBLIC_KEY); } catch (e) {}
    return emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
  } catch (err) {
    return Promise.reject(err);
  }
}

if (typeof window !== 'undefined' && !window.__sendContact) {
  window.__sendContact = sendContact;
}

function LandingPage3() {
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendContact({ name, email, message });

      toast.success('Message sent successfully');

      setName('');
      setEmail('');
      setMessage('');
      setShowModal(false);
    } catch (err) {
      toast.error('Failed to send message. Try again.');
    }
  };

  return (
    <div>
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="min-h-full bg-gray-200 flex justify-center items-center overflow-hidden landingmain">
        <div className="max-w-5xl mx-auto p-4 pt-6 md:p-6 lg:p-8">
          <div className="flex flex-col items-center mb-12">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24 mb-4 LandingImage1">
              <img src="/Picsart_24-12-25_15-52-50-334.jpg" alt="" />
            </div>
            <h1 className="text-3xl font-bold mb-2 LandingH1 text-center">
              Junior/Intermediate MERN Developer
            </h1>
            <p className="text-lg text-gray-600 LandingP1">
              Welcome to my portfolio!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 Landingdiv1">
              <h2 className="text-2xl font-bold mb-2">About Me</h2>
              <p className="text-lg text-gray-600">
                I'm a junior/intermediate level MERN developer with a passion for building scalable and efficient web applications.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md Landingdiv2">
              <h2 className="text-2xl font-bold mb-2">My Skills</h2>
              <ul>
                <li className="text-lg text-gray-600 mb-2">MongoDB</li>
                <li className="text-lg text-gray-600 mb-2">Express</li>
                <li className="text-lg text-gray-600 mb-2">React</li>
                <li className="text-lg text-gray-600 mb-2">Node.js</li>
                <li className="text-lg text-gray-600 mb-2">MySQL</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded LandingButton1"
              onClick={() => setShowModal(true)}
            >
              Contact Me
            </button>
          </div>

          {showModal && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-10">
              <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
                <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-4">
                  If you'd like to get in touch, please fill out the form below.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-lg text-gray-600 mb-2">Name:</label>
                    <input
                      type="text"
                      className="block w-full p-2 border border-gray-400 rounded-lg"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-lg text-gray-600 mb-2">Email:</label>
                    <input
                      type="email"
                      className="block w-full p-2 border border-gray-400 rounded-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-lg text-gray-600 mb-2">Message:</label>
                    <textarea
                      className="block w-full p-2 border border-gray-400 rounded-lg"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Send
                  </button>
                </form>

                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LandingPage3;
