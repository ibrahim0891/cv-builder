'use client'
import FormHeading from '../FormHeading';
import FadingContainer from '../FadingContainer';
import { useForm } from 'react-hook-form';
import { use, useState } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { addExperience } from '@/lib/features/resumeInfo/ResumeInfoSlice';
import StepContext from '@/context/stepContext';
import NextPrevButton from '../NextPrevButton';

const SkillsAndExperience = () => { 
    const { currentStep, setCurrentStep } = use(StepContext);

    const { register, handleSubmit } = useForm()
    const dispatch = useAppDispatch()
    const onSubmit = (data: any) => {
        dispatch(addExperience(data))
        setCurrentStep((p) => p + 1)
    }
    return (
        <FadingContainer>
            <FormHeading title='Your Work Experience & Skills' description='Highlight your work experience and skills. The more detail you provide, the better the AI can tailor your resume to match job opportunities.' />

            <form className='space-y-5 py-5' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="jobTitle">Job Title</label>
                    <input type="text" id="jobTitle" {...register('jobTitle')} />
                </div>
                <div>
                    <label htmlFor="companyName">Company Name</label>
                    <textarea id="companyName" {...register('companyName')} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="startDate">Start Date</label>
                        <input type="date" id="startDate" {...register('startDate')} />
                    </div>
                    <div>
                        <label htmlFor="endDate">End Date</label>
                        <input type="date" id="endDate" {...register('endDate')} />
                    </div>
                </div>

                <div className="grid gric-cols-2 gap-4">
                    <div>
                        <label htmlFor="description">Job Description/Responsibilities</label>
                        <textarea id="description" {...register('description')} />
                    </div> 
                </div> 
                <NextPrevButton/>
            </form>
        </FadingContainer>
    );
};

export default SkillsAndExperience;