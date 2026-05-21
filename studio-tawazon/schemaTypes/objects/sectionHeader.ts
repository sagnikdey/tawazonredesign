import {defineField, defineType} from 'sanity'

/** Reusable block: badge + section title + optional lead. Embed on any `siteSection` or future types. */
export const sectionHeader = defineType({
  name: 'sectionHeader',
  title: 'Section header',
  type: 'object',
  fields: [
    defineField({
      name: 'badgeLabel',
      title: 'Badge label',
      type: 'string',
      description: 'Optional pill above the title.',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lead',
      title: 'Lead paragraph',
      type: 'text',
      rows: 4,
      description: 'Short text under the title (e.g. intro line).',
    }),
  ],
  preview: {
    select: {title: 'title', badge: 'badgeLabel'},
    prepare({title, badge}) {
      return {title: title ?? 'Section header', subtitle: badge ?? ''}
    },
  },
})
