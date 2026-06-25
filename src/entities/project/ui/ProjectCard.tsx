import type { KeyboardEvent } from "react";
import type { Project } from "@/entities/project/model/project.types";

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  isClosing: boolean;
  onToggle: () => void;
  cardRef: (element: HTMLElement | null) => void;
}

export function ProjectCard({
  project,
  isActive,
  isClosing,
  onToggle,
  cardRef,
}: ProjectCardProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggle();
    }
  };

  return (
    <article
      ref={cardRef}
      className={`project${isActive ? " is-active" : ""}${isClosing ? " is-closing" : ""}`}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      aria-controls={`project-panel-${project.id}`}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
    >
      <span className="project__tag">{project.tag}</span>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
    </article>
  );
}
