

'use client'

import { useState } from "react";
import StepContext from "./stepContext";
import { useRouter } from "next/navigation";

const StepProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const router = useRouter()
    
    return (
        <StepContext.Provider value={{currentStep, setCurrentStep}}>
            {children}
        </StepContext.Provider>
    );
};

export default StepProvider