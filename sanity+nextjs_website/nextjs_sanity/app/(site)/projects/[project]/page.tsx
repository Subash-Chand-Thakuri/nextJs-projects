import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function Project({
  params,
}: {
  params: {
    project: string;
  };
}) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div className="max-w-3xl mx-auto py-20">
      <header className="flex justify-between items-center ">
        <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent text-4xl drop-shadow-md font-extrabold">{project.name}</h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 rounded-lg text-gray-200 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition hover:cursor-pointer "
        >
          View Project
        </a>
      </header>

        <div className="text-lg text-gray-300 mt-5 ">
           <PortableText value= {project.content} />
        </div>

        <Image 
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-300 object-cover rounded-xl " 
        />


    </div>
  );
}
