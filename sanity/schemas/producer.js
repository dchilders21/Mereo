export default {
  name: 'producer',
  title: 'Producer',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'rank',
      title: 'Rank',
      type: 'number',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'string'
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
      name: 'voterDiversity',
      title: 'Voter Diversity',
      type: 'number'
    },
    {
      name: 'disclosure',
      title: 'Disclosure and Accessibility',
      type: 'number'
    },
    {
      name: 'structure',
      title: 'Structure and Leadership',
      type: 'number'
    },
    {
      name: 'valueAdd',
      title: 'Value-Add Tools',
      type: 'number'
    },
    {
      name: 'total',
      title: 'Total',
      type: 'number'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'blockContent'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo'
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection.media
      }
    }
  }
}
