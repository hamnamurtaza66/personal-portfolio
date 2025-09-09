"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Technologies We Use",
    id: "technologies",
    content: (
      <ul className="list-disc pl-2">
        <li>React & Next.js for Frontend Development</li>
        <li>Node.js & Express for Backend Development</li>
        <li>MongoDB & SQL for Database Management</li>
        <li>Tailwind CSS & Bootstrap for Styling</li>
        <li>Git & GitHub for Version Control</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certified MERN Stack Development Experts</li>
        <li>Recognized for Excellence in Web Solutions</li>
        <li>Trusted by International Clients</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About Us"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-base lg:text-lg">
            We are a dedicated group of developers specializing in MERN stack
            development, focused on building interactive and responsive web
            applications. Our expertise spans JavaScript, React, Redux, Node.js,
            Express, MongoDB, HTML, CSS, and Git. We are committed to continuous
            learning and innovation, always striving to expand our capabilities
            and deliver exceptional digital solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("technologies")}
              active={tab === "technologies"}
            >
              Technologies We Use
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
