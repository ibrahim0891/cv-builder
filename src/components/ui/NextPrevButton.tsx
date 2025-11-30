'use client'
import StepContext from '@/context/stepContext';
import { useRouter } from 'next/router';
import { use } from 'react';

const NextPrevButton = () => {
    const {currentStep, setCurrentStep} = use(StepContext); 
    

    console.log(currentStep);
    return (
        <div className='grid grid-cols-2 gap-5 py-10'>
            <button className='bg-gray-600 px-5 text-white  py-2 rounded-md' onClick={() => setCurrentStep((p) => p - 1)}>Previous</button>
            <button className='bg-green-500 px-5  text-white py-2 rounded-md' type="submit">Next</button>
        </div>
    );
};

export default NextPrevButton;