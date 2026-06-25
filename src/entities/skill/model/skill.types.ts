export interface Skill {
  id: string;
  name: string;
  icon: string;
  level: number;
  color: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  title: string;
  skills: Skill[];
}
