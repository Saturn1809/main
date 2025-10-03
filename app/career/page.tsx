"use client"; // since this component uses React hooks/icons

import React from "react";
import PageWrapper from "@/components/layout/Pagewrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faBriefcase, faClock } from "@fortawesome/free-solid-svg-icons";
import { ShinyButton } from "@/components/ui/shiny-button";

const CareersPage = () => {
    // --- Realistic Job Openings for Indoshyama Fertilizers ---
    const jobOpenings = [
        {
            title: "Sales Officer",
            location: "Lucknow, Uttar Pradesh",
            details: "Build strong relationships with dealers and farmers in your territory to drive growth and ensure product availability.",
            jobType: "Field Based",
            duration: "Full-Time",
            tag: "Sales & Marketing",
        },
        {
            title: "Marketing Executive",
            location: "Kanpur, Uttar Pradesh",
            details: "Develop and execute marketing campaigns, manage promotional materials, and organize farmer meet-ups.",
            jobType: "Office Based",
            duration: "Full-Time",
            tag: "Sales & Marketing",
        },
        {
            title: "Plant Supervisor",
            location: "Kanpur Dehat, Uttar Pradesh",
            details: "Oversee daily production operations, ensure quality control, and manage the plant workforce efficiently.",
            jobType: "On-Site",
            duration: "Full-Time",
            tag: "Plant Operations",
        },
        {
            title: "Lab Chemist",
            location: "Kanpur Dehat, Uttar Pradesh",
            details: "Conduct quality analysis of raw materials and finished fertilizer products to meet FCO standards.",
            jobType: "On-Site",
            duration: "Full-Time",
            tag: "Quality Control",
        },
        {
            title: "Field Agronomist",
            location: "Remote (Field Visits)",
            details: "Provide expert advice to farmers on crop nutrition, conduct field trials, and demonstrate product effectiveness.",
            jobType: "Remote Friendly",
            duration: "Full-Time",
            tag: "Agronomy & Research",
        },
    ];

    // --- Dynamically get unique categories ---
    const categories = [...new Set(jobOpenings.map(job => job.tag))];

    const CareerCard = ({ content }: { content: any }) => {
        const { tag, details, location, title, duration, jobType } = content;
        return (
            <div className="bg-white dark:bg-[#1E2735] border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl w-full p-6 md:p-8 mt-6">
                <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-12 md:col-span-8">
                        <div className="flex items-center flex-wrap mb-4">
                            <h4 className="text-2xl font-bold text-gray-800 dark:text-white mr-4">{title}</h4>
                            <span className="py-1 mt-2 px-3 rounded-full bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 text-sm font-semibold">
                                {tag}
                            </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{details}</p>
                        <div className="flex items-center flex-wrap gap-x-6 gap-y-2 text-gray-500 dark:text-gray-400">
                            <span className="flex items-center gap-2"><FontAwesomeIcon icon={faMapMarkerAlt} /> {location}</span>
                            <span className="flex items-center gap-2"><FontAwesomeIcon icon={faBriefcase} /> {jobType}</span>
                            <span className="flex items-center gap-2"><FontAwesomeIcon icon={faClock} /> {duration}</span>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex md:justify-end mt-4 md:mt-0">
                        <ShinyButton className="w-full md:w-auto bg-[#4BAF47] border-none text-white">
                            Apply Now
                        </ShinyButton>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <PageWrapper>
            <section className="py-14 md:py-24 bg-gray-50 dark:bg-[#0b1727] text-zinc-900 dark:text-white">
                <div className="container px-4 mx-auto">
                    {/* --- Hero Section --- */}
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-6xl font-extrabold capitalize text-gray-900 dark:text-white mb-4 mt-5 lg:mt-0">
                            Grow Your Career With Us
                        </h1>
                        <p className="text-xl text-[#4BAF47] font-semibold py-3 dark:text-gray-300">
                             " At Indoshyama, we're a family dedicated to nurturing the nation's agricultural soul. We are looking for passionate, talented individuals to join our mission to bring a smile with every harvest. "
                        </p>
                    </div>

                    {/* --- Dynamically Generated Job Sections --- */}
                    <div className="space-y-16">
                        {categories.map((category, i) => (
                            <div key={i}>
                                <div className="text-center md:text-left">
                                    <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">{category}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 mt-1">Open positions in our {category.toLowerCase()} team.</p>
                                </div>
                                <div>
                                    {jobOpenings
                                        .filter(job => job.tag === category)
                                        .map((content, j) => (
                                            <CareerCard content={content} key={j} />
                                        ))
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
};


export default CareersPage;