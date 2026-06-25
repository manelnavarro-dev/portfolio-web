import type { Project } from "@/entities/project/model/project.types";
import { useOpeningAnimation } from "@/shared/hooks/useOpeningAnimation";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const isOpening = useOpeningAnimation(project.id);

  return (
    <div
      id={`project-panel-${project.id}`}
      className={`project-detail is-active${isOpening ? " is-opening" : ""}`}
      aria-hidden="false"
    >
      <h3>{project.detailTitle}</h3>

      {project.paragraphs.map((paragraph) => (
        <p key={paragraph.text}>
          {paragraph.emphasized ? <strong>{paragraph.text}</strong> : paragraph.text}
        </p>
      ))}

      <div className="project-detail__grid">
        {project.groups.map((group) => (
          <div key={group.title}>
            <h4>{group.title}</h4>
            {group.introduction && <p>{group.introduction}</p>}
            <ul className={group.displayAsTags ? "project-detail__tags" : undefined}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
