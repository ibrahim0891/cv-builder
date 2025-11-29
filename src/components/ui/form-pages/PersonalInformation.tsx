import React from 'react';
import FormHeading from '../FormHeading';
import FadingContainer from '../FadingContainer';

const PersonalInformation = () => {
    return (
        <FadingContainer>
            <FormHeading title='Tell Us About Yourself' description='Fill in your personal details so we can tailor your resume perfectly to your career goals.'/>
        </FadingContainer>
    );
};

export default PersonalInformation;