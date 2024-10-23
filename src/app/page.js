// src/app/page.tsx
import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Logo Section */}
      <div className="mb-8">
        <img
          src="/favicon.ico" // Replace this with your logo image path
          alt="Logo"
          className="w-32 h-32" // Adjust the size as needed
        />
      </div>
      {/* Start Button */}
      <Link href="/main">
        <button className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300">
          Start
        </button>
      </Link>
    </div>
  );
};

export default Home;
