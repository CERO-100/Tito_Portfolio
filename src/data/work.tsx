// Freelance Work Projects - properly typed for Project structure
import { Project } from "./projects";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import {
  SiPython,
  SiDjango,
  SiMysql,
  SiPhp,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import { Skill } from "./projects";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

const WORK_SKILLS = {
  python: {
    title: "Python",
    bg: "#3776AB",
    fg: "white",
    icon: <SiPython />,
  },
  django: {
    title: "Django",
    bg: "#092E20",
    fg: "white",
    icon: <SiDjango />,
  },
  mysql: {
    title: "MySQL",
    bg: "#4479A1",
    fg: "white",
    icon: <SiMysql />,
  },
  php: {
    title: "PHP",
    bg: "#777BB4",
    fg: "white",
    icon: <SiPhp />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "#7952B3",
    fg: "white",
    icon: <SiBootstrap />,
  },
  html: {
    title: "HTML5",
    bg: "#E34F26",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "#1572B6",
    fg: "white",
    icon: <SiCss3 />,
  },
  javascript: {
    title: "JavaScript",
    bg: "#F7DF1E",
    fg: "black",
    icon: <SiJavascript />,
  },
};

const freelanceWork: Project[] = [
  {
    id: "drugdetection",
    category: "Machine Learning",
    title: "Drug Detection System",
    src: `${BASE_PATH}/drugdetection/01.png`,
    screenshots: ["01.png"],
    live: "#",
    skills: {
      frontend: [WORK_SKILLS.html, WORK_SKILLS.css, WORK_SKILLS.bootstrap],
      backend: [WORK_SKILLS.python, WORK_SKILLS.django, WORK_SKILLS.mysql],
    },
    content: (
      <div>
        <TypographyP className="font-mono ">
          <strong>Freelance Project:</strong> Machine Learning-based system to
          detect and identify drugs from images using computer vision and neural
          networks. Features include image classification, drug identification,
          and detailed analysis reporting.
        </TypographyP>
        <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
        <ul className="list-disc ml-6 font-mono">
          <li>Image-based drug detection using ML</li>
          <li>Neural network classification</li>
          <li>Real-time analysis and reporting</li>
          <li>Drug identification database</li>
          <li>Admin dashboard for management</li>
        </ul>
        <TypographyP className="font-mono text-sm text-zinc-500 mt-4">
          * Client project - Source code confidential
        </TypographyP>
      </div>
    ),
  },
  {
    id: "forestmanagement",
    category: "Environmental Tech",
    title: "Forest Management System",
    src: `${BASE_PATH}/forestmanagement/01.png`,
    screenshots: ["01.png"],
    live: "#",
    skills: {
      frontend: [
        WORK_SKILLS.html,
        WORK_SKILLS.css,
        WORK_SKILLS.bootstrap,
        WORK_SKILLS.javascript,
      ],
      backend: [WORK_SKILLS.php, WORK_SKILLS.mysql],
    },
    content: (
      <div>
        <TypographyP className="font-mono ">
          <strong>Freelance Project:</strong> Tree inventory tracking system for
          managing forest resources, monitoring growth patterns, and maintaining
          detailed records of tree species, locations, and health status.
        </TypographyP>
        <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
        <ul className="list-disc ml-6 font-mono">
          <li>Tree inventory management</li>
          <li>Species classification and tracking</li>
          <li>GPS location mapping</li>
          <li>Growth monitoring system</li>
          <li>Health status reporting</li>
        </ul>
        <TypographyP className="font-mono text-sm text-zinc-500 mt-4">
          * Client project - Source code confidential
        </TypographyP>
      </div>
    ),
  },
  {
    id: "edpplatform",
    category: "Enterprise Software",
    title: "EDP Platform",
    src: `${BASE_PATH}/edpplatform/01.png`,
    screenshots: ["01.png"],
    live: "#",
    skills: {
      frontend: [
        WORK_SKILLS.html,
        WORK_SKILLS.css,
        WORK_SKILLS.bootstrap,
        WORK_SKILLS.javascript,
      ],
      backend: [WORK_SKILLS.php, WORK_SKILLS.mysql],
    },
    content: (
      <div>
        <TypographyP className="font-mono ">
          <strong>Freelance Project:</strong> Professional customer service
          platform for enterprise-level support management, ticket tracking, and
          customer relationship management with integrated communication tools.
        </TypographyP>
        <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
        <ul className="list-disc ml-6 font-mono">
          <li>Support ticket management</li>
          <li>Customer database and CRM</li>
          <li>Real-time communication system</li>
          <li>Analytics and reporting dashboard</li>
          <li>Multi-user role management</li>
        </ul>
        <TypographyP className="font-mono text-sm text-zinc-500 mt-4">
          * Client project - Source code confidential
        </TypographyP>
      </div>
    ),
  },
  {
    id: "attendancetracking",
    category: "Education Tech",
    title: "Attendance Tracking System",
    src: `${BASE_PATH}/attendancetracking/01.png`,
    screenshots: ["01.png"],
    live: "#",
    skills: {
      frontend: [
        WORK_SKILLS.html,
        WORK_SKILLS.css,
        WORK_SKILLS.bootstrap,
        WORK_SKILLS.javascript,
      ],
      backend: [WORK_SKILLS.php, WORK_SKILLS.mysql],
    },
    content: (
      <div>
        <TypographyP className="font-mono ">
          <strong>Freelance Project:</strong> QR code-based attendance system
          for educational institutions and corporate environments. Features
          include automated attendance marking, real-time reports, and
          comprehensive analytics.
        </TypographyP>
        <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
        <ul className="list-disc ml-6 font-mono">
          <li>QR code-based check-in/check-out</li>
          <li>Automated attendance recording</li>
          <li>Real-time attendance reports</li>
          <li>Leave management system</li>
          <li>Analytics dashboard for administrators</li>
        </ul>
        <TypographyP className="font-mono text-sm text-zinc-500 mt-4">
          * Client project - Source code confidential
        </TypographyP>
      </div>
    ),
  },
];

export default freelanceWork;
