import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import {
  ArrowDownUpIcon,
  ArrowUpRight,
  ExternalLink,
  Link2,
  MoveUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiPhp,
  SiDjango,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
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

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <SiPhp />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  django: {
    title: "Django",
    bg: "black",
    fg: "white",
    icon: <SiDjango />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: (
      <Image
        src="/assets/icons/openai-svgrepo-com_white.svg"
        alt="OpenAI"
        width={20}
        height={20}
      />
    ),
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: (
      <Image
        src="/assets/icons/icons8-java.svg"
        alt="Java"
        width={20}
        height={20}
      />
    ),
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    // 01. Self-Learning Tracker
    id: "selflearningtracker",
    category: "Educational Technology",
    title: "Self-Learning Tracker",
    src: "/assets/projects-screenshots/selflearningtracker/01.png",
    screenshots: ["01.png"],
    live: "https://github.com/CERO-100/Self_Leaning_Tracker",
    github: "https://github.com/CERO-100/Self_Leaning_Tracker",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.bootstrap,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.django, PROJECT_SKILLS.mysql],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            AI-powered tracker for students with progress visualization and
            scheduling. Integrated skill-based milestones, streak tracking, and
            motivation badges to keep learners engaged and motivated throughout
            their learning journey.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Skill-based roadmaps for structured learning paths</li>
            <li>Progress analytics with visual dashboards</li>
            <li>Motivational badges and achievements</li>
            <li>Task scheduling and time management tools</li>
            <li>Productivity dashboard with learning insights</li>
          </ul>
        </div>
      );
    },
  },
  {
    // 02. Blood Bank Management System
    id: "bloodbank",
    category: "Healthcare Tech",
    title: "Blood Bank Management System",
    src: "/assets/projects-screenshots/bloodbank/01.png",
    screenshots: ["01.png"],
    live: "https://github.com/CERO-100/BloodBank",
    github: "https://github.com/CERO-100/BloodBank",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.php, PROJECT_SKILLS.mysql],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Developed a role-based donor/recipient portal with secure admin
            controls. Features include donor registration, blood inventory
            management, recipient requests, and public donation features for
            emergency situations.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Role-based access control (Admin/Donor/Recipient)</li>
            <li>Comprehensive donor-recipient database management</li>
            <li>Public donation feature for emergencies</li>
            <li>Secure authentication and admin dashboard</li>
            <li>Blood inventory tracking and alerts</li>
          </ul>
        </div>
      );
    },
  },

  {
    // 04. Code Relay Event Website
    id: "coderelay",
    category: "Event Website",
    title: "Code Relay Event Website",
    src: "/assets/projects-screenshots/coderelay/01.png",
    screenshots: ["01.png", "02.png"],
    live: "https://cero-100.github.io/CodeRelay/",
    github: "https://github.com/CERO-100/CodeRelay",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.bootstrap,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Official website for Musaliar College&apos;s coding event. Features
            responsive design, event details, registration section, and event
            hero banner. Coordinated and developed as part of college leadership
            role.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Responsive event website design</li>
            <li>Event registration interface</li>
            <li>Event details and schedule display</li>
            <li>Hero banner and promotional content</li>
            <li>Mobile-friendly navigation</li>
          </ul>
        </div>
      );
    },
  },
  {
    // 05. College Productivity Website
    id: "collegeproductivity",
    category: "Educational Platform",
    title: "College Productivity Website",
    src: "/assets/projects-screenshots/collegeproductivity/01.png",
    screenshots: ["01.png"],
    live: "https://github.com/CERO-100/order.github.io",
    github: "https://github.com/CERO-100/order.github.io",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css],
      backend: [PROJECT_SKILLS.php],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Central hub for semester notes, question papers, and student
            resources. Features semester-wise content organization, fast
            navigation, and comprehensive study materials for students.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Semester-wise content organization</li>
            <li>Question papers archive</li>
            <li>Study materials repository</li>
            <li>Fast navigation and search</li>
            <li>Student-focused resource platform</li>
          </ul>
        </div>
      );
    },
  },
  {
    // 06. Game Genius Hub
    id: "gamegeniushub",
    category: "Gaming Platform",
    title: "Game Genius Hub",
    src: "/assets/projects-screenshots/gamegeniushub/01.png",
    screenshots: ["01.png"],
    live: "https://github.com/CERO-100/GameGeniusHub",
    github: "https://github.com/CERO-100/GameGeniusHub",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.php, PROJECT_SKILLS.mysql],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Gaming platform providing walkthroughs, reviews, and updates.
            Features CRUD-based admin management, secure authentication, game
            walkthroughs, and comprehensive reviews database.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Game walkthroughs and guides</li>
            <li>User reviews and ratings</li>
            <li>CRUD-based admin dashboard</li>
            <li>Secure authentication system</li>
            <li>Gaming news and updates section</li>
          </ul>
        </div>
      );
    },
  },
  {
    // 07. Guess the Number Game
    id: "guessthenumber",
    category: "Game Development",
    title: "Guess the Number",
    src: "/assets/projects-screenshots/guessthenumber/01.png",
    screenshots: ["01.png"],
    live: "https://cero-100.github.io/Guss_The_Number/main.html",
    github: "https://github.com/CERO-100/Guss_The_Number",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.bootstrap,
      ],
      backend: [PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Interactive game with random number generation, real-time hints,
            attempt limits, and restart option. Features responsive design and
            engaging gameplay mechanics.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Random number generation algorithm</li>
            <li>Real-time hints and feedback</li>
            <li>Attempt counter and limits</li>
            <li>Restart game functionality</li>
            <li>Interactive user interface</li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
