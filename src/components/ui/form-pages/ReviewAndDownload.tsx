import React, { use, useRef } from 'react';
import FormHeading from '../FormHeading';
import StepContext from '@/context/stepContext';
import ResumeTemplate from '@/components/ResumeTemplate';
import { useAppSelector } from '@/lib/hooks';
import { usePDF } from 'react-to-pdf';

import generatePDF from 'react-to-pdf';


const ReviewAndDownload = () => {
    const { currentStep, setCurrentStep } = use(StepContext);
    const { resumeInfo } = useAppSelector(state => state)

    const elementRef = useRef(null);
    
    
    return (
        <div>
            <FormHeading title='Review & Download' description='Review your resume and download it in PDF format.' />
          
                <ResumeTemplate data={resumeInfo} />
             
          
        </div>
    );
};

export default ReviewAndDownload;