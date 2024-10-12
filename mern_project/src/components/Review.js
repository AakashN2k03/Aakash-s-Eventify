import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewBox = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [newFeedback, setNewFeedback] = useState('');

  // Function to fetch existing feedbacks from backend
  const fetchFeedback = async () => {
    try {
      const response = await axios.get('http://localhost:3000/feedback');
      setFeedbackList(response.data);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  // Fetch feedback on component mount
  useEffect(() => {
    fetchFeedback();
  }, []);

  // Function to handle submitting new feedback
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/feedback', { message: newFeedback });
      console.log('Feedback saved:', response.data);
      setNewFeedback(''); // Clear input field after submission
      fetchFeedback(); // Refresh feedback list after submission
     // alert('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      //alert('Failed to submit feedback. Please try again later.');
    }
  };

  // JSX rendering of feedback list with space and line separator
  const renderFeedbackList = () => {
    return feedbackList.map((item, index) => (
      <div key={item.id} className="mb-4">
        <p className="text-white">{item.message}</p>
        {index !== feedbackList.length - 1 && <hr className="review-divider my-4" />}
      </div>
    ));
  };

  return (
    <div className='review'>
      <div className='text-center text-3xl text-white mb-5'>
        REVIEWS
      </div>
      <div className="flex justify-center items-center p-4">
        <div className="w-full max-w-md">
          <div
            className="w-full h-96 p-4 border border-gray-300 bg-zinc-800 text-white rounded-lg resize-none 
            overflow-y-scroll
            focus:outline-none focus:ring-2 focus:ring-white"
          >
            {renderFeedbackList()}
          </div>
          <input
            type="text"
            className="w-full mt-4 p-2 border border-gray-300 bg-zinc-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Enter your feedback here..."
            value={newFeedback}
            onChange={(e) => setNewFeedback(e.target.value)}
          />
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={handleSubmit}
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;
