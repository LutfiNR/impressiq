import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-customblue to-custompurple">
      {/* Header Section */}
      <section className="p-4">
        <img
          src="/header.png" 
          alt="Header Logo"
          className="h-10 w-auto" 
        />
      </section>

      {/* Main Content Section */}
      <section className="flex flex-col items-center text-gray-100">
        <img
          src="/logo.png" 
          alt="Main Logo"
          className="h-64 w-auto"
        />
        <Link href="/main">
          <Button variant='secondbutton' className='mt-12 mb-24 px-12'>Mulai</Button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
