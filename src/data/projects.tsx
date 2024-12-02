import runTWebAppImage from "../assets/RunT-web-app-login.png"
import runTApiImage from "../assets/RunT-API-docs.png"

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  features: string[];
  page: JSX.Element;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "RunT Web App",
    description: "A web app that helps hobbyist and professional runners find groups and events in their local area.",
    image: runTWebAppImage,
    technologies: ["React", "Axios", "BootStrap", "React-Query", "JavaScript"],
    github: "https://github.com/OscarLM32/RunningGroupWebApp",
    features: [
      "User registration and personalized profiles",
      "Location based searches",
      "Search and join local running clubs",
      "Discover and register for upcoming events",
    ],
    page: <div>Hello world from RunT Web App</div>
  },
  {
    id: 2,
    title: "RunT API",
    description: "API that handles all the server-side logic of an app that brings people that enjoy running together.",
    image: runTApiImage,
    technologies: ["ASP.NET", "RESTful", "AI", "MySQL", "Entity Framework"],
    github: "https://github.com/OscarLM32/RunningGroupAPI",
    features: [
      "User registration and JWT token based authorization",
    ],
    page: <div>Hello world from RunT API</div>
  }
];