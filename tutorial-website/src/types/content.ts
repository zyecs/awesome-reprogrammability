export interface Tutorial {
  title: string;
  conference: string;
  date: string;
  duration: string;
  venue: {
    location: string;
    room: string;
  };
  timezone: string;
  official_link: string;
  contact: string;
  project_context: {
    parent_project: string;
    website_path: string;
    repository: string;
  };
}

export interface Session {
  order: number;
  title: string;
  presenter: string;
  duration: string;
  topics: string[];
  break_after?: string;
}

export interface Program {
  sessions: Session[];
}

export interface Speaker {
  name: string;
  affiliation: string;
  email: string;
  bio: string;
  sessions: string[];
}

export interface Speakers {
  speakers: Speaker[];
}

export interface Material {
  title: string;
  file?: string;
  url?: string;
  format?: string;
  platform?: string;
  description?: string;
}

export interface Materials {
  slides: Material[];
  videos: Material[];
  code: Material[];
  other_resources: Material[];
}

export interface ReadingItem {
  title: string;
  authors: string;
  url?: string;
  description: string;
  bibtex?: string;
}

export interface Reading {
  essential: ReadingItem[];
  advanced: ReadingItem[];
  reference: ReadingItem[];
}