import {defineArrayMember, defineField, defineType} from 'sanity'

/**
 * Composes a route from ordered modules (global reach, site sections, team, …).
 * In the app: `<PageModules pageSlug={document.slug} />`.
 */
export const sitePage = defineType({
  name: 'sitePage',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal title',
      description: 'For Studio only (e.g. About us).',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Page slug',
      description: 'URL segment: about-us → used in code as pageSlug="about-us".',
      type: 'slug',
      options: {
        source: 'title',
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
      name: 'modules',
      title: 'Page sections',
      description: 'Add blocks and drag to reorder. Each block is a section on the page.',
      type: 'array',
      of: [
        defineArrayMember({type: 'pageModuleAboutGlobalReach'}),
        defineArrayMember({type: 'pageModuleTeam'}),
        defineArrayMember({type: 'pageModuleSiteSection'}),
      ],
      validation: (Rule) => Rule.min(1).error('Add at least one section'),
    }),
  ],
  preview: {
    select: {title: 'title', slug: 'slug.current', count: 'modules.length'},
    prepare({title, slug, count}) {
      return {
        title: title ?? 'Page',
        subtitle: [slug ? `/${slug}` : '', typeof count === 'number' ? `${count} sections` : '']
          .filter(Boolean)
          .join(' · '),
      }
    },
  },
})
