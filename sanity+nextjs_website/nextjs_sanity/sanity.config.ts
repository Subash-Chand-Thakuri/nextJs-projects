import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';

import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: "1mau9ny9",
    dataset: "production",
    title: "My Portfolio Website",
    apiVersion: "2024-01-12",
    basePath: "/admin",
    plugins: [deskTool()],
    schema : { types: schemas}
})

export default config;