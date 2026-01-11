// Blogg-schemas for Fortolker.no

export const post = {
  name: 'post',
  title: 'Blogginnlegg',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      title: 'Forfatter',
      type: 'reference',
      to: [{ type: 'author' }]
    },
    {
      name: 'mainImage',
      title: 'Hovedbilde',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternativ tekst',
          type: 'string',
          description: 'Viktig for tilgjengelighet og SEO'
        }
      ]
    },
    {
      name: 'categories',
      title: 'Kategorier',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }]
    },
    {
      name: 'publishedAt',
      title: 'Publiseringsdato',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Sammendrag',
      type: 'text',
      rows: 4,
      description: 'Kort beskrivelse av innlegget (vises i oversikten)'
    },
    {
      name: 'body',
      title: 'Innhold',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Sitat', value: 'blockquote' }
          ],
          lists: [
            { title: 'Punktliste', value: 'bullet' },
            { title: 'Nummerert liste', value: 'number' }
          ],
          marks: {
            decorators: [
              { title: 'Fet', value: 'strong' },
              { title: 'Kursiv', value: 'em' },
              { title: 'Understreket', value: 'underline' }
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Lenke',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Åpne i ny fane'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternativ tekst'
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Bildetekst'
            }
          ]
        }
      ]
    },
    {
      name: 'featured',
      title: 'Fremhevet innlegg',
      type: 'boolean',
      description: 'Vis dette innlegget fremhevet på forsiden'
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta tittel',
          type: 'string',
          description: 'Overstyr standard tittel for søkemotorer'
        },
        {
          name: 'metaDescription',
          title: 'Meta beskrivelse',
          type: 'text',
          rows: 3,
          description: 'Beskrivelse for søkemotorer (maks 160 tegn)'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection
      return {
        ...selection,
        subtitle: author && `av ${author}`
      }
    }
  },
  orderings: [
    {
      title: 'Publiseringsdato, nyeste først',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }]
    },
    {
      title: 'Publiseringsdato, eldste først',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }]
    }
  ]
}

export const author = {
  name: 'author',
  title: 'Forfatter',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Navn',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
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
      name: 'bio',
      title: 'Biografi',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'email',
      title: 'E-post',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}

export const category = {
  name: 'category',
  title: 'Kategori',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'text'
    },
    {
      name: 'color',
      title: 'Farge',
      type: 'string',
      description: 'Hex-farge for kategorien (f.eks. #2563eb)',
      validation: Rule => Rule.regex(/^#[0-9A-Fa-f]{6}$/, {
        name: 'hex',
        invert: false
      }).error('Må være en gyldig hex-farge (f.eks. #2563eb)')
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description'
    }
  }
}

export const blogSchemas = [post, author, category]
