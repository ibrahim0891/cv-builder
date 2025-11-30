"use client";

import { div } from "framer-motion/client";
import Image from "next/image";
import { useRef } from "react";
import { usePDF } from 'react-to-pdf';
import { ResumeState } from "../lib/features/resumeInfo/ResumeInfoSlice";


export default function ResumeTemplate({ data }: { data: ResumeState }) {
    const {
        firstName,
        lastName,
        email,
        phone,
        address,
        jobTitle,
        skills,
        certification,
        contactInformation,
        experience,
        education,
    } = data;
     

    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
 
    return (
        <div>
            <div
                ref={targetRef}
                className="w-full min-h-screen border mt-20 bg-white text-[14px] p-10 font-sans flex gap-8"
                style={{
                    borderColor: "rgb(229, 231, 235)", // gray-200
                    color: "rgb(55, 65, 81)" // gray-700
                }}
            >
                {/* LEFT SIDEBAR */}
                <aside
                    className="w-[30%] pr-6 border-r"
                    style={{ borderColor: "rgb(209, 213, 219)" }} // gray-300
                >
                    {/* Profile Image */}
                    <div className="flex justify-center mb-6">
                        <div
                            className="w-40 h-40 rounded-full overflow-hidden border-4"
                            style={{ borderColor: "rgb(96, 165, 250)" }} // blue-400
                        >
                            <img src="" alt="" className="w-[160px] h-[160px]" />
                        </div>
                    </div>

                    {/* PORTFOLIO */}
                    <div className="mb-6">
                        <h3
                            className="font-bold mb-2"
                            style={{ color: "rgb(17, 24, 39)" }} // gray-900
                        >
                            PORTFOLIO
                        </h3>

                        {contactInformation.website && (
                            <p
                                className="underline text-sm mb-1"
                                style={{ color: "rgb(37, 99, 235)" }} // blue-600
                            >
                                {contactInformation.website}
                            </p>
                        )}

                        {contactInformation.linkedIn && (
                            <p
                                className="underline text-sm"
                                style={{ color: "rgb(37, 99, 235)" }} // blue-600
                            >
                                {contactInformation.linkedIn}
                            </p>
                        )}
                    </div>

                    {/* SKILLS */}
                    <div className="mb-6">
                        <h3
                            className="font-bold mb-2"
                            style={{ color: "rgb(17, 24, 39)" }} // gray-900
                        >
                            SKILLS
                        </h3>
                        <ul className="list-disc ml-5 space-y-1">
                            {skills?.map((skill, idx) => (
                                <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                    </div>

                    {/* LANGUAGES */}
                    <div className="mb-6">
                        <h3
                            className="font-bold mb-2"
                            style={{ color: "rgb(17, 24, 39)" }}
                        >
                            LANGUAGES
                        </h3>
                        <ul className="list-disc ml-5 space-y-1">
                            <li>Bangla</li>
                            <li>English</li>
                        </ul>
                    </div>

                    {/* ACTIVITIES */}
                    <div>
                        <h3
                            className="font-bold mb-2"
                            style={{ color: "rgb(17, 24, 39)" }}
                        >
                            CO-CURRICULAR ACTIVITIES
                        </h3>
                        <ul className="list-disc ml-5 space-y-1">
                            <li>IEEE Member</li>
                            <li>Travelling</li>
                            <li>Cricket</li>
                        </ul>
                    </div>
                </aside>

                {/* RIGHT MAIN SECTION */}
                <section className="w-[70%] pl-6">
                    {/* NAME & TITLE */}
                    <div className="mb-6">
                        <h1
                            className="text-4xl font-bold tracking-wide"
                            style={{ color: "rgb(17, 24, 39)" }} // gray-900
                        >
                            {firstName} {lastName}
                        </h1>
                        <p
                            className="text-lg font-semibold"
                            style={{ color: "rgb(75, 85, 99)" }} // gray-600
                        >
                            {jobTitle}
                        </p>
                    </div>

                    {/* CONTACT INFO */}
                    <div className="flex flex-col gap-1 text-sm mb-8">
                        <p>📞 {phone}</p>
                        <p>✉️ {email}</p>
                        <p>📍 {address}</p>
                    </div>

                    {/* ABOUT ME */}
                    <div className="mb-8">
                        <h2
                            className="font-bold text-xl mb-2"
                            style={{ color: "rgb(17, 24, 39)" }}
                        >
                            ABOUT ME
                        </h2>
                        <p>
                            I’m a passionate {jobTitle} with a strong drive for creativity and
                            user-focused design. I deliver modern UI/UX experiences with detail,
                            consistency, and performance.
                        </p>
                    </div>

                    {/* EDUCATION */}
                    <div className="mb-8">
                        <h2
                            className="font-bold text-xl mb-3"
                            style={{ color: "rgb(17, 24, 39)" }}
                        >
                            EDUCATION QUALIFICATION
                        </h2>

                        {education?.map((edu, idx) => (
                            <div key={idx} className="mb-4">
                                <h3 className="font-bold">{edu.degree}</h3>
                                <p style={{ color: "rgb(75, 85, 99)" }}>{edu.instituteName}</p>
                                <p className="text-sm">
                                    {edu.startDate} - {edu.endDate}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* CERTIFICATION */}
                    <div className="mb-8">
                        <h2
                            className="font-bold text-xl mb-3"
                            style={{ color: "rgb(17, 24, 39)" }}
                        >
                            TRAINING / CERTIFICATION
                        </h2>

                        {certification?.map((cert, idx) => (
                            <div key={idx} className="mb-4">
                                <h3 className="font-bold">{cert.certificateTitle}</h3>
                                <p className="font-medium">{cert.issuingOrganization}</p>
                                <p className="text-sm">{cert.issueDate}</p>
                            </div>
                        ))}
                    </div>

                    {/* EXPERIENCE */}
                    <div>
                        <h2
                            className="font-bold text-xl mb-3"
                            style={{ color: "rgb(17, 24, 39)" }}
                        >
                            WORK EXPERIENCE
                        </h2>

                        {experience?.map((exp, idx) => (
                            <div key={idx} className="mb-5">
                                <div className="flex justify-between">
                                    <h3 className="font-semibold">{exp.jobTitle}</h3>
                                    <p className="text-sm">
                                        {exp.startDate} - {exp.endDate}
                                    </p>
                                </div>

                                <p className="font-semibold">{exp.companyName}</p>
                                <p
                                    className="text-sm"
                                    style={{ color: "rgb(55, 65, 81)" }} // gray-700
                                >
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <button className='w-full p-8 rounded-md bg-green-600 text-white' onClick={() => toPDF()}>Download PDF</button>
        </div>
    );
}