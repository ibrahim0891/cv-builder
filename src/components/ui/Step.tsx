"use client";

interface StepperProps {
    steps: { id: number; label: string }[];
    currentStep: number;
}

export default function Step({ steps, currentStep }: StepperProps) {
    return (
        <div className="w-full flex items-start justify-between">
            {steps.map((step, i) => {
                const isActive = currentStep === i;
                const isCompleted = currentStep > i;

                return (
                    <div key={i} className="flex flex-col items-center w-full relative">
                        {/* Line Connector */}
                        {i !== 0 && (
                            <div
                                className={`absolute top-5 left-[-50%] h-[3px] w-full 
                ${isCompleted ? "bg-green-500" : "bg-gray-300"}`}
                            />
                        )}

                        {/* Circle */}
                        <div
                            className={`
                w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold z-20
                ${isActive || isCompleted ? "bg-green-500 text-white" : "bg-gray-300 text-gray-600"}
              `}
                        >
                            {String(step.id).padStart(2, "0")}
                        </div>

                        {/* Label */}
                        <p className="text-center text-sm mt-2 text-gray-700 leading-tight w-24">
                            {step.label}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
