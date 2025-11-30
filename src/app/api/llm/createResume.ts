'use server'

import { ResumeState } from "@/lib/features/resumeInfo/ResumeInfoSlice";
import { google } from "@ai-sdk/google";
import { generateText } from "ai"; 

export const createResume = async (data: ResumeState) => {
    const jsonData = JSON.stringify(data);
    const { text } = await generateText({
        model: google("gemini-2.5-flash"),
        maxRetries: 2,

        prompt: `Role: You are an expert Frontend Developer and UI/UX Designer specializing in React and Tailwind CSS.

Task: Create a single-file React component representing a Resume/CV that replicates the visual design of the attached image pixel-perfectly, while strictly populating the content using the provided TypeScript interfaces.

Data Structure (Strict Adherence): You must use the following interfaces for the component props and state. Do not invent new fields. Map the visual elements to these fields logically.

you have to reutn just a react compoetn

actual data source: ${jsonData}
 

Visual Design Requirements (The "Look and Feel"):

Layout: Use a two-column layout.

Left Column (Sidebar): Approx 30-35% width. Contains: Profile Image, Portfolio links, Skills, Languages (hardcode generic languages if not in state, or map from skills), and Co-Curricular (if strictly necessary, otherwise omit).

Right Column (Main): Approx 65-70% width. Contains: Name/Header, About Me, Education, Training/Certification, Work Experience.

Divider: A thin, vertical solid blue line (border-r or absolute div) separating the left and right columns.

Header Section:

Profile Image: Located at the top-left. It must be circular with a thick light-blue border (approx 4px-6px solid #6BA4C9).

Name: Located top-right. Large, uppercase, bold sans-serif font. Dark grey text (#333).

Job Title: Immediately below the name. Serif or Sans-serif, uppercase, slightly smaller, tracking (letter-spacing) widened.

Contact Header: Below the job title (aligned right). Icons for Phone, Email, Location in light blue. Text in small grey font.

Typography:

Use a clean Sans-Serif font (like Roboto, Open Sans, or Inter).

Section Headings: Uppercase, Bold, Dark Grey (#333). Example: "ABOUT ME", "WORK EXPERIENCE".

Body Text: Dark grey/charcoal (#555). Clean and readable.

Color Palette:

Background: White (#ffffff).

Primary Text: Dark Charcoal (#2d3748).

Accent Color: Muted Cyan/Blue (#5D9CEC or similar). Use this for the profile border, icons, and links.

Specific Section Mapping:

Portfolio (Left Col): Use contactInformation.website (or socialMedia) here. Display as clickable links with icons (Globe, LinkedIn logo). Color: Blue.

Skills (Left Col): Map state.skills. Display as a clean list with bullet points.

About Me (Right Col): Map state.jobDescription here.

Education (Right Col): Display degree bolded, instituteName below it. Dates startDate - endDate on the next line or right-aligned.

Work Experience (Right Col): jobTitle (Bold), companyName (Bold/Dark), Date right-aligned (01/08/2024 - Till Now). Description below in small text.

Technical Constraints:

Use Tailwind CSS for styling.

Use lucide-react for icons (Phone, Mail, MapPin, Linkedin, Globe).

Ensure the component is responsive (stacks columns on mobile, side-by-side on print/desktop).

Create a const dummyData: ResumeState object populated with the exact text from the image provided so I can visualize the result immediately.

Why this prompt works:
Interface Injection: By forcing the AI to use your specific type definitions, you ensure the code generated is copy-paste compatible with your existing codebase.

Visual Separation: It explicitly breaks down the "Left Column" vs "Right Column" logic, which is the defining feature of this specific resume design.

Data Mapping: It solves the ambiguity of where data goes (e.g., mapping jobDescription to the "About Me" visual section), preventing the AI from generating "Lorem Ipsum" or inventing new fields. 
 
 

  


`,
    });
    return text;
}