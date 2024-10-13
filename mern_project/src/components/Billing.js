import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ThreeBoxes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate=useNavigate()
  const handlereview=()=>
    {
        
           navigate('/review')
    }
  

  const handlePayment = async (amount) => {
    try {
      // Create order on backend
      const response = await fetch('https://aakash-s-eventify.onrender.com/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          currency: 'INR',
          receipt: 'receipt_order_74394', // you can customize this
        }),
      });

      const data = await response.json();

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        amount: data.amount,
        currency: data.currency,
        name: 'Your Company Name',
        description: 'Test Transaction',
        image: 'https://example.com/your_logo',
        order_id: data.id,
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);

          // Verify payment on backend
          fetch('https://aakash-s-eventify.onrender.com/verify-payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          })
            .then(response => response.json())
            .then(data => {
              if (data.status === 'success') {
                setIsModalOpen(true); // Open the modal on successful payment
              } else {
                alert('Payment Verification Failed');
              }
            });
        },
        prefill: {
          name: 'Your Name',
          email: 'email@example.com',
          contact: '9999999999',
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();

    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <div>
      <div className='text-center mt-5 text-3xl text-white'>
        BILLING
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {/* Box 1 */}
        <div className="bg-transparent border border-purple-500 p-4 rounded-lg ">
          <p className="text-lg font-bold mb-2 flex justify-center text-white inline-block bg-purple-700">Birthday</p>
          <ul className="text-lg text-gray-700">
            <li className="flex items-center text-white mb-1"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Full Services</li>
            <li className="flex items-center text-white mb-1"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Photography</li>
            <li className="flex items-center text-white mb-1"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Dj and Music</li>
            <li className="flex items-center text-white mb-1"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Foods and Drinks</li>
            <li className="flex items-center text-white mb-1"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Decoration</li>
            <li className="flex items-center text-white mb-1"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Invitation card</li>
          </ul>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-red-700">$499.24</span>
            <button onClick={() => handlePayment(499.24)} className="text-xl font-bold text-white bg-green-600 py-2 px-4 rounded">Bill Now</button>
          </div>
        </div>

        {/* Box 2 */}
        <div className="bg-transparent border border-purple-500 p-4 rounded-lg">
          <p className="text-lg font-bold mb-2 flex justify-center text-white inline-block bg-purple-700">Marriage</p>
          <ul className="text-lg text-gray-700">
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Full Services</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Photography</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Dj and Music</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Buffet</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Decoration</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faTimes} className="text-red-500 mr-2" /> Drinks</li>
          </ul>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-red-700">$699.74</span>
            <button onClick={() => handlePayment(699.74)}  className="text-xl font-bold text-white bg-green-600 py-2 px-4 rounded">Bill Now</button>
          </div>
        </div>

        {/* Box 3 */}
        <div className="bg-transparent border border-purple-500 p-4 rounded-lg">
          <p className="text-lg font-bold mb-2 flex justify-center text-white inline-block bg-purple-700">Baby Shower</p>
          <ul className="text-lg text-gray-700">
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Full Services</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Photography</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Cradle</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Foods</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Decoration</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Invitation card</li>
          </ul>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-red-700">$299.99</span>
            <button onClick={() => handlePayment(299.99)}className="text-xl font-bold text-white bg-green-600 py-2 px-4 rounded">Bill Now</button>
          </div>
        </div>

        {/* Box 4 */}
        <div className="bg-transparent border border-purple-500 p-4 rounded-lg">
          <p className="text-lg font-bold mb-2 flex justify-center text-white inline-block bg-purple-700">Reception</p>
          <ul className="text-lg text-gray-700">
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Full Services</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Photography</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Dj and Music</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Foods and Drinks</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Decoration</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Invitation card</li>
          </ul>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-red-700">$599.00</span>
            <button onClick={() => handlePayment(599.00)} className="text-xl font-bold text-white bg-green-600 py-2 px-4 rounded">Bill Now</button>
          </div>
        </div>

        {/* Box 5 */}
        <div className="bg-transparent border border-purple-500 p-4 rounded-lg">
          <p className="text-lg font-bold mb-2 flex justify-center text-white inline-block bg-purple-700">Concert</p>
          <ul className="text-lg text-gray-700">
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Venue</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Photography</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Seats</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faTimes} className="text-red-500 mr-2" /> Foods and Drinks</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Lightning</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Instruments</li>
          </ul>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-red-700">$899.14</span>
            <button onClick={() => handlePayment(899.14)} className="text-xl font-bold text-white bg-green-600 py-2 px-4 rounded">Bill Now</button>
          </div>
        </div>

        {/* Box 6 */}
        <div className="bg-transparent border border-purple-500 p-4 rounded-lg">
          <p className="text-lg font-bold mb-2 flex justify-center text-white inline-block bg-purple-700">Funeral</p>
          <ul className="text-lg text-gray-700">
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Dance</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Free Transport</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Mourning Music</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Funeral choir</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faTimes} className="text-red-500 mr-2" /> Drinks</li>
            <li className="flex items-center mb-1 text-white"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Coffin</li>
          </ul>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-red-700">$589.21</span>
            <button onClick={() => handlePayment(589.21)} className="text-xl font-bold text-white bg-green-600 py-2 px-4 rounded">Bill Now</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-center">Come Again</h2>
            <p className="mb-4 text-center">Would you like to write a review?</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handlereview}
                className="text-white bg-green-600 py-2 px-4 rounded"
              >
                Write a Review
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white bg-gray-600 py-2 px-4 rounded"
              >
                Skip
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreeBoxes;
