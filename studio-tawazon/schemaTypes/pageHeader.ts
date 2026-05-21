import {defineField, defineType} from 'sanity'

export const pageHeader = defineType({
  name: 'pageHeader',
  title: 'Page header',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Page slug',
      description:
        'Stable key matching the site route key (e.g. about-us for /about-us). Set manually if the auto slug differs.',
      type: 'slug',
      options: {
        source: 'heading',
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'badgeLabel',
      title: 'Badge label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Heading (H1)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'heading', subtitle: 'slug.current'},
    prepare({title, subtitle}) {
      return {title: title ?? 'Page header', subtitle: subtitle ? `/${subtitle}` : ''}
    },
  },
})
