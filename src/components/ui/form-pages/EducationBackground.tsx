'use client';
import React, { use, useState } from 'react';
import FormHeading from '../FormHeading';
import FadingContainer from '../FadingContainer';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '@/lib/hooks';
import { addEducation } from '@/lib/features/resumeInfo/ResumeInfoSlice';
import StepContext from '@/context/stepContext';
import NextPrevButton from '../NextPrevButton';

type EducationEntry = {
    degree: string;
    instituteName: string;
    startDate: string;
    endDate: string;
    major?: string;
};

const EducationBackground = () => {
    const { currentStep, setCurrentStep } = use(StepContext);

    const [educationEntries, setEducationEntries] = useState<EducationEntry[]>([
        { degree: '', instituteName: '', startDate: '', endDate: '', major: '' },
    ]);
    const { register, handleSubmit } = useForm();
    const dispatch = useAppDispatch();

    const handleAddEducation = () => {
        setEducationEntries([...educationEntries, { degree: '', instituteName: '', startDate: '', endDate: '', major: '' }]);
    };

    const handleRemoveEducation = (index: number) => {
        const updatedEntries = [...educationEntries];
        updatedEntries.splice(index, 1);
        setEducationEntries(updatedEntries);
    };

    const onSubmit = (data: any) => {
        // Handle form submission for all education entries
        educationEntries.forEach(entry => {
            dispatch(addEducation(entry));
        });
        setCurrentStep((p) => p + 1)
    };

    const handleInputChange = (index: number, field: keyof EducationEntry, value: string) => {
        const updatedEntries = [...educationEntries];
        updatedEntries[index] = {
            ...updatedEntries[index],
            [field]: value,
        };
        setEducationEntries(updatedEntries);
    };

    return (
        <FadingContainer>
            <FormHeading
                title='Your Educational Background'
                description='Provide your academic qualifications and any relevant certifications to strengthen your resume.'
            />

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                {educationEntries.map((entry, index) => (
                    <div key={index} className='space-y-4 rounded-lg relative'>
                        {index > 0 && (
                            <button
                                type='button'
                                onClick={() => handleRemoveEducation(index)}
                                className='absolute top-2 right-2 text-red-500 hover:text-red-700'
                            >
                                ✕
                            </button>
                        )}
                        <div>
                            <label className='block text-sm font-medium text-gray-700'>Your Degree</label>
                            <input
                                type='text'
                                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                                value={entry.degree}
                                onChange={(e) => handleInputChange(index, 'degree', e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700'>Institute Name</label>
                            <input
                                type='text'
                                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                                value={entry.instituteName}
                                onChange={(e) => handleInputChange(index, 'instituteName', e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700'>Major (Optional)</label>
                            <input
                                type='text'
                                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                                value={entry.major || ''}
                                onChange={(e) => handleInputChange(index, 'major', e.target.value)}
                            />
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <label className='block text-sm font-medium text-gray-700'>Start Date</label>
                                <input
                                    type='date'
                                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                                    value={entry.startDate}
                                    onChange={(e) => handleInputChange(index, 'startDate', e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-gray-700'>End Date</label>
                                <input
                                    type='date'
                                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                                    value={entry.endDate}
                                    onChange={(e) => handleInputChange(index, 'endDate', e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                ))}

                <div className='flex justify-between items-center pt-2'>
                    <button
                        type='button'
                        onClick={handleAddEducation}
                        className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                    >
                        + Add another degree
                    </button>

                   
                </div>

                <NextPrevButton/>
            </form>
        </FadingContainer>
    );
};

export default EducationBackground;