export default {
  name: 'post',
  title: 'Blogginnlegg',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Publiseringsdato',
      type: 'datetime',
    },
    {
      name: 'excerpt',
      title: 'Ingress',
      type: 'text',
      rows: 3,
      description: 'Kort sammendrag som vises i blogglisten',
    },
    {
      name: 'mainImage',
      title: 'Hovedbilde',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt-tekst',
          type: 'string',
        },
      ],
    },
    {
      name: 'author',
      title: 'Forfatter',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      name: 'categories',
      title: 'Kategorier',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    },
    {
      name: 'body',
      title: 'Innhold',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt-tekst', type: 'string' },
            { name: 'caption', title: 'Bildetekst', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta-tittel', type: 'string' },
        { name: 'metaDescription', title: 'Meta-beskrivelse', type: 'text', rows: 2 },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare({ title, author, media }) {
      return { title, subtitle: author ? `av ${author}` : '', media }
    },
  },
}
