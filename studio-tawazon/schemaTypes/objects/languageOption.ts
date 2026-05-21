import {defineField, defineType} from 'sanity'

export const languageOption = defineType({
  name: 'languageOption',
  title: 'Language option',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Value (e.g. en)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label (e.g. EN)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'enabled',
      title: 'Selectable in UI',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {title: 'label', subtitle: 'value', enabled: 'enabled'},
    prepare({title, subtitle, enabled}) {
      return {
        title: `${title ?? ''} (${subtitle ?? ''})`,
        subtitle: enabled ? 'Enabled' : 'Disabled',
      }
    },
  },
})
