export default {
  name: 'homePage',
  title: 'Hjemmeside',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string'
    },
    {
      name: 'heroHeading',
      title: 'Hero overskrift',
      type: 'string'
    },
    {
      name: 'heroSubheading',
      title: 'Hero undertekst',
      type: 'text'
    },
    {
      name: 'heroImage',
      title: 'Hero bilde',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'introHeading',
      title: 'Introduksjon overskrift',
      type: 'string'
    },
    {
      name: 'introText',
      title: 'Introduksjon tekst',
      type: 'text'
    },
    {
      name: 'featuredServices',
      title: 'Utvalgte tjenester',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'service' }]
        }
      ]
    },
    {
      name: 'ctaHeading',
      title: 'CTA overskrift',
      type: 'string'
    },
    {
      name: 'ctaText',
      title: 'CTA tekst',
      type: 'text'
    },
    {
      name: 'ctaButtonText',
      title: 'CTA knappetekst',
      type: 'string'
    }
  ]
}
