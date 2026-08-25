import brochurePdf from '../assets/Download content/ESTPL-Brochure.pdf?url'

export const menuConfig = [
  {
    title: 'Products',
    items: [],
  },
  {
    title: 'Industries',
    items: [],
  },
  {
    title: 'Company',
    items: [
      { title: 'About Us', url: '/company/about' },
      { title: 'Our Directors', url: '/company/directors' },
      { title: 'Team', url: '/company/team' },
      { title: 'Events', url: '/company/events' },
      { title: 'Success Stories', url: '/company/success-stories' },
    ],
  },
  {
    title: 'Career',
    url: '/career',
    items: [],
  },
  {
    title: 'Download',
    items: [
      {
        title: 'Brochure',
        url: brochurePdf,
        download: 'ESTPL-Brochure.pdf',
      },
    ],
  },
]
