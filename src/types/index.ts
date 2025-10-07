export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  Image: string;
}


export interface Blog {
    title: string;
    excerpt:string;
    date: string;
    readTime: string;
    slug:string;
}