import React, { useState } from 'react';
import {login} from "../../Features/Login"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch =useDispatch()
  const navigate=useNavigate()

  const notify = () => toast("Logged In successfully 🎉🎊");


  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({email,password}))

    navigate('/')
    notify()
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form 
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm" 
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600 mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
