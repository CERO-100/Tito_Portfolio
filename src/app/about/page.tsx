"use client";
import React, { useEffect, useState } from "react";
import { DiMongodb, DiNginx, DiNpm, DiPostgresql, DiVim } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaVuejs,
  FaYarn,
  FaJava,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiKubuntu,
  SiPm2,
  SiPrettier,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
  SiPython,
  SiDjango,
  SiMysql,
  SiBootstrap,
  SiOpenai,
  SiAnthropic,
  SiGooglegemini,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbBrandGithubCopilot } from "react-icons/tb";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbTerminal2 } from "react-icons/tb";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "rettytito@gmail.com",
    href: "mailto:rettytito@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Phone",
    content: "+91-8138953814",
    href: "tel:+918138953814",
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/titoretty",
    content: "/in/titoretty",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/CERO-100",
    content: "/CERO-100",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  { name: "Python", icon: <SiPython size={50} /> },
  { name: "Java", icon: <FaJava size={50} /> },
  { name: "JavaScript", icon: <RiJavascriptFill size={50} /> },
  { name: "TypeScript", icon: <SiTypescript size={50} /> },
  { name: "React", icon: <FaReact size={50} /> },
  { name: "Next.js", icon: <RiNextjsFill size={50} /> },
  { name: "Node.js", icon: <FaNodeJs size={50} /> },
  { name: "Django", icon: <SiDjango size={50} /> },
  { name: "Express", icon: <SiExpress size={50} /> },
  { name: "MongoDB", icon: <DiMongodb size={50} /> },
  { name: "PostgreSQL", icon: <DiPostgresql size={50} /> },
  { name: "MySQL", icon: <SiMysql size={50} /> },
  { name: "HTML5", icon: <FaHtml5 size={50} /> },
  { name: "CSS3", icon: <FaCss3 size={50} /> },
  { name: "Tailwind", icon: <RiTailwindCssFill size={50} /> },
  { name: "Bootstrap", icon: <SiBootstrap size={50} /> },
  { name: "Git", icon: <FaGit size={50} /> },
  { name: "GitHub", icon: <FaGithub size={50} /> },
  { name: "Docker", icon: <FaDocker size={50} /> },
  { name: "AWS", icon: <FaAws size={50} /> },
  { name: "Linux", icon: <FaLinux size={50} /> },
  { name: "Firebase", icon: <RiFirebaseFill size={50} /> },
  { name: "VS Code", icon: <SiVisualstudiocode size={50} /> },
  { name: "Vim", icon: <DiVim size={50} /> },
  { name: "NPM", icon: <DiNpm size={50} /> },
  { name: "Yarn", icon: <FaYarn size={50} /> },
  { name: "Nginx", icon: <DiNginx size={50} /> },
  { name: "Terminal", icon: <TbTerminal2 size={50} /> },
  { name: "Prettier", icon: <SiPrettier size={50} /> },
  { name: "Vercel", icon: <SiVercel size={50} /> },
  // AI Tools
  { name: "ChatGPT", icon: <SiOpenai size={50} /> },
  { name: "Claude AI", icon: <SiAnthropic size={50} /> },
  { name: "Google Gemini", icon: <SiGooglegemini size={50} /> },
  { name: "GitHub Copilot", icon: <TbBrandGithubCopilot size={50} /> },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square bg-zinc-800"
                  alt="me"
                  src="/assets/me1.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Tito Retty</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  MCA Student & Full-Stack Developer
                </div>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  English | Malayalam
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md"
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <main className="basis-3/4 w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-roboto">
              Hey! I&apos;m Tito Retty, an MCA student at Musaliar College of
              Engineering & Technology and a freelance Full-Stack Developer. I
              specialize in Python, Java, MERN stack, SQL, PHP, and cloud
              deployments with AWS. I&apos;m passionate about building modern
              web applications, AI-enhanced features, and automation workflows
              that solve real-world problems.
            </p>
            <p className="mb-10">
              I have a strong foundation in Cyber Security, AI, and Cloud
              Computing, with hands-on experience in Prompt Engineering and
              AI-based project development using tools like ChatGPT, Claude AI,
              Google Gemini, and GitHub Copilot. I leverage these AI tools to
              enhance productivity, generate code, debug complex issues, and
              create innovative solutions. I also enjoy creating structured
              documentation using LaTeX and Markdown. Outside of tech, I explore
              design, mentoring, and creating impactful content while enjoying a
              good cup of coffee ☕.
            </p>

            <h1 className="text-3xl mb-10 lg:md-20">Stuff I use</h1>

            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Tools"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
