"use client"; // Add this line to make it a Client Component

import React from 'react';
import { useRouter, useParams } from 'next/navigation'; 
import questionData from '../../../data/questions'; 

const Quiz = () => {
  const router = useRouter();
  const { packId } = useParams();

  const pack = packId ? questionData[packId] : null;

  const handleNavigation = (questionType) => {
    router.push(`/question?packId=${packId}&questionIndex=0&type=${questionType}`);
  };
  const handleBack = () => {
    router.push('/main');
  };

  if (!pack) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">{pack.packName}</h1>
      
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => handleNavigation('main')}
      >
        Soal Wajib
      </button>
      
      <button
        className="mt-4 p-2 bg-green-500 text-white rounded"
        onClick={() => handleNavigation('contention')}
      >
        Soal Rebutan
      </button>

      <button
        className="mt-4 p-2 bg-red-500 text-white rounded"
        onClick={() => handleNavigation('additional')}
      >
        Soal Tambahan
      </button>
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={handleBack}
      >
        Back
      </button>
    </div>
  );
};

export default Quiz;
