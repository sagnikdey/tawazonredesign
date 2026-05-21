import {defineField, defineType} from 'sanity'

/** Picks any document from Site sections (two-column marketing block). */
export const pageModuleSiteSection = defineType({
  name: 'pageModuleSiteSection',
  title: 'Site section',
  type: 'object',
  fields: [
    defineField({
      name: 'editorLabel',
      title: 'List label (optional)',
      type: 'string',
      description: 'e.g. “Ghobash block” — for editors only.',
    }),
    defineField({
      name: 'section',
      title: 'Section',
      type: 'reference',
      to: [{type: 'siteSection'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {label: 'editorLabel'},
    prepare({label}) {
      return {
        title: label || 'Site section',
        subtitle: 'Reference → Site sections',
      }
    },
  },
})
