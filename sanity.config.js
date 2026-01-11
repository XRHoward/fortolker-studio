import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { languageFilter } from '@sanity/language-filter'
import { schemaTypes } from './schemaTypes'
import { blogSchemas } from './blogSchemas'

const supportedLanguages = [
  { id: 'no', title: 'Norsk', isDefault: true },
  { id: 'en', title: 'English' }
]

export default defineConfig({
  name: 'default',
  title: 'Fortolker CMS',
  
  projectId: '7izj8dsr',
  dataset: 'production',
  
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Innhold')
          .items([
            S.listItem()
              .title('Sider')
              .child(
                S.list()
                  .title('Sider')
                  .items([
                    S.listItem()
                      .title('Forside')
                      .child(S.document().schemaType('homePage').documentId('homePage')),
                    S.listItem()
                      .title('Om oss')
                      .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
                    S.listItem()
                      .title('Kontaktinformasjon')
                      .child(S.document().schemaType('contactInfo').documentId('contactInfo')),
                  ])
              ),
            S.divider(),
            S.listItem()
              .title('Blogg')
              .child(
                S.list()
                  .title('Blogg')
                  .items([
                    S.listItem()
                      .title('Blogginnlegg')
                      .child(S.documentTypeList('post').title('Blogginnlegg')),
                    S.listItem()
                      .title('Forfattere')
                      .child(S.documentTypeList('author').title('Forfattere')),
                    S.listItem()
                      .title('Kategorier')
                      .child(S.documentTypeList('category').title('Kategorier')),
                  ])
              ),
            S.divider(),
            S.listItem()
              .title('Tjenester')
              .child(S.documentTypeList('service').title('Tjenester')),
            S.listItem()
              .title('Teammedlemmer')
              .child(S.documentTypeList('teamMember').title('Teammedlemmer')),
            S.divider(),
            S.listItem()
              .title('Globale innstillinger')
              .child(S.document().schemaType('globalSettings').documentId('globalSettings')),
          ])
    }),
    visionTool(),
    languageFilter({
      supportedLanguages,
      defaultLanguages: ['no'],
      documentTypes: ['homePage', 'service', 'aboutPage', 'globalSettings']
    })
  ],
  
  schema: {
    types: [...schemaTypes, ...blogSchemas],
  },
})
