import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// Import CSS file for styling

function SignUpForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/registration', { name, email, password });
            console.log(response);
            navigate('/home');
        } catch (err) {
            console.error(err);
            setError('Failed to sign up. Please try again.');
        }
    };

    return (
        <div className="signup-container bg-cover bg-center h-screen flex justify-center items-center">
            <div className="font-text text-glass fixed top-0 left-0 p-4 text-stroke-white
             text-2xl lg:text-5xl sm:text-lg md:text-5xl">
  Aakash's EVENT Planner
</div> 
            <div className="max-w-md  mt-5 mx-auto bg-white bg-opacity-40 p-6 rounded-lg shadow-md "> {/* Apply background opacity here */}
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit} >
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Username:</label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Sign Up</button>
                </form>
                <p className="mt-4 text-center">
                    Already have an account? <Link to='/login' className="text-blue-500 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default SignUpForm;
