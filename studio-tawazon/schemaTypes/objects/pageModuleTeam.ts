import {defineField, defineType} from 'sanity'

export const pageModuleTeam = defineType({
  name: 'pageModuleTeam',
  title: 'Team',
  type: 'object',
  fields: [
    defineField({
      name: 'editorLabel',
      title: 'List label (optional)',
      type: 'string',
    }),
  ],
  preview: {
    select: {label: 'editorLabel'},
    prepare({label}) {
      return {
        title: label || 'Team',
        subtitle: 'Team grid section',
      }
    },
  },
})
