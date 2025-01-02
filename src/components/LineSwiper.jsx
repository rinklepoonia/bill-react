'use client';
import { useState } from "react";

export default function LineSwiper() {
    const [activeStep, setActiveStep] = useState(1);

    const steps = [
        { id: 1, title: "Select desired security frameworks", description: "Select from industry-standard security frameworks like SOC2, NIST, and ISO 27000" },
        { id: 2, title: "Customize your security controls", description: "Tailor security controls to fit your organizational needs" },
        { id: 3, title: "Monitor compliance", description: "Track compliance status in real-time" },
        { id: 4, title: "Generate reports", description: "Easily generate audit-ready reports" },
    ];

    return (
        <div className="flex flex-col items-center bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center w-full mb-8">
                {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center w-full">
                        {/* Step Circle */}
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold 
        ${activeStep === step.id ? "bg-yellow-400 text-black" : "bg-gray-600 text-white"}`}
                        >
                            {step.id}
                        </div>

                        {/* Connector: Dotted Line */}
                        {index < steps.length - 1 && (
                            <div
                                className={`flex-grow h-1 border-t-2 ${activeStep > step.id
                                        ? "border-yellow-400"
                                        : "border-gray-600"
                                    } border-dotted`}
                            ></div>
                        )}
                    </div>
                ))}
            </div>


            {/* Slide Content */}
            <div className="text-center mb-8">
                <h2 className="text-xl font-bold">{steps[activeStep - 1].title}</h2>
                <p className="text-gray-400">{steps[activeStep - 1].description}</p>
            </div>

            {/* Pagination */}
            <div className="flex space-x-3">
                {steps.map((step) => (
                    <button
                        key={step.id}
                        onClick={() => setActiveStep(step.id)}
                        className={`w-4 h-4 rounded-full 
            ${activeStep === step.id ? "bg-yellow-400" : "bg-gray-600"}`}
                    ></button>
                ))}
            </div>
        </div>
    );
}
