import React, { use } from 'react';
import FormHeading from '../FormHeading';
import StepContext from '@/context/stepContext';

const ReviewAndDownload = () => {
    const { currentStep, setCurrentStep } = use(StepContext);
    return (
        <div>
           <FormHeading title='Review & Download' description='Review your resume and download it in PDF format.'/>
        </div>
    );
};

export default ReviewAndDownload;