import {defineArrayMember, defineField, defineType} from 'sanity'

const defaultPrimaryLinks = [
  {_key: 'l1', _type: 'linkItem', label: 'Industries', href: '/industries'},
  {_key: 'l2', _type: 'linkItem', label: 'Products', href: '/products'},
  {_key: 'l3', _type: 'linkItem', label: 'Resources', href: '/resources'},
  {_key: 'l4', _type: 'linkItem', label: 'Suppliers', href: '/suppliers'},
  {_key: 'l5', _type: 'linkItem', label: 'About Us', href: '/about-us'},
  {_key: 'l6', _type: 'linkItem', label: 'Sustainability', href: '/sustainability'},
  {_key: 'l7', _type: 'linkItem', label: 'Media', href: '/media'},
  {_key: 'l8', _type: 'linkItem', label: 'Careers', href: '/careers'},
  {_key: 'l9', _type: 'linkItem', label: 'Contact', href: '/contact'},
]

const defaultLanguages = [
  {_key: 'en', _type: 'languageOption', value: 'en', label: 'EN', enabled: true},
  {_key: 'ar', _type: 'languageOption', value: 'ar', label: 'AR', enabled: false},
  {_key: 'fr', _type: 'languageOption', value: 'fr', label: 'FR', enabled: false},
  {_key: 'sw', _type: 'languageOption', value: 'sw', label: 'SW', enabled: false},
  {_key: 'id', _type: 'languageOption', value: 'id', label: 'ID', enabled: false},
  {_key: 'hi', _type: 'languageOption', value: 'hi', label: 'HI', enabled: false},
]

export const navigation = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'primaryLinks',
      title: 'Primary navigation links',
      type: 'array',
      of: [defineArrayMember({type: 'linkItem'})],
      validation: (Rule) => Rule.required().min(1),
      initialValue: defaultPrimaryLinks,
    }),
    defineField({
      name: 'searchPath',
      title: 'Search link path',
      type: 'string',
      initialValue: '/products/search',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Header CTA label',
      type: 'string',
      initialValue: 'Contact',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaHref',
      title: 'Header CTA path',
      type: 'string',
      initialValue: '/contact',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'languageOptions',
      title: 'Language selector',
      type: 'array',
      of: [defineArrayMember({type: 'languageOption'})],
      initialValue: defaultLanguages,
    }),
    defineField({
      name: 'brandName',
      title: 'Brand name (header)',
      type: 'string',
      initialValue: 'Tawazon',
    }),
  ],
})
