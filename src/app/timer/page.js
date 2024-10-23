// src/app/timer/page.js
"use client"; // Ensure this is a client component

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

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
      // If time is up, navigate back to the quiz page with the next question
      // router.push(`/quiz/${packId}?nextIndex=${questionIndex + 1}`);
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Timer</h1>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <p className="text-xl font-semibold mb-2">Time left: {timeLeft}s</p>
      </div>
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={handleBack}
      >
        Back
      </button>
        <button
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={handleNextQuestion}
      >
        Next
      </button>
    </div>
  );
};

export default TimerPage;
