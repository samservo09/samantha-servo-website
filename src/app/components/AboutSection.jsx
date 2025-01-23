"use client";
import React, { useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li><strong>Cloud Platforms:</strong> AWS, GCP</li>
                <li><strong>Programming Language:</strong> Python, SQL, R, C, C#</li>
                <li><strong>DevOps Tools: Git, GitHub</strong></li>
                <li><strong>Data Visualization:</strong> PowerBI, Tableau</li>
                <li><strong>Machine Learning:</strong> Jupyter Notebook, Google Colaboratory</li>
                <li><strong>Chatbot Development:</strong> Dialog Flow</li>
                <li><strong>Web Development Framework:</strong> Flutter, Laravel</li>
                <li><strong>Content Management Systems:</strong> Contentful</li>
                <li><strong>Others: </strong>Research, Technical and Creative Writing</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li><strong>Bachelor of Science in Computer Science</strong>
                <p>Pamantasan ng Lungsod ng Maynila<i> (University of City of Manila)</i></p>
                </li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>AWS Certified Cloud Practitioner</li>
                <li>Certified in Cybersecurity - International Information System Security Certification Consortium (ISC)2</li>
                <li>Completed DOST SPARTA’s Data Science Pathway </li>
                <li>DataCamp Certifications (check my Linkedin for more info)</li>
                <li>Online Training on Python - Bayan Academy</li>
            </ul>
        )
    }
]
const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        }
        )}
  return (
    <section className="text-[#687771]">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-10 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="relative w-full h-auto flex justify-center items-center">
          <Image
            src="/images/about-me.png"
            width={500}
            height={500}
            alt="About Me"
            className="rounded-lg object-contain"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 id="about" className="text-center text-4xl font-bold text-[#002347] mb-4 py-5">About Me</h2>
          <p className="text-base lg:text-lg">
            I want to use my diverse knowledge and skills in helping businesses have a numerical vision of their current business position and to have <strong>data-driven decisions</strong>.
          </p>
          <p className="text-base lg:text-lg">
            I currently have skills in <strong>Python</strong>, <strong>R</strong>, <strong>PowerBI/Tableau</strong>, and am currently learning more about Data Engineering and the Cloud <strong>(AWS/GCP)</strong>.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton 
                selectTab={() => handleTabChange("skills")} 
                active={tab === "skills"}>{" "}Skills{" "}</TabButton>
            <TabButton 
                selectTab={() => handleTabChange("education")} 
                active={tab === "education"}>{" "}Education{" "}</TabButton>
            <TabButton 
                selectTab={() => handleTabChange("certifications")} 
                active={tab === "certifications"}>{" "}Certifications{" "}</TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
