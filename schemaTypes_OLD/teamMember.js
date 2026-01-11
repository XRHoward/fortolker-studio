module.exports = {
  name: 'teamMember',
  title: 'Teammedlem',
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
