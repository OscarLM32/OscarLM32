import { FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';

export interface SkillCard {
    icon: JSX.Element;
    title: string;
    description: string;
}
  
export const skills: SkillCard[] = [
    {
        icon: <FaCode className="w-8 h-8" />,
        title: "Frontend Development",
        description: "Building responsive and interactive user interfaces with React, JavaScript and modern CSS frameworks."
    },
    {
        icon: <FaServer className="w-8 h-8" />,
        title: "Backend Development",
        description: "Developing scalable server-side applications using ASP.NET Core and RESTful APIs."
    },
    {
        icon: <FaMobile className="w-8 h-8" />,
        title: "Mobile Development",
        description: "Creating cross-platform mobile applications with Unity in C#."
    },
    {
        icon: <FaDatabase className="w-8 h-8" />,
        title: "Database Design",
        description: "Designing and implementing efficient database solutions with MySQL"
    }
];