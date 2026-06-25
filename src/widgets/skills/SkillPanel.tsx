import type { SkillCategory } from "@/entities/skill/model/skill.types";
import { SkillItem } from "@/entities/skill/ui/SkillItem";
import { useOpeningAnimation } from "@/shared/hooks/useOpeningAnimation";

interface SkillPanelProps {
  category: SkillCategory;
}

export function SkillPanel({ category }: SkillPanelProps) {
  const isOpening = useOpeningAnimation(category.id);

  return (
    <article
      id={`skills-panel-${category.id}`}
      className={`skills-panel is-active${isOpening ? " is-opening" : ""}`}
      aria-hidden="false"
    >
      <h3>{category.title}</h3>
      <ul className="skills-list">
        {category.skills.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </ul>
    </article>
  );
}
