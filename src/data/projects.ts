export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description: "A smart task management application that uses AI to prioritize and categorize tasks, built with React and OpenAI's GPT-3 API. The application helps users organize their work more efficiently by automatically categorizing tasks and suggesting optimal scheduling based on priority and deadline.",
    image: "https://via.placeholder.com/600x400",
    technologies: ["React", "TypeScript", "OpenAI API", "TailwindCSS", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project1",
    demo: "https://project1-demo.com",
    features: [
      "AI-powered task categorization and prioritization",
      "Real-time task updates and notifications",
      "Collaborative task management with team members",
      "Custom task templates and recurring tasks",
      "Advanced analytics and productivity insights",
      "Mobile-responsive design for on-the-go access"
    ]
  },
  {
    id: 2,
    title: "Real-time Collaboration Platform",
    description: "A collaborative workspace allowing real-time document editing and team communication with WebSocket integration. This platform enables teams to work together seamlessly, featuring live document editing, instant messaging, and project management tools all in one place.",
    image: "https://via.placeholder.com/600x400",
    technologies: ["Next.js", "WebSocket", "MongoDB", "Docker", "Redis", "AWS"],
    github: "https://github.com/yourusername/project2",
    demo: "https://project2-demo.com",
    features: [
      "Real-time collaborative document editing",
      "Integrated team chat and video calls",
      "Version control and document history",
      "Project timeline and milestone tracking",
      "Automated workflow management",
      "Advanced permission and role management"
    ]
  }
];