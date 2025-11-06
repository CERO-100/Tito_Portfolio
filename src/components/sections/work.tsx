"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";

import SmoothScroll from "../smooth-scroll";
import freelanceWork from "@/data/work";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const WorkSection = () => {
  return (
    <section id="work" className="max-w-7xl mx-auto md:h-[130vh] scroll-mt-20">
      <Link href={"#work"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16 mb-32",
            "bg-gradient-to-b from-black/90 to-black/60",
            "dark:bg-gradient-to-b dark:from-white/90 dark:to-white/50"
          )}
        >
          Freelance Work
        </h2>
      </Link>

      <div className="flex flex-col items-center justify-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-7xl">
          {freelanceWork.map((project, idx) => (
            <ProjectCard project={project} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Modal>
      <ModalTrigger className="flex justify-center group/modal-btn">
        <div className="rounded-md flex flex-1 w-full group-hover/modal-btn:shadow-2xl cursor-pointer overflow-hidden relative flex-col border border-zinc-700">
          <div className="relative h-[200px] w-full">
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-zinc-900">
            <h3 className="font-bold text-white text-sm mb-2">
              {project.title}
            </h3>
            <p className="text-zinc-400 text-xs mb-3">{project.category}</p>
            <div className="flex flex-wrap gap-1">
              {[...project.skills.frontend, ...project.skills.backend]
                .slice(0, 3)
                .map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs rounded-full"
                    style={{
                      backgroundColor: skill.bg,
                      color: skill.fg,
                    }}
                  >
                    {skill.title}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </ModalTrigger>
      <ModalBody>
        <SmoothScroll isInsideModal={true}>
          <ModalContent className="overflow-y-scroll max-h-[80vh]">
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              {project.title}
            </h4>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              {project.screenshots.map((screenshot, idx) => (
                <Image
                  key={"images" + idx}
                  src={`${project.src
                    .split("/")
                    .slice(0, -1)
                    .join("/")}/${screenshot}`}
                  alt="project screenshot"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-auto w-full shadow-xl"
                />
              ))}
            </div>
            <div className="max-w-2xl mx-auto">{project.content}</div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <FloatingDock
              items={[
                ...project.skills.backend.map((skill, idx) => ({
                  title: skill.title,
                  icon: <div className="text-2xl">{skill.icon}</div>,
                  href: "#",
                })),
                ...project.skills.frontend.map((skill, idx) => ({
                  title: skill.title,
                  icon: <div className="text-2xl">{skill.icon}</div>,
                  href: "#",
                })),
              ]}
            />
          </ModalFooter>
        </SmoothScroll>
      </ModalBody>
    </Modal>
  );
};
