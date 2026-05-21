import type {StructureResolver} from 'sanity/structure'

export const siteStructure: StructureResolver = (S) =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Navigation')
        .id('singleton-navigation')
        .child(
          S.document().schemaType('navigation').documentId('navigation').title('Navigation'),
        ),
      S.listItem()
        .title('Footer')
        .id('singleton-footer')
        .child(S.document().schemaType('footer').documentId('footer').title('Footer')),
      S.listItem()
        .title('About us — global reach')
        .id('singleton-about-page')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage').title('About us — global reach')),
      S.divider(),
      S.documentTypeListItem('sitePage').title('Pages (compose sections)'),
      S.documentTypeListItem('siteSection').title('Site sections'),
      S.documentTypeListItem('pageHeader').title('Page headers'),
    ])
