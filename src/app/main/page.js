// src/app/questions/page.tsx
import React from 'react';
import Link from 'next/link';
import questionData from '../../data/questions'; // Adjust the path as needed

const MainMenu = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-8">Questions</h1>
      {/* Render Each Pack */}
      {questionData.map((pack, index) => (
        <div key={index} className="mb-10 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">{pack.packName}</h2>
          <Link href={`/quiz/${index}`}>
            <button className="p-2 bg-blue-500 text-white rounded">
              Start Quiz
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MainMenu;
