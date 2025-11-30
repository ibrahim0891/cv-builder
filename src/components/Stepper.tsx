"use client";

import { use, useState } from "react";
import Step from "./ui/Step";
import PersonalInformation from "./ui/form-pages/PersonalInformation";
import CareerSummary from "./ui/form-pages/CareerSummary";
import SkillsAndExperience from "./ui/form-pages/SkillsAndExperience";
import EducationBackground from "./ui/form-pages/EducationBackground";
import ContactInformation from "./ui/form-pages/ContactInformation";
import AiResumeGenaration from "./ui/form-pages/AiResumeGenaration";
import ReviewAndDownload from "./ui/form-pages/ReviewAndDownload";
import Certifications from "./ui/form-pages/Certifications";

import { motion } from "framer-motion";
import Link from "next/link";
import StepContext from "@/context/stepContext";
import { steps } from "@/constants/constants";
 
const stepPages = [
    <PersonalInformation />,
    <CareerSummary />,
    <SkillsAndExperience />,
    <EducationBackground />,
    <Certifications />,
    <ContactInformation />,
    <AiResumeGenaration />,
    <ReviewAndDownload />,
];

export default function ResumeBuilder() {
    const { currentStep, setCurrentStep } = use(StepContext);


    return (
        <div className="max-w-7xl mx-auto py-10">


            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mt-10 p-6 flex  flex-col bg-white   rounded-xl   gap-20 px-12 min-h-screen max-w-7xl   items-center justify-center">
                <Step steps={steps} currentStep={currentStep} />
                <div>
                    {stepPages[currentStep]}
                </div>
            </motion.div>



        </div>
    );
}
