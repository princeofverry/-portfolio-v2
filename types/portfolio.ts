export interface Project {
  id: number;
  title: string;
  category: "ai" | "be" | "fullstack";
  role: string;
  period: string;
  description: string;
  fullDetails: string;
  tags: string[];
  image: string;
  link: string;
  metrics: string[];
}

export interface ExperienceItem {
  title: string;
  org: string;
  type?: string;
  period: string;
  bulletPoints: string[];
}

export interface NoteItem {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  coverImage?: string;
  content?: string;
  takeaways?: string[];
}

export interface AwardItem {
  id: number;
  year: string;
  date: string;
  title: string;
  issuer: string;
  association?: string;
  description: string;
  category: string;
  badge?: string;
}

export type SkillCategoryMap = Record<string, string[]>;
