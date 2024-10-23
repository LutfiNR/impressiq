import React from 'react';

const Button = ({ children, onClick, className = '', variant = 'mainbutton' }) => {
    const getVariantStyles = (variant) => {
        switch (variant) {
            case 'outlinedbutton':
                return 'mt-8 px-8 bg-slate-200 text-custompurple border-2 border-custompurple';
            case 'secondbutton':
                return 'text-slate-700 bg-gray-100 hover:bg-gray-200 transition duration-200';
            case 'mainbutton':
            default:
                return 'bg-custompurple text-white hover:bg-customblue';
        }
    };
    return (
        <button
            className={`py-3 rounded  ${getVariantStyles(variant)} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
