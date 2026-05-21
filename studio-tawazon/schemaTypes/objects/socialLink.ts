import {defineField, defineType} from 'sanity'

export const socialLink = defineType({
  name: 'socialLink',
  title: 'Social link',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Iconify icon id',
      type: 'string',
      description: 'e.g. solar:brand-twitter-linear',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Accessible label',
      type: 'string',
    }),
  ],
  preview: {
    select: {title: 'label', subtitle: 'icon'},
    prepare({title, subtitle}) {
      return {title: title || 'Social', subtitle}
    },
  },
})
