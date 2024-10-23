"use client"; // Add this line to make it a Client Component

import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import questionData from '../../data/questions';
import Button from '@/components/Button';

const Question = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get question parameters from the URL
  const questionType = searchParams.get('type') || 'main';
  const packId = searchParams.get('packId');
  const currentQuestionIndex = parseInt(searchParams.get('questionIndex')) || 0;

  // Ensure packId is defined before accessing question data
  const pack = packId ? questionData[packId] : null;

  // Determine the question array based on the type
  const questions = pack ? (
    questionType === 'contention'
      ? pack.contentionQuestions
      : questionType === 'additional'
        ? pack.additionalQuestions
        : pack.mainQuestions
  ) : [];

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

  // Loading state
  if (!pack) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-200 p-4">
      <h1 className="text-2xl font-bold mt-4">
        Paket {pack.packName} - {getQuestionTypeLabel(questionType)}
      </h1>
      <div className='mt-12 w-full flex flex-col items-center'>
      <QuestionCard question={questions[currentQuestionIndex]} questionIndex={currentQuestionIndex} />
      <div><ActionButtons onStartQuiz={handleStartQuiz} onBack={handleBack} /></div>
      </div>
    </div>
  );
};

// Helper function to get the question type label
const getQuestionTypeLabel = (type) => {
  switch (type) {
    case 'contention':
      return 'Rebutan';
    case 'additional':
      return 'Tambahan';
    default:
      return 'Soal Wajib';
  }
};

// Component to display the current question
const QuestionCard = ({ question, questionIndex }) => (
  <div className="p-8 bg-slate-100 w-full rounded-lg shadow-md mb-4">
    <p className="text-xl font-semibold mb-4">Soal Nomor: {questionIndex + 1}</p>
    <p className='text-2xl'>{question?.question}</p>
  </div>
);

// Component for action buttons
const ActionButtons = ({ onStartQuiz, onBack }) => (
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
      onClick={onStartQuiz}
      className='w-64 mt-8 ml-4'
    >
      Mulai Waktu
    </Button>
  </>
);

export default Question;
