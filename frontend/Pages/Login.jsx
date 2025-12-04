import React from 'react';

export default function Login({ close }) {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white p-6 rounded-lg w-[420px] shadow-lg relative">
        
        <button
          className="absolute top-3 right-3 text-xl hover:bg-gray-100 w-8 h-8 rounded-full"
          onClick={close}
        >
          ✕
        </button>
        
        
        <h2 className="text-center text-lg font-semibold mt-4">
          India's #1 Online Resale Platform
        </h2>
        
        
        <div className="flex items-center mt-4 border rounded-lg px-3 py-2">
          <span className="text-gray-600 mr-2">+91</span>
          <input
            type="text"
            placeholder="Mobile Number*"
            className="flex-1 outline-none"
          />
        </div>
        
       
        <button className="bg-yellow-400 w-full mt-4 py-2 rounded-lg font-semibold hover:bg-yellow-500">
          Login
        </button>
      </div>
    </div>
  );
}