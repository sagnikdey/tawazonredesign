import {defineArrayMember, defineField, defineType} from 'sanity'

const defaultIndustryLinks = [
  {_key: 'i1', _type: 'linkItem', label: 'Coatings', href: '/industries/coatings'},
  {_key: 'i2', _type: 'linkItem', label: 'Inks', href: '/industries/inks'},
  {_key: 'i3', _type: 'linkItem', label: 'Construction Chemicals', href: '/industries/construction-chemicals'},
  {_key: 'i4', _type: 'linkItem', label: 'Plastics', href: '/industries/plastics'},
  {_key: 'i5', _type: 'linkItem', label: 'Packaging', href: '/industries/packaging'},
  {_key: 'i6', _type: 'linkItem', label: 'Fiberglass', href: '/industries/fiberglass'},
  {_key: 'i7', _type: 'linkItem', label: 'Rubber', href: '/industries/rubber'},
  {_key: 'i8', _type: 'linkItem', label: 'Food Additives', href: '/industries/food-additives'},
]

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'brandName',
      title: 'Brand name',
      type: 'string',
      initialValue: 'Tawazon',
    }),
    defineField({
      name: 'logoIcon',
      title: 'Logo mark Iconify id',
      type: 'string',
      description: 'Small square mark next to brand name',
      initialValue: 'solar:scale-linear',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
      rows: 3,
      initialValue:
        "We're a specialty chemical distributor connecting leading manufacturers with industries across the globe.",
    }),
    defineField({
      name: 'newsletterTitle',
      title: 'Newsletter heading',
      type: 'string',
      initialValue: 'Subscribe to our newsletter',
    }),
    defineField({
      name: 'newsletterPlaceholder',
      title: 'Newsletter email placeholder',
      type: 'string',
      initialValue: 'Enter your email',
    }),
    defineField({
      name: 'newsletterSubmitLabel',
      title: 'Newsletter button label',
      type: 'string',
      initialValue: 'Subscribe',
    }),
    defineField({
      name: 'linkColumns',
      title: 'Link columns',
      description: 'Typically: Links, Industries, Legal',
      type: 'array',
      of: [defineArrayMember({type: 'footerLinkColumn'})],
      validation: (Rule) => Rule.required().min(1),
      initialValue: [
        {
          _key: 'col-links',
          _type: 'footerLinkColumn',
          title: 'Links',
          links: [
            {_key: 'a1', _type: 'linkItem', label: 'About Us', href: '/about-us'},
            {_key: 'a2', _type: 'linkItem', label: 'Team', href: '/about-us#team'},
            {_key: 'a3', _type: 'linkItem', label: 'Industries', href: '/industries'},
            {_key: 'a4', _type: 'linkItem', label: 'Locations', href: '/locations'},
          ],
        },
        {
          _key: 'col-ind',
          _type: 'footerLinkColumn',
          title: 'Industries',
          links: defaultIndustryLinks,
        },
        {
          _key: 'col-leg',
          _type: 'footerLinkColumn',
          title: 'Legal',
          links: [
            {_key: 'z1', _type: 'linkItem', label: 'Privacy', href: '#'},
            {_key: 'z2', _type: 'linkItem', label: 'Terms', href: '#'},
          ],
        },
      ],
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright line',
      type: 'string',
      initialValue: '© 2026 Tawazon Inc. All rights reserved.',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social links',
      type: 'array',
      of: [defineArrayMember({type: 'socialLink'})],
      initialValue: [
        {
          _key: 's1',
          _type: 'socialLink',
          icon: 'solar:brand-twitter-linear',
          href: '#',
          label: 'Twitter',
        },
        {
          _key: 's2',
          _type: 'socialLink',
          icon: 'solar:brand-github-linear',
          href: '#',
          label: 'GitHub',
        },
      ],
    }),
  ],
})
