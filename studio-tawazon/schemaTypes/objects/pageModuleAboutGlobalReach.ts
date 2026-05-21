import {defineField, defineType} from 'sanity'

/** About page hero: map + KPIs + intro (driven by `aboutPage` singleton + page headers). */
export const pageModuleAboutGlobalReach = defineType({
  name: 'pageModuleAboutGlobalReach',
  title: 'About — global reach',
  type: 'object',
  fields: [
    defineField({
      name: 'editorLabel',
      title: 'List label (optional)',
      type: 'string',
      description: 'Helps identify this block when reordering modules.',
    }),
  ],
  preview: {
    select: {label: 'editorLabel'},
    prepare({label}) {
      return {
        title: label || 'About — global reach',
        subtitle: 'Hero, map & KPIs (aboutPage + page header)',
      }
    },
  },
})
