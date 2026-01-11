export default {
  name: 'service',
  title: 'Tjeneste',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'icon',
      title: 'Ikon',
      type: 'string',
      description: 'Navn på ikon (f.eks. "lightbulb", "chart", "shield")'
    },
    {
      name: 'shortDescription',
      title: 'Kort beskrivelse',
      type: 'text'
    },
    {
      name: 'fullDescription',
      title: 'Full beskrivelse',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'image',
      title: 'Bilde',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'features',
      title: 'Funksjoner',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}
