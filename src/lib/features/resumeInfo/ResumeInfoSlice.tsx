import { createSlice } from "@reduxjs/toolkit";

type Experience = {
    jobTitle: string,
    companyName: string,
    startDate: string,
    endDate: string,
    description: string
}
type Education = {
    degree: string,
    instituteName: string,
    major: string,
    startDate: string,
    endDate: string
}

type Certification = {
    certificateTitle: string,
    issuingOrganization: string,
    issueDate: string,
    expiryDate: string
}
type ContactInformation = {
    linkedIn: string,
    github: string,
    website: string,
    socialMedia: string
}

export interface ResumeState {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    jobTitle: string;
    jobDescription: string;
    experience: Experience[];
    education: Education[];
    certification: Certification[]; 
    contactInformation: ContactInformation;
}

export interface ResumeState {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    jobTitle: string;
    jobDescription: string;
    experience: Experience[];
    education: Education[];
    certification: Certification[];
    skills: string[];
    contactInformation: ContactInformation;
}

const initialState: ResumeState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    jobTitle: "",
    jobDescription: "",
    skills: [],
    certification: [],
    contactInformation: {
        linkedIn: "",
        github: "",
        website: "",
        socialMedia: ""
    },
    experience: [],
    education: []
}

export const ResumeInfoSlice = createSlice({
    name: "resumeInfo",
    initialState,
    reducers: {

        setPersonalInfo: (state, action) => {
            const { firstName, lastName, email, phone, address, city, state: st, zipCode, country } = action.payload;
            state.firstName = firstName;
            state.lastName = lastName;
            state.email = email;
            state.phone = phone;
            state.address = address;
            state.city = city;
            state.state = st;
            state.zipCode = zipCode;
            state.country = country;
        },


        setJobInfo: (state, action) => {
            const { jobTitle, jobDescription } = action.payload;
            console.log(jobTitle, jobDescription);
            state.jobTitle = jobTitle;
            state.jobDescription = jobDescription;
        },

        addExperience: (state, action) => {
            state.experience.push(action.payload);
        },
        updateExperience: (state, action) => {
            const { index, data } = action.payload;
            state.experience[index] = { ...state.experience[index], ...data };
        },
        removeExperience: (state, action) => {
            state.experience.splice(action.payload, 1);
        },


        addEducation: (state, action) => {
            state.education.push(action.payload);
        },
        updateEducation: (state, action) => {
            const { index, data } = action.payload;
            state.education[index] = { ...state.education[index], ...data };
        },
        removeEducation: (state, action) => {
            state.education.splice(action.payload, 1);
        },


        addCertification: (state, action) => {
            state.certification.push(action.payload);
        },
        updateCertification: (state, action) => {
            const { index, data } = action.payload;
            state.certification[index] = { ...state.certification[index], ...data };
        },
        removeCertification: (state, action) => {
            state.certification.splice(action.payload, 1);
        },


        addSkill: (state, action) => {
            state.skills.push(action.payload);
        },
        removeSkill: (state, action) => {
            state.skills = state.skills.filter((s, i) => i !== action.payload);
        },

        setContactInformation: (state, action) => {
            state.contactInformation = { ...state.contactInformation, ...action.payload };
        }
    }
})

export const { setPersonalInfo, setJobInfo, addExperience, updateExperience, removeExperience, addEducation, updateEducation, removeEducation, addCertification, updateCertification, removeCertification, addSkill, removeSkill, setContactInformation } = ResumeInfoSlice.actions;
export default ResumeInfoSlice.reducer;
