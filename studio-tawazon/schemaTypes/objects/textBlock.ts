import {defineField, defineType} from 'sanity'

/** Reusable paragraph block for arrays of long text. */
export const textBlock = defineType({
  name: 'textBlock',
  title: 'Paragraph',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {text: 'text'},
    prepare({text}) {
      const t = typeof text === 'string' ? text : ''
      return {title: t ? t.slice(0, 80) + (t.length > 80 ? '…' : '') : 'Paragraph'}
    },
  },
})
