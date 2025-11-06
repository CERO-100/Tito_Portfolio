"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BoxReveal } from "../reveal-animations";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      className="min-h-screen max-w-7xl mx-auto px-4 md:px-8 relative py-20 md:py-32 scroll-mt-32"
    >
      <Link href={"#services"}>
        <BoxReveal width="100%">
          <h2
            className={cn(
              "bg-clip-text text-4xl text-center text-transparent md:text-7xl pb-8",
              "bg-gradient-to-b from-black/80 to-black/50",
              "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
            )}
          >
            SERVICES
          </h2>
        </BoxReveal>
      </Link>
      <p className="text-center text-neutral-600 dark:text-neutral-300 mb-16 max-w-2xl mx-auto">
        As a freelance Full-Stack Developer, I offer a range of services to help
        bring your ideas to life.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => (
          <Card
            key={index}
            className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border-gray-200 dark:border-gray-800 hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader>
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {service.icon}
              </div>
              <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              <CardDescription className="text-sm">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-4">
          Interested in working together?
        </p>
        <Link href="/#contact">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-300">
            Get in Touch
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
