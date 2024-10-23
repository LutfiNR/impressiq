import React from 'react';
import questionData from '../../data/questions'; // Adjust the path as needed
import Card from '@/components/Card';

const MainMenu = () => {
  return (
    <div className="flex flex-col items-center min-h-screen min-w-screen bg-slate-200">
      <section className='p-8'>
        <h1 className="text-4xl font-bold text-slate-700">PAKET SOAL</h1>
      </section>
      <section className='w-full p-4 grid grid-cols-6 grid-rows-2 gap-4'>
        {questionData.map((pack, index) => (
          <Card
            key={index}
            title="Paket"
            packName={pack.packName}
            link={`/quiz/${index}`}
            buttonLabel="Mulai"
            variant="mainbutton"
          />
        ))}
      </section>
    </div>
  );
};

export default MainMenu;
