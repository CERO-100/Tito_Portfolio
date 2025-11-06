"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Self-Learning Tracker",
    description: `Full-stack productivity system with roadmaps, learning progress analytics, streak tracking, and motivational achievement badges.`,
    link: "https://github.com/CERO-100/Self_Leaning_Tracker",
    images: ["/assets/projects-screenshots/selflearningtracker/01.png"],
  },
  {
    id: 2,
    name: "Blood Bank Management System",
    description: `Role-based web system for managing blood donors, recipients, and request handling with secure authentication.`,
    link: "https://github.com/CERO-100/Blood-Bank",
    images: ["/assets/projects-screenshots/bloodbank/01.png"],
  },
  {
    id: 3,
    name: "Drug Detection System",
    description: `Machine Learning based system that detects drug composition patterns, predicts anomalies, and visualizes insights with confidence scoring.`,
    link: "#",
    images: ["/assets/projects-screenshots/drugdetection/01.png"],
  },
  {
    id: 4,
    name: "Code Relay Event Website",
    description: `Official college event site with fully responsive layout, event schedule, and registration section.`,
    link: "https://github.com/CERO-100/Code-Relay",
    images: [
      "/assets/projects-screenshots/coderelay/01.png",
      "/assets/projects-screenshots/coderelay/02.png",
    ],
  },
  {
    id: 5,
    name: "College Productivity Website",
    description: `Centralized portal containing semester materials, question papers, study notes, and organized academic resources.`,
    link: "https://github.com/CERO-100/College-Productivity-Website",
    images: ["/assets/projects-screenshots/collegeproductivity/01.png"],
  },
  {
    id: 6,
    name: "Game Genius Hub",
    description: `Gaming platform with walkthroughs, reviews, and an admin-controlled content management system.`,
    link: "https://github.com/CERO-100/Game-Genius-Hub",
    images: ["/assets/projects-screenshots/gamegeniushub/01.png"],
  },
  {
    id: 7,
    name: "Guess the Number",
    description: `Interactive game using random number logic, hints, attempt limits, and restart option for engaging gameplay.`,
    link: "https://github.com/CERO-100/GUESS-THE-NUMBER",
    images: ["/assets/projects-screenshots/guessthenumber/01.png"],
  },
  {
    id: 8,
    name: "Forest Resource Management System",
    description: `Django-based environmental management platform for tracking resources, analytics, and forest data.`,
    link: "#",
    images: ["/assets/projects-screenshots/forestmanagement/01.png"],
  },
  {
    id: 9,
    name: "EDP Customer Service Platform",
    description: `Customer communication SaaS platform with profiles, messaging, support tickets, and analytics dashboard.`,
    link: "#",
    images: ["/assets/projects-screenshots/edpplatform/01.png"],
  },
  {
    id: 10,
    name: "College Attendance Tracking System",
    description: `QR-code based real-time attendance system with dashboards for teachers and administrators.`,
    link: "#",
    images: ["/assets/projects-screenshots/attendancetracking/01.png"],
  },
  {
    id: 11,
    name: "Mall Customers Analytics",
    description: `Analyzed customer demographics and behavior to forecast buying patterns using machine learning predictive models.`,
    link: "#",
    images: ["/assets/projects-screenshots/mallcustomers/01.png"],
  },
];

function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="Project Screenshots"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`Screenshot of ${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900"
                        width={300}
                        height={200}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl mb-2">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500 mb-3">
                  {project.description}
                </p>
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                  >
                    View on GitHub
                  </a>
                )}
                {project.link === "#" && (
                  <span className="inline-block px-3 py-1 text-xs bg-gray-700 text-gray-400 rounded-md">
                    Freelance Project
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
