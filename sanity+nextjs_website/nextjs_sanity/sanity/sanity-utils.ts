import { Project } from "@/types/Project.1";
import { Page } from "@/types/Page";
import {createClient,groq} from "next-sanity";
import  clientConfig from "./config/client-config"

export async function getProjects(): Promise<Project[]>{

   return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
            _id,
            _createAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
            
        }`
    )

}

export async function getProject(slug:string): Promise<Project>{
    return createClient(clientConfig).fetch(
            groq`*[_type == "project" && slug.current == $slug][0]{
                _id,
                _createAt,
                name,
                "slug": slug.current,
                "image": image.asset->url,
                url,
                content,
                
            }`,
            {
                slug 
            }
        )
}

export async function getPages(): Promise<Page[]>{
    return createClient(clientConfig).fetch(
        groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,

        }`
    )
}

export async function getPage(slug:string):Promise<Page>{
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug ][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
        }`,
        {slug}
    )
}
