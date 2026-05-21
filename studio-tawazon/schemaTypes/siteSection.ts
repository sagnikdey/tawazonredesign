import {defineArrayMember, defineField, defineType} from 'sanity'

/**
 * Reusable marketing section (two-column body + optional media).
 * Fetch on the site with `key` (e.g. about-ghobash) and render via `<SiteSection sectionKey="…" />`.
 */
export const siteSection = defineType({
  name: 'siteSection',
  title: 'Site section',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'Section key',
      description:
        'Stable id: used in code (e.g. about-ghobash), HTML id on <section>, and for styling hooks.',
      type: 'slug',
      options: {
        source: 'header.title',
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
      name: 'sectionVariant',
      title: 'Section background',
      description: 'Maps to design tokens / Tailwind background for color differentiation.',
      type: 'string',
      options: {
        list: [
          {title: 'Muted dark', value: 'mutedDark'},
          {title: 'Section alt', value: 'sectionAlt'},
          {title: 'Canvas', value: 'canvas'},
          {title: 'Default (no token)', value: 'default'},
        ],
        layout: 'radio',
      },
      initialValue: 'mutedDark',
    }),
    defineField({
      name: 'header',
      title: 'Header',
      type: 'sectionHeader',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cta',
      title: 'Header CTA (optional)',
      type: 'siteSectionCta',
    }),
    defineField({
      name: 'bodyText',
      title: 'Body paragraph',
      type: 'text',
      rows: 8,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlights',
      title: 'Highlight bullets',
      type: 'array',
      of: [defineArrayMember({type: 'siteSectionHighlight'})],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'media',
      title: 'Side image',
      description: 'Optional. Right column; falls back to a site default when empty.',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'header.title', subtitle: 'key.current', variant: 'sectionVariant'},
    prepare({title, subtitle, variant}) {
      return {
        title: title ?? 'Site section',
        subtitle: [subtitle ? `#${subtitle}` : '', variant].filter(Boolean).join(' · '),
      }
    },
  },
})
