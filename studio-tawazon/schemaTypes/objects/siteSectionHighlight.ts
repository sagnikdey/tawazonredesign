import {defineField, defineType} from 'sanity'

export const siteSectionHighlight = defineType({
  name: 'siteSectionHighlight',
  title: 'Highlight line',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'text'},
    prepare({title}) {
      const t = typeof title === 'string' ? title : ''
      return {title: t ? t.slice(0, 72) + (t.length > 72 ? '…' : '') : 'Highlight'}
    },
  },
})
