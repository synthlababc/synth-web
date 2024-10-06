'use client';
import React from 'react';

interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description}) => {
    return (
        <div className="bg-blue-300 p-6 rounded-lg shadow-lg max-w-xs mx-auto">
            <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>
            <p className="text-gray-700 mb-4 text-center">{description}</p>
        </div>
    );
};

export default Card;
