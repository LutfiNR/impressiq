import React from 'react';
import Link from 'next/link';
import Button from './Button';

const Card = ({ title, packName, link, buttonLabel = 'Mulai', variant = 'mainbutton' }) => {
    return (
        <div  className="w-full flex flex-col justify-between p-6 bg-slate-100 rounded-md shadow-md text-center">
            <h2 className="text-xl text-slate-700 mb-4">{title}</h2>
            <h2 className="text-4xl text-slate-700 font-semibold mb-8">{packName}</h2>
            <Link href={link}>
                <Button variant={variant} className="w-full">{buttonLabel}</Button>
            </Link>
        </div>
    );
};

export default Card;
