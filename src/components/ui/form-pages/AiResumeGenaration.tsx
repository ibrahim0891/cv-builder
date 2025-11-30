'use client'
import FormHeading from '../FormHeading';
import FadingContainer from '../FadingContainer';
import { useAppSelector } from '@/lib/hooks';
import { useChat } from '@ai-sdk/react';
import { google } from "@ai-sdk/google"; 
import { use, useEffect, useState } from 'react';
import { createResume } from '@/app/api/llm/createResume';
import StepContext from '@/context/stepContext';
import ResumeTemplate from '@/components/ResumeTemplate';

const AiResumeGenaration = () => {
    const {resumeInfo} = useAppSelector(state => state) 

    // const { currentStep, setCurrentStep } = use(StepContext);
    
    // const [isLoading, setIsLoading] = useState(false);
    // const [response , setResponse] = useState('');
    // const [input , setInput] = useState('');
    
    // useEffect(() => {
    //     const generateResume = async () => {
    //         setIsLoading(true);
    //         const response = await createResume(resumeInfo);
    //         setResponse(response);
    //         setIsLoading(false);
    //         // setCurrentStep(currentStep + 1);
    //     }
    //     generateResume();
    // }, [resumeInfo])

   
    
    return (
        <FadingContainer>
            <FormHeading title='AI Resume Magic' description=''/>
            
            <ResumeTemplate data={resumeInfo}/>
                  
        </FadingContainer>
    );
};

export default AiResumeGenaration;