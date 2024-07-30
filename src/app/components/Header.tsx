import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-500 text-white p-4 h-16 fixed top-0 left-0 w-full shadow-lg z-50">
            <div className='flex items-center'>
                <Image
                    src="/synth.png"
                    alt="Synth"
                    width={45}
                    height={45}
                    className='rounded-lg'
                />
                <p className='ml-2'>SynthLabABC</p>
            </div>

        </header>
    );
}

export default Header;


