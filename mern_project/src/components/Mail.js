import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {
  const [firstname, setfirstname] = useState('');
  const [surname, setsurname] = useState('');
  const [email, setEmail] = useState('');
  const [sub, setsub] = useState('');
  const [msg, setmsg] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
 
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://aakash-s-eventify.onrender.com/send-email', {firstname,surname,email,sub,msg});
      console.log('Email sent successfully');
      setIsEmailSent(true);
      setfirstname('');
      setsurname('');
      setEmail('');
      setsub('');
      setmsg('');
      
    } catch (error) {
      console.error('Error sending email:', error);
      console.log('Error sending email');
    }
  };

  const handleChatButtonClick = () => {
    window.location.href = 'https://aakasheventifyapp.streamlit.app';
  };
  

  return (
    <div>
      <div className='text-center mt-5 text-3xl text-white'>
        Mail Us
      </div>

      <div className="min-h-screen py-10">
        <div className="container mx-auto">
          <div className="w-full sm:w-10/12 md:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="p-8 bg-zinc-800">
              <h2 className="text-3xl text-white mb-4">Contact</h2>
              <p className="mb-4 text-white">
                Mail us for further queries
              </p>
              <form onSubmit={handleSubmit} >
                <div className="grid grid-cols-2 gap-5">
                  <input type="text" name="firstName" placeholder="Firstname" className="border rounded w-full
                  text-white  bg-neutral-800 border-gray-400 py-1 px-2"
                   value={firstname} onChange={(e) => setfirstname(e.target.value)} />

                  <input type="text" name="lastName" placeholder="Surname" className="border rounded w-full 
                  text-white  bg-neutral-800 border-gray-400 py-1 px-2"
                    value={surname}  onChange={(e) => setsurname(e.target.value)} />
                </div>

                <div className="mt-5">
                  <input type="text" name="email" placeholder="Email" className="border rounded w-full
                  text-white   bg-neutral-800 bg-neutral-800 border-gray-400 py-1 px-2 w-full"
                   value={email}  onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mt-5">
                  <input type="text" name="subject" placeholder="Sub" className="border rounded w-full text-white  bg-neutral-800 border-gray-400 py-1 px-2 w-full"
                      value={sub} onChange={(e) => setsub(e.target.value)} />
                </div>

                <div className="mt-5">
                  <textarea name="message" placeholder="Type your message" className="border rounded w-full
                  text-white   bg-neutral-800 border-gray-400 py-1 px-2 w-full h-32"
                     value={msg} onChange={(e) => setmsg(e.target.value)}></textarea>
                </div>
                <div className="mt-5">
                  <button type="submit" className="w-full bg-purple-500 py-3 text-center text-white">Send Message</button>
                </div>
                <div className="mt-5 flex flex-col items-center sm:flex-row sm:items-center">
                  <span className='text-lg text-white  sm:text-left px-4 sm:px-0 mb-2 sm:mb-0 mr-0 sm:mr-4'>
                    Had a chat with our BOT?
                  </span>
                  <button id='more info' onClick={handleChatButtonClick} className="mt-3 sm:mt-0 bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    CHAT ME
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
