"use client"; // Ensure this is a client component

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Button from '@/components/Button';

const TimerPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const timeLimit = parseInt(searchParams.get('time'), 10) || 0; // Ensure it's a number
  const packId = searchParams.get('packId');
  const questionType = searchParams.get('type');
  const questionIndex = parseInt(searchParams.get('questionIndex'), 10) || 0; // Get the current question index
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    if (timeLeft <= 0) {
      // handleNextQuestion(); // Automatically move to the next question when time runs out
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId); // Cleanup on component unmount
  }, [timeLeft, router, packId, questionIndex]);

  const handleNextQuestion = () => {
    // Navigate to the next question
    router.push(`/question?packId=${packId}&questionIndex=${questionIndex + 1}&type=${questionType}`);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-200 p-4">
      <h1 className="text-2xl font-bold mt-4 text-slate-700">Timer</h1>
      <div className='mt-12 w-full flex flex-col items-center'>
        <TimerDisplay timeLeft={timeLeft} />
        <div>
          <ActionButtons onBack={handleBack} onNextQuestion={handleNextQuestion} />
        </div>
      </div>
    </div>
  );
};

// Component to display the timer
const TimerDisplay = ({ timeLeft }) => (
<div className="py-8 px-16 bg-slate-100 rounded-lg shadow-md mb-4 text-center text-slate-700">
    <p className='text-xl mb-4'>Sisa Waktu</p>
    <p className='text-8xl font-bold'>{timeLeft}s</p>
  </div>
);

// Component for action buttons
const ActionButtons = ({ onBack, onNextQuestion }) => (
  <>
    <Button
      variant='outlinedbutton'
      onClick={onBack}
      className='w-64 mt-4 mr-4'
    >
      Kembali
    </Button>
    <Button
      variant='mainbutton'
      onClick={onNextQuestion}
      className='w-64 mt-8 ml-4'
    >
      Soal Selanjutnya
    </Button>
  </>
);

export default TimerPage;
