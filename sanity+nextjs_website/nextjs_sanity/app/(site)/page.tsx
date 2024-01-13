import {getProjects} from '@/sanity/sanity-utils'
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const  projects = await getProjects();

  return (
    <div >

      <h1 className='text-7xl font-extrabold'>Hello I&apos;m <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent'>Subash</span> !</h1>

      <p className='mt-3 text-2xl font-bold text-gray-200
       '>What&apos;s up everyone! Check out my cards!</p>

       <h2 className='mt-24 font-bold text-gray-300 text-3xl '>Cards:</h2>
      
       <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8'>

      {projects.map((project)=>(
        <Link
        href={`/projects/${project.slug}`}
        key={project._id}
        className='border-2 border-gray-300 rounded-lg my-2 p-1 hover:scale-105 hover:border-blue-500 transition-colors duration-300'>
          {
            project.image && (
              <Image 
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className='object-cover rounded-lg border border-gray-300'
              ></Image>
            )
          }
          <div
          className='mt-2 font-extrabold bg-gradient-to-l from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent '>
          {project.name}
          </div>
        </Link>
      ))}
      

      </div>
    </div>
    
  )
}

