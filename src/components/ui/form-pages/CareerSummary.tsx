import React, { use } from 'react';
import FormHeading from '../FormHeading';
import FadingContainer from '../FadingContainer';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '@/lib/hooks';
import { setJobInfo } from '@/lib/features/resumeInfo/ResumeInfoSlice';
import { useDispatch } from 'react-redux';
import StepContext from '@/context/stepContext';
import NextPrevButton from '../NextPrevButton';

const CareerSummary = () => {
    const { currentStep, setCurrentStep } = use(StepContext);

    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()

    const onSubmit = (data: any) => {
         dispatch(setJobInfo(data))
         setCurrentStep((p) => p + 1)
    }
    return (
        <FadingContainer>
            <FormHeading title='Your career overview' description='A strong career summary will make a lasting impression on recruiters. Let’s create a summary that highlights your experience and goals.' />

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 py-10' >
                <div>
                    <label htmlFor="jobTitle">Job Title</label>
                    <input type="text" id="jobTitle" {...register('jobTitle')}/>
                </div>
                <div>
                    <label htmlFor="jobDescription">Job Description</label>
                    <textarea id="jobDescription" {...register('jobDescription')}/>
                </div>

                <NextPrevButton/>
            </form>
        </FadingContainer>
    );
};

export default CareerSummary;