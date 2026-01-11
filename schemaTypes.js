export const globalSettings = {
  name: 'globalSettings',
  title: 'Globale innstillinger',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Nettsidenavn',
      type: 'string',
      description: 'Navnet på nettsiden som vises i header og footer'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'contactEmail',
      title: 'Kontakt e-post',
      type: 'string'
    },
    {
      name: 'contactPhone',
      title: 'Kontakt telefon',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Adresse',
      type: 'text'
    },
    {
      name: 'socialMedia',
      title: 'Sosiale medier',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Plattform',
              type: 'string',
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'Instagram', value: 'instagram' }
                ]
              }
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url'
            }
          ]
        }
      ]
    }
  ]
}

export const homePage = {
  name: 'homePage',
  title: 'Forside',
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

export const aboutPage = {
  name: 'aboutPage',
  title: 'Om oss',
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
      name: 'heroText',
      title: 'Hero tekst',
      type: 'text'
    },
    {
      name: 'historyHeading',
      title: 'Historie overskrift',
      type: 'string'
    },
    {
      name: 'historyText',
      title: 'Historie tekst',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'valuesHeading',
      title: 'Verdier overskrift',
      type: 'string'
    },
    {
      name: 'values',
      title: 'Verdier',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Tittel',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Beskrivelse',
              type: 'text'
            }
          ]
        }
      ]
    },
    {
      name: 'teamHeading',
      title: 'Team overskrift',
      type: 'string'
    },
    {
      name: 'teamMembers',
      title: 'Teammedlemmer',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'teamMember' }]
        }
      ]
    }
  ]
}

export const service = {
  name: 'service',
  title: 'Tjenester',
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

export const teamMember = {
  name: 'teamMember',
  title: 'Teamet',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Navn',
      type: 'string'
    },
    {
      name: 'position',
      title: 'Stilling',
      type: 'string'
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
      type: 'text'
    },
    {
      name: 'email',
      title: 'E-post',
      type: 'string'
    },
    {
      name: 'socialMedia',
      title: 'Sosiale medier',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Plattform',
              type: 'string',
              options: {
                list: [
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Twitter', value: 'twitter' }
                ]
              }
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url'
            }
          ]
        }
      ]
    }
  ]
}

export const contactInfo = {
  name: 'contactInfo',
  title: 'Kontaktinformasjon',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Adresse',
      type: 'text'
    },
    {
      name: 'phone',
      title: 'Telefon',
      type: 'string'
    },
    {
      name: 'email',
      title: 'E-post',
      type: 'string'
    },
    {
      name: 'openingHours',
      title: 'Åpningstider',
      type: 'text'
    },
    {
      name: 'mapLocation',
      title: 'Kartplassering',
      type: 'object',
      fields: [
        {
          name: 'lat',
          title: 'Breddegrad',
          type: 'number'
        },
        {
          name: 'lng',
          title: 'Lengdegrad',
          type: 'number'
        }
      ]
    }
  ]
}

export const schemaTypes = [
  globalSettings,
  homePage,
  aboutPage,
  service,
  teamMember,
  contactInfo
]
