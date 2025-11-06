"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BoxReveal } from "../reveal-animations";
import {
  Code,
  FileText,
  Laptop,
  PenTool,
  Server,
  Workflow,
} from "lucide-react";

const SERVICES = [
  {
    icon: <Laptop className="w-12 h-12" />,
    title: "Full-Stack Web Development",
    description:
      "Building modern, responsive web applications using MERN stack, Next.js, Django, and PHP with MySQL/PostgreSQL databases.",
    technologies: ["React", "Node.js", "Django", "PHP", "MySQL", "MongoDB"],
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: "Custom Software Development",
    description:
      "Creating tailored software solutions for businesses including CRM systems, inventory management, and automation tools.",
    technologies: ["Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    icon: <FileText className="w-12 h-12" />,
    title: "LaTeX Documentation & Reports",
    description:
      "Professional project reports, academic papers, research documentation, and technical manuals formatted in LaTeX.",
    technologies: ["LaTeX", "Markdown", "Technical Writing"],
  },
  {
    icon: <Server className="w-12 h-12" />,
    title: "Cloud Deployment & DevOps",
    description:
      "Deploying and maintaining applications on AWS, managing servers, Docker containerization, and CI/CD pipelines.",
    technologies: ["AWS", "Docker", "Linux", "Nginx"],
  },
  {
    icon: <Workflow className="w-12 h-12" />,
    title: "AI-Enhanced Solutions",
    description:
      "Integrating AI tools and developing intelligent features using prompt engineering, ChatGPT API, and machine learning.",
    technologies: ["ChatGPT", "Claude", "Gemini", "ML/AI"],
  },
  {
    icon: <PenTool className="w-12 h-12" />,
    title: "UI/UX Design & Prototyping",
    description:
      "Creating beautiful, user-friendly interfaces with modern design systems using Tailwind CSS, Bootstrap, and component libraries.",
    technologies: ["Tailwind", "Bootstrap", "Figma", "Responsive Design"],
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="min-h-screen max-w-7xl mx-auto px-4 md:px-8 scroll-mt-20 py-20"
    >
      <Link href={"#services"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-8"
          )}
        >
          SERVICES
        </h2>
      </Link>
      <p className="text-center text-neutral-600 dark:text-neutral-400 mb-16 max-w-2xl mx-auto">
        As a freelance Full-Stack Developer, I offer a range of services to help
        bring your ideas to life.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className={cn(
              "group relative overflow-hidden rounded-xl border transition-all duration-300",
              "bg-white/50 dark:bg-black/50 backdrop-blur-sm",
              "border-neutral-200 dark:border-neutral-800",
              "hover:shadow-2xl hover:scale-[1.02]",
              "hover:border-neutral-300 dark:hover:border-neutral-700"
            )}
          >
            <div className="p-6">
              <div className="mb-4 text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-neutral-100">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
          Interested in working together?
        </p>
        <Link href="/#contact">
          <button
            className={cn(
              "px-8 py-3 rounded-lg font-semibold transition-all duration-300",
              "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
              "dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700",
              "text-white shadow-lg hover:shadow-xl hover:scale-105"
            )}
          >
            Get in Touch
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
