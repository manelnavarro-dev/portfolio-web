import type { CSSProperties } from "react";
import type { Skill } from "@/entities/skill/model/skill.types";

interface SkillItemProps {
  skill: Skill;
}

export function SkillItem({ skill }: SkillItemProps) {
  const style = { "--level": `${skill.level}%` } as CSSProperties;

  return (
    <li className="skill-item" data-color={skill.color} style={style}>
      <div className="skill-name">
        <img className="skill-icon" src={skill.icon} alt="" aria-hidden="true" />
        <span>{skill.name}</span>
      </div>
      <div className="skill-level" aria-label={`Nivel orientativo: ${skill.level}%`}>
        <span />
      </div>
    </li>
  );
}
