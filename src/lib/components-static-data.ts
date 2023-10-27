import clsx from "clsx";
import React from "react";
import { BsLayoutWtf, BsCalendar2Date, BsGlobe, BsLock, BsFiletypeDocx } from 'react-icons/bs'
import { SlRefresh } from 'react-icons/sl'

export const navLinks = [
    {
        text: 'Resume Builder',
        href: '/resume-builder'
    },
    {
        text: 'Job Posts',
        href: '/job-posts'
    },
    {
        text: 'Blog',
        href: '/blog'
    }
] as const;

const featureIconProps = {
    size: 30,
    color: '#3FE1DD',
    className: clsx("group-hover:text-white")
}

export const features = [
    {
        icon: React.createElement(BsLayoutWtf, featureIconProps),
        title: 'Resume Builder',
        description: 'Create professional resumes with ease using our intuitive resume builder. Input your information, select from various templates, and generate polished, personalized resumes tailored to your needs.'
    },
    {
        icon: React.createElement(BsCalendar2Date, featureIconProps),
        title: 'Job Application Manager',
        description: ''
    },
    {
        icon: React.createElement(BsGlobe, featureIconProps),
        title: 'Online Portfolio',
        description: "Showcase your skills and accomplishments with an online portfolio. Easily upload and display your work, projects, and achievements to impress potential employers or clients."
    },
    {
        icon: React.createElement(BsLock, featureIconProps),
        title: 'Data Privacy',
        description: "We prioritize your data privacy and security. Rest assured that your personal and professional information is safeguarded, and we adhere to strict data protection measures to keep your data confidential and secure."
    },
    {
        icon: React.createElement(SlRefresh, featureIconProps),
        title: 'Fluid Experience',
        description: "Enjoy a seamless and visually appealing user experience. Our site's responsive design ensures it looks and functions beautifully on all devices, providing an excellent user experience for everyone."
    },
    {
        icon: React.createElement(BsFiletypeDocx, featureIconProps),
        title: 'Download Multiple Formats',
        description: ''
    }
]