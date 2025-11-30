import React, { use } from 'react';
import FormHeading from '../FormHeading';
import FadingContainer from '../FadingContainer';
import StepContext from '@/context/stepContext';
import { useAppDispatch } from '@/lib/hooks';
import { useForm } from 'react-hook-form';
import { setContactInformation } from '@/lib/features/resumeInfo/ResumeInfoSlice';
import NextPrevButton from '../NextPrevButton';

const ContactInformation = () => {
    const { currentStep, setCurrentStep } = use(StepContext);

    const { register, handleSubmit } = useForm()
    const dispatch = useAppDispatch()
    const onSubmit = (data: any) => {
        dispatch(setContactInformation(data))
        setCurrentStep((p) => p + 1)
    }
    return (
        <FadingContainer>
            <FormHeading title='Your Contact Information' description='Include additional contact details and social media links to showcase your professional presence.'/>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 py-5' >
                <div>
                    <label htmlFor="Linkednin">Linkednin</label>
                    <input type="text" id="Linkednin" {...register('Linkednin')}/>
                </div>
                <div>
                    <label htmlFor="Portfolio">Portfolio</label>
                    <textarea id="Portfolio" {...register('Portfolio')}/>
                </div>
                <div>
                    <label htmlFor="SocialMedia">SocialMedia</label>
                    <textarea id="SocialMedia" {...register('SocialMedia')}/>
                </div>

                <div>
                   <button type="submit">Next</button>
                </div>

                <NextPrevButton/>
            </form>
        </FadingContainer>
    );
};

export default ContactInformation;