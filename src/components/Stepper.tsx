"use client";

import { useState } from "react"; 
import Step from "./ui/Step";
import PersonalInformation from "./ui/form-pages/PersonalInformation";
import CareerSummary from "./ui/form-pages/CareerSummary";
import SkillsAndExperience from "./ui/form-pages/SkillsAndExperience";
import EducationAndCertification from "./ui/form-pages/EducationAndCertification";
import ContactInformation from "./ui/form-pages/ContactInformation";
import AiResumeGenaration from "./ui/form-pages/AiResumeGenaration";
import ReviewAndDownload from "./ui/form-pages/ReviewAndDownload";

export default function ResumeBuilder() {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        { id: 1, label: "Personal Information" },
        { id: 2, label: "Career Summary" },
        { id: 3, label: "Skills & Experience" },
        { id: 4, label: "Education & Certifications" },
        { id: 5, label: "Contact Information" },
        { id: 6, label: "AI Resume Generation" },
        { id: 7, label: "Review & Download" },
    ];

    const stepPages = [
        <PersonalInformation />,
        <CareerSummary />,
        <SkillsAndExperience />,
        <EducationAndCertification />,
        <ContactInformation />,
        <AiResumeGenaration />,
        <ReviewAndDownload />,
    ]; 

    return (
        <div className="max-w-4xl mx-auto py-10">
            <Step steps={steps} currentStep={currentStep} />


            <div className="mt-10 p-6 bg-white shadow rounded-xl min-h-[150px]">
                {stepPages[currentStep]}
            </div>


            <div className="mt-10 flex justify-between">
                <button
                    onClick={() => setCurrentStep((p) => Math.max(p - 1, 0))}
                    className="px-4 py-2 bg-gray-200 rounded-md"
                >
                    Back
                </button>
               
                <button
                    onClick={() => setCurrentStep((p) => Math.min(p + 1, steps.length - 1))}
                    className="px-4 py-2 bg-green-500 text-white rounded-md"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
