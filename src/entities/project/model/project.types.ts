export interface ProjectParagraph {
  text: string;
  emphasized?: boolean;
}

export interface ProjectGroup {
  title: string;
  introduction?: string;
  items: string[];
  displayAsTags?: boolean;
}

export interface Project {
  id: string;
  tag: string;
  title: string;
  summary: string;
  detailTitle: string;
  paragraphs: ProjectParagraph[];
  groups: ProjectGroup[];
}
