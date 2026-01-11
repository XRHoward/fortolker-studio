// sanity-import.js
// Dette scriptet importerer hardkodet innhold til Sanity CMS

// Oppdatert import for nyere versjoner av Sanity-klienten
const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

// Konfigurer Sanity-klienten
const client = createClient({
  projectId: '7izj8dsr', // Ditt prosjekt-ID
  dataset: 'production',
  token: 'skX8z0kUZiUxymfogJoGfansMOh7vWSDFLL1eIk26igVMvKVmg9iq0obdkBozEP2EDiAEyFMkT3PfVRBYUnT8J0AOUaz5CbT7GB2gplv7mUKaAkF6CLeTrE0KqYcc7wGP0VA7nX7Ejel5L1GQqDXHiMjfnqyU3Fijx5pZ33vuk4ZGNl1htYb', // Du må legge til din token her
  useCdn: false,
  apiVersion: '2023-05-03'
});

// Service data
const services = [
  {
    title: 'Teknologirådgivning',
    slug: {
      _type: 'slug',
      current: 'teknologiradgivning'
    },
    icon: 'computer',
    shortDescription: 'Vi hjelper bedrifter med å velge, implementere og optimalisere teknologiløsninger som driver vekst og effektivitet.',
    fullDescription: [
      {
        _type: 'block',
        style: 'normal',
        _key: 'tech1',
        children: [
          {
            _type: 'span',
            _key: 'tech1span',
            text: 'Vår teknologirådgivning hjelper bedrifter med å navigere i det komplekse teknologilandskapet. Vi tilbyr strategisk veiledning for teknologivalg, implementering av nye systemer, og optimalisering av eksisterende løsninger. Vårt team har erfaring med et bredt spekter av teknologier og plattformer, og kan hjelpe deg med å finne de beste løsningene for din bedrift.'
          }
        ]
      }
    ],
    features: [
      'Teknologistrategi',
      'Systemarkitektur',
      'Digitale transformasjonsprosjekter',
      'IT-sikkerhet',
      'Skyløsninger'
    ]
  },
  {
    title: 'Innovasjonsrådgivning',
    slug: {
      _type: 'slug',
      current: 'innovasjonsradgivning'
    },
    icon: 'lightbulb',
    shortDescription: 'Vi hjelper bedrifter med å skape en kultur for innovasjon og utvikle nye produkter, tjenester og forretningsmodeller.',
    fullDescription: [
      {
        _type: 'block',
        style: 'normal',
        _key: 'innov1',
        children: [
          {
            _type: 'span',
            _key: 'innov1span',
            text: 'Vår innovasjonsrådgivning hjelper bedrifter med å skape en kultur for kontinuerlig forbedring og nyskapning. Vi tilbyr metodikk og verktøy for idéutvikling, prototyping og testing av nye konsepter. Vårt team kan guide deg gjennom hele innovasjonsprosessen, fra idé til implementering, og hjelpe deg med å utvikle nye produkter, tjenester og forretningsmodeller som skaper verdi for dine kunder.'
          }
        ]
      }
    ],
    features: [
      'Innovasjonsstrategi',
      'Design Thinking-workshops',
      'Produktutvikling',
      'Forretningsmodellinnovasjon',
      'Innovasjonskultur'
    ]
  },
  {
    title: 'Bærekraftsrådgivning',
    slug: {
      _type: 'slug',
      current: 'baerekraftsradgivning'
    },
    icon: 'leaf',
    shortDescription: 'Vi hjelper bedrifter med å integrere bærekraft i sin strategi og drift, og skape verdi gjennom ansvarlig forretningspraksis.',
    fullDescription: [
      {
        _type: 'block',
        style: 'normal',
        _key: 'sust1',
        children: [
          {
            _type: 'span',
            _key: 'sust1span',
            text: 'Vår bærekraftsrådgivning hjelper bedrifter med å integrere miljømessige, sosiale og styringsmessige hensyn i sin strategi og drift. Vi tilbyr veiledning for utvikling av bærekraftsstrategier, implementering av bærekraftige praksiser, og rapportering på bærekraftsmål. Vårt team kan hjelpe deg med å identifisere muligheter for å skape verdi gjennom ansvarlig forretningspraksis og møte økende forventninger fra kunder, investorer og samfunnet.'
          }
        ]
      }
    ],
    features: [
      'Bærekraftsstrategi',
      'ESG-rapportering',
      'Sirkulær økonomi',
      'Klimarisikoanalyse',
      'Bærekraftig forsyningskjede'
    ]
  }
];

