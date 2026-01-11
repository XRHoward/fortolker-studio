import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { languageFilter } from '@sanity/language-filter'

const supportedLanguages = [
  { id: 'no', title: 'Norsk', isDefault: true },
  { id: 'en', title: 'English' }
]

export default defineConfig({
  // ... existing config
  plugins: [
    deskTool(),
    visionTool(),
    languageFilter({
      supportedLanguages,
      defaultLanguages: ['no'],
      documentTypes: ['homePage', 'service', 'aboutPage', 'globalSettings']
    })
  ]
})