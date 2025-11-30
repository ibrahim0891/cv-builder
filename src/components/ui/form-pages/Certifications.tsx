'use client';
import React, { use, useState } from 'react';
import FormHeading from '../FormHeading';
import FadingContainer from '../FadingContainer';
import { useAppDispatch } from '@/lib/hooks';
import { addCertification } from '@/lib/features/resumeInfo/ResumeInfoSlice';
import StepContext from '@/context/stepContext';
import NextPrevButton from '../NextPrevButton';

type CertificationEntry = {
    certificateTitle: string;
    issuingOrganization: string;
    issueDate: string;
    expiryDate: string;
    credentialId?: string;
};

const Certifications = () => {
    const { currentStep, setCurrentStep } = use(StepContext);

    const [certificationEntries, setCertificationEntries] = useState<CertificationEntry[]>([
        { certificateTitle: '', issuingOrganization: '', issueDate: '', expiryDate: '', credentialId: '' },
    ]);
    const dispatch = useAppDispatch();

    const handleAddCertification = () => {
        setCertificationEntries([
            ...certificationEntries,
            { certificateTitle: '', issuingOrganization: '', issueDate: '', expiryDate: '', credentialId: '' }
        ]);
    };

    const handleRemoveCertification = (index: number) => {
        const updatedEntries = [...certificationEntries];
        updatedEntries.splice(index, 1);
        setCertificationEntries(updatedEntries);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        certificationEntries.forEach(entry => {
            console.log(entry)
            dispatch(addCertification(entry));
        });
        setCurrentStep((p) => p + 1)
    };

    const handleInputChange = (index: number, field: keyof CertificationEntry, value: string) => {
        const updatedEntries = [...certificationEntries];
        updatedEntries[index] = {
            ...updatedEntries[index],
            [field]: value,
        };
        setCertificationEntries(updatedEntries);
    };

    return (
        <FadingContainer>
            <FormHeading
                title='Your Certifications'
                description='Add your professional certifications to showcase your qualifications and expertise.'
            />

            <form onSubmit={handleSubmit} className='space-y-6 py-10'>
                {certificationEntries.map((entry, index) => (
                    <div key={index} className='space-y-4    rounded-lg relative'>
                        {index > 0 && (
                            <button
                                type='button'
                                onClick={() => handleRemoveCertification(index)}
                                className='absolute top-2 right-2 text-red-500 hover:text-red-700'
                            >
                                ✕
                            </button>
                        )}

                        <div>
                            <label className='block text-sm font-medium text-gray-700'>
                                Certificate Title <span className='text-red-500'>*</span>
                            </label>
                            <input
                                type='text'
                                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                                value={entry.certificateTitle}
                                onChange={(e) => handleInputChange(index, 'certificateTitle', e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700'>
                                Issuing Organization <span className='text-red-500'>*</span>
                            </label>
                            <input
                                type='text'
                                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                                value={entry.issuingOrganization}
                                onChange={(e) => handleInputChange(index, 'issuingOrganization', e.target.value)}
                                required
                            />
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <label className='block text-sm font-medium text-gray-700'>
                                    Issue Date <span className='text-red-500'>*</span>
                                </label>
                                <input
                                    type='date'
                                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                                    value={entry.issueDate}
                                    onChange={(e) => handleInputChange(index, 'issueDate', e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-gray-700'>
                                    Expiry Date
                                </label>
                                <input
                                    type='date'
                                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                                    value={entry.expiryDate}
                                    onChange={(e) => handleInputChange(index, 'expiryDate', e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700'>
                                Credential ID or URL (Optional)
                            </label>
                            <input
                                type='text'
                                placeholder='e.g., Credential ID or verification URL'
                                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                                value={entry.credentialId || ''}
                                onChange={(e) => handleInputChange(index, 'credentialId', e.target.value)}
                            />
                        </div>
                    </div>
                ))}

                <div className='flex justify-between items-center pt-2'>
                    <button
                        type='button'
                        onClick={handleAddCertification}
                        className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                    >
                        + Add another certification
                    </button>

                   
                </div>

                <NextPrevButton/>
            </form>
        </FadingContainer>
    );
};

export default Certifications;