// Team member data
const teamMembers = [
  {
    name: 'Anna Berg',
    position: 'Administrerende direktør',
    bio: 'Anna har over 15 års erfaring fra ledende stillinger i teknologi- og konsulentbransjen. Hun er lidenskapelig opptatt av å hjelpe bedrifter med å utnytte teknologi for å skape verdi.',
    email: 'anna@fortolker.no'
  },
  {
    name: 'Erik Hansen',
    position: 'Teknologidirektør',
    bio: 'Erik har bakgrunn fra ledende teknologiselskaper og har spesialisert seg på skyløsninger og systemarkitektur. Han leder vårt team av teknologikonsulenter.',
    email: 'erik@fortolker.no'
  },
  {
    name: 'Maria Olsen',
    position: 'Innovasjonsleder',
    bio: 'Maria har bakgrunn fra produktutvikling og design, og har ledet innovasjonsprosjekter i flere bransjer. Hun er ekspert på Design Thinking og brukerorientert innovasjon.',
    email: 'maria@fortolker.no'
  },
  {
    name: 'Thomas Johansen',
    position: 'Bærekraftsdirektør',
    bio: 'Thomas har bakgrunn fra miljøorganisasjoner og har jobbet med bærekraft i næringslivet i over 10 år. Han er ekspert på bærekraftsstrategier og ESG-rapportering.',
    email: 'thomas@fortolker.no'
  }
];

// Hardkodet innhold som skal importeres
const content = {
  globalSettings: {
    _type: 'globalSettings',
    _id: 'globalSettings',
    siteName: 'Fortolker AS',
    contactEmail: 'kontakt@fortolker.no',
    contactPhone: '+47 123 45 678',
    address: 'Storgata 1, 0123 Oslo, Norge'
  },
  homePage: {
    _type: 'homePage',
    _id: 'homePage',
    title: 'Fortolker AS - Rådgivning innen teknologi, innovasjon og bærekraft',
    heroHeading: 'Ekspertise innen teknologi, innovasjon og bærekraft',
    heroSubheading: 'Vi hjelper bedrifter med å navigere i en verden i rask endring gjennom strategisk rådgivning og praktiske løsninger.',
    introHeading: 'Velkommen til Fortolker AS',
    introText: 'Fortolker AS er et ledende rådgivningsfirma som spesialiserer seg på å hjelpe bedrifter med å utnytte teknologi, drive innovasjon og implementere bærekraftige praksiser. Vårt team av eksperter har bred erfaring fra ulike bransjer og er dedikert til å levere skreddersydde løsninger som møter dine spesifikke behov.',
    ctaHeading: 'Klar for å ta neste steg?',
    ctaText: 'Kontakt oss i dag for en uforpliktende samtale om hvordan vi kan hjelpe din bedrift med å nå sine mål.',
    ctaButtonText: 'Kontakt oss'
  },
  aboutPage: {
    _type: 'aboutPage',
    _id: 'aboutPage',
    title: 'Om oss - Fortolker AS',
    heroHeading: 'Om Fortolker AS',
    heroText: 'Vi er et team av dedikerte eksperter som jobber for å hjelpe bedrifter med å utnytte teknologi, drive innovasjon og implementere bærekraftige praksiser.',
    historyHeading: 'Vår historie',
    historyText: [
      {
        _type: 'block',
        style: 'normal',
        _key: 'history1',
        children: [
          {
            _type: 'span',
            _key: 'history1span',
            text: 'Fortolker AS ble grunnlagt i 2020 av en gruppe erfarne konsulenter med en felles visjon om å hjelpe bedrifter med å navigere i en verden i rask endring. Siden den gang har vi vokst til å bli et ledende rådgivningsfirma med kunder i hele Norge og Norden. Vår suksess er bygget på vår evne til å kombinere dyp teknisk kunnskap med strategisk forretningsforståelse, og vår dedikasjon til å levere resultater for våre kunder.'
          }
        ]
      }
    ],
    valuesHeading: 'Våre verdier',
    values: [
      {
        title: 'Integritet',
        description: 'Vi handler alltid med ærlighet og åpenhet, og setter etiske standarder høyt i alt vi gjør.'
      },
      {
        title: 'Innovasjon',
        description: 'Vi er nysgjerrige og søker kontinuerlig nye og bedre måter å løse utfordringer på.'
      },
      {
        title: 'Samarbeid',
        description: 'Vi tror på kraften i teamarbeid og partnerskap, både internt og med våre kunder.'
      },
      {
        title: 'Ekspertise',
        description: 'Vi er dedikert til faglig utvikling og deler gjerne vår kunnskap med andre.'
      }
    ],
    teamHeading: 'Vårt team'
  },
  contactInfo: {
    _type: 'contactInfo',
    _id: 'contactInfo',
    title: 'Kontakt oss',
    address: 'Storgata 1, 0123 Oslo, Norge',
    phone: '+47 123 45 678',
    email: 'kontakt@fortolker.no',
    openingHours: 'Mandag-fredag: 09:00-17:00',
    mapLocation: {
      lat: 59.9139,
      lng: 10.7522
    }
  }
};

