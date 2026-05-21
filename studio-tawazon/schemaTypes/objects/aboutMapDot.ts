import {defineField, defineType} from 'sanity'

export const aboutMapDot = defineType({
  name: 'aboutMapDot',
  title: 'Map marker',
  type: 'object',
  fields: [
    defineField({
      name: 'topPercent',
      title: 'Top position (%)',
      type: 'number',
      description: 'Distance from top of map area, 0–100.',
      validation: (Rule) => Rule.required().min(0).max(100),
    }),
    defineField({
      name: 'leftPercent',
      title: 'Left position (%)',
      type: 'number',
      description: 'Distance from left of map area, 0–100.',
      validation: (Rule) => Rule.required().min(0).max(100),
    }),
    defineField({
      name: 'label',
      title: 'Label (accessibility)',
      type: 'string',
      description: 'Optional; used for screen readers.',
    }),
  ],
  preview: {
    select: {top: 'topPercent', left: 'leftPercent', label: 'label'},
    prepare({top, left, label}) {
      return {
        title: label || 'Marker',
        subtitle: top != null && left != null ? `${top}% / ${left}%` : '',
      }
    },
  },
})
