export default {
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