// Funksjon for å importere innhold til Sanity
async function importToSanity() {
  try {
    console.log('Starter import av innhold til Sanity CMS...');

    // Importer globalSettings
    console.log('Importerer globale innstillinger...');
    await client.createOrReplace(content.globalSettings);

    // Importer homePage
    console.log('Importerer hjemmeside...');
    await client.createOrReplace(content.homePage);

    // Importer aboutPage
    console.log('Importerer om oss-side...');
    await client.createOrReplace(content.aboutPage);

    // Importer services
    console.log('Importerer tjenester...');
    const serviceIds = [];
    for (let i = 0; i < services.length; i++) {
      const service = {
        _type: 'service',
        _id: `service-${i+1}`,
        title: services[i].title,
        slug: services[i].slug,
        icon: services[i].icon,
        shortDescription: services[i].shortDescription,
        fullDescription: services[i].fullDescription,
        features: services[i].features
      };
      
      const createdService = await client.createOrReplace(service);
      serviceIds.push({ _ref: createdService._id, _type: 'reference' });
    }

    // Oppdater homePage med referanser til tjenester
    console.log('Oppdaterer hjemmeside med tjenestereferanser...');
    await client.patch('homePage')
      .set({ featuredServices: serviceIds })
      .commit();

    // Importer teamMembers
    console.log('Importerer teammedlemmer...');
    const teamMemberIds = [];
    for (let i = 0; i < teamMembers.length; i++) {
      const member = {
        _type: 'teamMember',
        _id: `teamMember-${i+1}`,
        name: teamMembers[i].name,
        position: teamMembers[i].position,
        bio: teamMembers[i].bio,
        email: teamMembers[i].email
      };
      
      const createdMember = await client.createOrReplace(member);
      teamMemberIds.push({ _ref: createdMember._id, _type: 'reference' });
    }

    // Oppdater aboutPage med referanser til teammedlemmer
    console.log('Oppdaterer om oss-side med teammedlemsreferanser...');
    await client.patch('aboutPage')
      .set({ teamMembers: teamMemberIds })
      .commit();

    // Importer contactInfo
    console.log('Importerer kontaktinformasjon...');
    await client.createOrReplace(content.contactInfo);

    console.log('Import fullført!');
  } catch (error) {
    console.error('Feil under import:', error);
  }
}

// Kjør importfunksjonen
importToSanity();
