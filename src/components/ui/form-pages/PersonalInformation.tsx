'use client'
import FormHeading from '../FormHeading';
import FadingContainer from '../FadingContainer';
import { allCountries } from '@/constants/constants';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '@/lib/hooks';
import { setPersonalInfo } from '@/lib/features/resumeInfo/ResumeInfoSlice';
import { use } from 'react';
import StepContext from '@/context/stepContext';
import Link from 'next/link';
import NextPrevButton from '../NextPrevButton';

type PersonalInfo = {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    state: string,
    zipCode: string,
    country: string
}

const PersonalInformation = () => {
     const {currentStep, setCurrentStep} = use(StepContext);

    const dispatch = useAppDispatch();
    const { register, handleSubmit } = useForm<PersonalInfo>();

    const onSubmit = (data: PersonalInfo) => {
         
         dispatch(setPersonalInfo(data))
        setCurrentStep((p) => p + 1)
    }
    return (
        <FadingContainer>
            <FormHeading title='Tell Us About Yourself' description='Fill in your personal details so we can tailor your resume perfectly to your career goals.' />
            <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-4 py-6'>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" {...register('firstName')}/>
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" {...register('lastName')}/>
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" {...register('phone')}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" {...register('email')}/>
                    </div>
                </div>

                <div className='grid grid-cols-[1fr_2fr] gap-4 '>
                   <div>
                        <label htmlFor="country">Country</label>
                        <select id="country" {...register('country')}>
                            <option value="" disabled>Select Country</option>
                            {
                                allCountries.map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))
                            }
                        </select>
                   </div>
                   <div>
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" {...register('address')}/>
                   </div>
                </div>

                <div className='grid grid-cols-3 gap-4'>
                    <div>
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" {...register('city')}/>
                    </div>
                    <div>
                        <label htmlFor="state">State</label>
                        <input type="text" id="state" {...register('state')}/>
                    </div>
                    <div>
                        <label htmlFor="zipCode">Zip Code</label>
                        <input type="text" id="zipCode" {...register('zipCode')}/>
                    </div>
                </div>
                <NextPrevButton/>
                {/* <div className="mt-10 flex justify-between">
                    {
                        currentStep == 0 ? <button
                            onClick={() => setCurrentStep((p) => p-1)}
                            className="px-4 py-2 bg-gray-200 rounded-md"
                        >
                            <Link href="/">Cancel </Link>
                        </button> : <button
                            onClick={() => setCurrentStep((p) => p-1)}
                            className="px-4 py-2 bg-gray-200 rounded-md"
                        >
                            Back
                        </button>}

                    <button

                        type="submit"
                        onClick={() => handleSubmit(onSubmit)}
                        className="px-4 py-2 bg-green-500 text-white rounded-md"
                    >
                        Next
                    </button>
                </div> */}
                
            </form>
        </FadingContainer>
    );
};

export default PersonalInformation;