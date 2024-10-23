"use client"; // Add this line to make it a Client Component

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import questionData from '../../../data/questions';
import Button from '@/components/Button';

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200">
      <div className="w-80 flex flex-col justify-between p-6 bg-slate-100 rounded-md shadow-md text-center">
        <h1 className="text-2xl text-slate-700 mb-4">Paket</h1>
        <h1 className="text-8xl text-slate-700 font-semibold mb-8">{pack.packName}</h1>
        <Button
          variant='mainbutton'
          onClick={() => handleNavigation('main')}
          className='w-full mb-4'
        >
          Soal Wajib
        </Button>
        <Button
          variant='mainbutton'
          onClick={() => handleNavigation('contention')}
          className='w-full mb-4'
        >
          Soal Rebutan
        </Button>
        <Button
          variant='mainbutton'
          onClick={() => handleNavigation('additional')}
          className='w-full'
        >
          Soal Tambahan
        </Button>
      </div>
      <Button
        variant='outlinedbutton'
        onClick={handleBack}
        className='px-16'
      >
        Kembali
      </Button>
    </div>
  );
};

export default Quiz;