import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="flex items-center gap-12 container">
                <div className="w-1/3">
                   <img src="/start-page-image.png" alt="file" className="object-cover w-full h-full"/>
                </div>
                <div className="w-2/3 max-w-4xl ">
                    <h1 className="text-7xl font-semibold"> Create Your <span className="text-green-500">  AI-Powered Resume </span> </h1>
                    <p className="text-xl mt-5 mb-7">Let our AI technology help you build a professional resume tailored to your skills, experience, and career goals.</p>
                    <p className="text-xl text-gray-700 mb-7 ">Follow these simple steps to create a standout resume that will get you noticed by top employers.</p>
                    <Link href="/collection-form" className="bg-green-500 text-white px-24 py-6 rounded">Start Now</Link>
                </div>  
            </div>
        </div>
    );
}
