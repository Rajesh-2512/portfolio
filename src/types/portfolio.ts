export interface ProjectCaseStudy {
  problem: string;
  system: string;
  architecture: string[];
  keyFeatures: string[];
  challenges: string[];
  impact: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  businessProblem: string;
  keyImpact: string;
  techStack: string[];
  highlights: string[];
  caseStudy: ProjectCaseStudy;
  badge?: string;
  metrics?: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary?: string;
  highlights: string[];
  current?: boolean;
}

export interface SkillItem {
  name: string;
  description?: string;
  highlight?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: SkillItem[];
}

export interface ImpactMetric {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
  highlight?: string;
}

export interface RealWorldSystem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  users: string;
  mainWorkflow: string;
  realtimeReqs: string;
  frontendChallenges: string;
  techStack: string[];
}

export interface EngineeringPrinciple {
  number: string;
  title: string;
  description: string;
  iconName: string;
}
