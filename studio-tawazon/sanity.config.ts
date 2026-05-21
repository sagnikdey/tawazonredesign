import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {siteStructure} from './structure/siteStructure'

export default defineConfig({
  name: 'default',
  title: 'Tawazon',

  projectId: 'cy0u4akg',
  dataset: 'production',

  plugins: [structureTool({structure: siteStructure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
