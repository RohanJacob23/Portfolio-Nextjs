import ProjectGallary from "@/components/ProjectGallary";
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
      src: "/project/clearCount.png",
    },
    {
      id: 2,
      title: "Chat Application",
      description:
        "Chat App built with Nextjs 14, pusher, tailwindcss and mantine UI.",
      liveLink: "https://chat-app-mu-nine.vercel.app",
      githubLink: "https://github.com/RohanJacob23/chat-app-2.0",
      src: "/project/chatApp.png",
    },
    {
      id: 3,
      title: "Task Manangement App",
      description:
        "Built using Nextjs 13 with drag and drop feature along with user authentication.",
      liveLink: "https://task-management-board.vercel.app",
      githubLink: "https://github.com/RohanJacob23/Task-Management-Board",
      src: "/project/taskManagement.png",
    },

    {
      id: 5,
      title: "Cat Wiki",
      description:
        "Cat Wiki is built with Nextjs 13. It fetches the data from the api and display the cat characteristics.",
      liveLink: "https://my-cat-wiki.vercel.app",
      githubLink: "https://github.com/RohanJacob23/MyCat-Wiki",
      src: "/project/catWiki.png",
    },
    {
      id: 6,
      title: "Spotify clone",
      description:
        "Spotify clone built with Next.js 13 along with Spotify API integration.",
      liveLink: "https://spotify-clone-git-main-rohanjacob23.vercel.app",
      githubLink: "https://github.com/RohanJacob23/Spotify-Clone",
      src: "/project/spotifyClone.png",
    },
    {
      id: 7,
      title: "Dictionary Web App",
      description:
        "Dictionary web app built using react and dictionary web api.",
      liveLink: "https://dictionary-web-app-eosin.vercel.app",
      githubLink: "https://github.com/RohanJacob23/Dictionary-Web-App",
      src: "/project/dictionary.jpg",
    },
    {
      id: 4,
      title: "Todo Web App",
      description: "Simple Todo App built with react.",
      liveLink: "https://todo-app-beta-lemon.vercel.app",
      githubLink: "https://github.com/RohanJacob23/todo-app",
      src: "/project/todo.jpg",
    },
  ];
  return (
    <div className="h-full max-h-[calc(100dvh-64px)] overflow-y-auto p-4 text-xl md:max-h-[calc(100dvh-68px)] md:p-8">
      <h2 className="mb-4 border-none">Projects</h2>

      <ProjectGallary projects={projects} />
    </div>
  );
}
