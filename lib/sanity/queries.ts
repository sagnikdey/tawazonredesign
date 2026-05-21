export const pageHeaderBySlugQuery = `*[_type == "pageHeader" && slug.current == $slug][0]{
  _id,
  badgeLabel,
  heading,
  "slug": slug.current
}`

export const aboutPageQuery = `*[_type == "aboutPage" && _id == "aboutPage"][0]{
  introParagraphs[]{ _key, text },
  globalReachTitle,
  globalReachParagraphs[]{ _key, text },
  mapImage{
    alt,
    asset->{ url }
  },
  mapDots[]{ _key, topPercent, leftPercent, label },
  kpis[]{ _key, value, label, variant }
}`

export const sitePageBySlugQuery = `*[_type == "sitePage" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  modules[]{
    _key,
    _type,
    section->{
      "key": key.current,
      sectionVariant,
      header{ badgeLabel, title, lead },
      cta{ label, url, openInNewTab },
      bodyText,
      highlights[]{ text },
      media{ alt, asset->{ url } }
    }
  }
}`

export const siteSectionByKeyQuery = `*[_type == "siteSection" && key.current == $key][0]{
  "key": key.current,
  sectionVariant,
  header{ badgeLabel, title, lead },
  cta{ label, url, openInNewTab },
  bodyText,
  highlights[]{ text },
  media{
    alt,
    asset->{ url }
  }
}`
