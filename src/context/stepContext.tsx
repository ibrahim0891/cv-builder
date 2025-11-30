'use client'

import { createContext, Dispatch, SetStateAction } from "react";

const StepContext = createContext({
    currentStep: 0,
    setCurrentStep: undefined as unknown as Dispatch<SetStateAction<number>>
});

export default StepContext;