import { Fragment, useEffect, useRef, useState } from "react";
import { projects } from "@/entities/project/data/projects";
import { ProjectCard } from "@/entities/project/ui/ProjectCard";
import { ProjectDetail } from "@/entities/project/ui/ProjectDetail";
import { preserveViewportPosition } from "@/shared/lib/preserveViewportPosition";
import { SectionHeading } from "@/shared/ui/SectionHeading";

const CLOSING_CLASS_DURATION = 1500;

export function ProjectsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [closingId, setClosingId] = useState<string | null>(null);
  const closingTimer = useRef<number | null>(null);
  const cardRefs = useRef(new Map<string, HTMLElement>());

  const markClosing = (id: string | null) => {
    if (closingTimer.current) window.clearTimeout(closingTimer.current);
    setClosingId(id);

    if (id) {
      closingTimer.current = window.setTimeout(() => setClosingId(null), CLOSING_CLASS_DURATION);
    }
  };

  const toggleProject = (id: string) => {
    const card = cardRefs.current.get(id) ?? null;

    preserveViewportPosition(card, () => {
      if (activeId === id) {
        markClosing(id);
        setActiveId(null);
        return;
      }

      markClosing(activeId);
      setActiveId(id);
    });
  };

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !activeId) return;
      const card = cardRefs.current.get(activeId) ?? null;
      preserveViewportPosition(card, () => {
        markClosing(activeId);
        setActiveId(null);
      });
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [activeId]);

  useEffect(
    () => () => {
      if (closingTimer.current) window.clearTimeout(closingTimer.current);
    },
    [],
  );

  return (
    <section id="proyectos" className="section section--alt">
      <div className="section__inner">
        <SectionHeading number="02" title="Proyectos" />

        <div className="project-list">
          {projects.map((project) => {
            const isActive = project.id === activeId;

            return (
              <Fragment key={project.id}>
                <ProjectCard
                  project={project}
                  isActive={isActive}
                  isClosing={project.id === closingId}
                  onToggle={() => toggleProject(project.id)}
                  cardRef={(element) => {
                    if (element) cardRefs.current.set(project.id, element);
                    else cardRefs.current.delete(project.id);
                  }}
                />

                {isActive && <ProjectDetail project={project} />}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
