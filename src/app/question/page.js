"use client"; // Add this line to make it a Client Component

import React, { useEffect, useState } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation'; 
import questionData from '../../data/questions'; 

const Question = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get question type from URL (main, rebutan, or additional)
  const questionType = searchParams.get('type') || 'main'; 
  const packId = searchParams.get('packId'); 
  const currentQuestionIndex = searchParams.get('questionIndex');
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Ensure packId is defined before accessing question data
  const pack = packId ? questionData[packId] : null;

  // Determine the question array based on the type (main, rebutan, or additional)
  const questions = pack ? (
    questionType === 'contention' 
      ? pack.contentionQuestions 
      : questionType === 'additional' 
      ? pack.additionalQuestions 
      : pack.mainQuestions
  ) : [];
  // const questions = pack.mainQuestions

  const handleStartQuiz = () => {
    const timeLimit = questions[currentQuestionIndex]?.timeLimit || 0;
    router.push(`/timer?time=${timeLimit}&packId=${packId}&questionIndex=${currentQuestionIndex}&type=${questionType}`);
  };
  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      router.push(`/quiz/${packId}`);
    }
  }, [currentQuestionIndex, questions.length, router]);

  if (!pack) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">{pack.packName} - {questionType === 'contention' ? 'Rebutan' : questionType === 'additional' ? 'Tambahan' : 'Soal Wajib'}</h1>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <p className="text-xl font-semibold mb-2">Current Question: {parseInt(currentQuestionIndex) + 1}</p>
        <p>{questions[currentQuestionIndex]?.question}</p>
      </div>
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={handleStartQuiz}
      >
        Start Timer
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

export default Question;
