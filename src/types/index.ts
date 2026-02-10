export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

export interface CaseStudyMeta {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  client: string;
  year: string;
  duration: string;
  role: string;
  techStack: string[];
  gradient: string;
  metrics: Metric[];
}

export interface CaseStudyChapter {
  number: number;
  title: string;
  content: string[];
  visual: {
    label: string;
    gradient: string;
  };
}

export interface CaseStudy extends CaseStudyMeta {
  chapters: CaseStudyChapter[];
  lessons: string[];
}

export interface Metric {
  value: string;
  label: string;
}

export interface Value {
  number: string;
  title: string;
  description: string;
}
