import {defineArrayMember, defineField, defineType} from 'sanity'

export const footerLinkColumn = defineType({
  name: 'footerLinkColumn',
  title: 'Footer link column',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Column heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [defineArrayMember({type: 'linkItem'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'title', links: 'links'},
    prepare({title, links}) {
      const n = Array.isArray(links) ? links.length : 0
      return {title: title ?? 'Column', subtitle: `${n} link(s)`}
    },
  },
})
