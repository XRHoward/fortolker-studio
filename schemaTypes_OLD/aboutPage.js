export default {
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
export default {
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
