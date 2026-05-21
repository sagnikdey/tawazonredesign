import {defineArrayMember, defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About us — global reach',
  type: 'document',
  fields: [
    defineField({
      name: 'introParagraphs',
      title: 'Intro paragraphs',
      description: 'Left column copy below the page title.',
      type: 'array',
      of: [defineArrayMember({type: 'textBlock'})],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'globalReachTitle',
      title: 'Secondary heading',
      description: 'e.g. Global Reach, Local Expertise',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'globalReachParagraphs',
      title: 'Secondary section paragraphs',
      type: 'array',
      of: [defineArrayMember({type: 'textBlock'})],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'mapImage',
      title: 'World map image',
      description: 'Optional. Falls back to the site default map if empty.',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'Recommended whenever you upload a custom map.',
        }),
      ],
    }),
    defineField({
      name: 'mapDots',
      title: 'Map markers',
      type: 'array',
      of: [defineArrayMember({type: 'aboutMapDot'})],
    }),
    defineField({
      name: 'kpis',
      title: 'KPI stats',
      type: 'array',
      of: [defineArrayMember({type: 'aboutKpi'})],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    prepare() {
      return {title: 'About us — global reach'}
    },
  },
})
