import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Project Page",
};

export default function page() {
  const projects = [
    {
      id: 1,
      title: "Clear Count",
      description:
        "A SaaS website empowers users to effortlessly record their transactions and gain insightful analytics through a personalized dashboard.",
      liveLink: "https://clear-count.vercel.app/",
      githubLink: "https://github.com/RohanJacob23/clear-count",
    },
    {
      id: 2,
      title: "Chat Application",
      description:
        "Chat App built with Nextjs 14, pusher, tailwindcss and mantine UI.",
      liveLink: "https://chat-app-mu-nine.vercel.app",
      githubLink: "https://github.com/RohanJacob23/chat-app-2.0",
    },
    {
      id: 3,
      title: "Task Manangement App",
      description:
        "Built using Nextjs 13 with drag and drop feature along with user authentication.",
      liveLink: "https://task-management-board.vercel.app",
      githubLink: "https://github.com/RohanJacob23/Task-Management-Board",
    },

    {
      id: 5,
      title: "Cat Wiki",
      description:
        "Cat Wiki is built with Nextjs 13. It fetches the data from the api and display the cat characteristics.",
      liveLink: "https://my-cat-wiki.vercel.app",
      githubLink: "https://github.com/RohanJacob23/MyCat-Wiki",
    },
    {
      id: 6,
      title: "Spotify clone",
      description:
        "Spotify clone built with Next.js 13 along with Spotify API integration.",
      liveLink: "https://spotify-clone-git-main-rohanjacob23.vercel.app",
      githubLink: "",
    },
    {
      id: 7,
      title: "Dictionary Web App",
      description:
        "Dictionary web app built using react and dictionary web api.",
      liveLink: "https://dictionary-web-app-eosin.vercel.app",
      githubLink: "https://github.com/RohanJacob23/Dictionary-Web-App",
    },
    {
      id: 4,
      title: "Todo Web App",
      description: "Simple Todo App built with react.",
      liveLink: "https://todo-app-beta-lemon.vercel.app",
      githubLink: "https://github.com/RohanJacob23/todo-app",
    },
  ];
  return (
    <div className="flex-1 p-4 md:p-8 space-y-4 text-xl">
      <h2 className="border-none mb-4">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-x-4 max-w-screen-xl">
        {projects.map(({ description, id, title, liveLink, githubLink }) => (
          <ProjectCard
            key={id}
            description={description}
            title={title}
            liveLink={liveLink}
            githubLink={githubLink}
          />
        ))}
      </div>
    </div>
  );
}
