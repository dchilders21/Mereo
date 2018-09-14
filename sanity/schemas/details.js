export default {
  name: 'details',
  title: 'Details',
  type: 'document',
  fields: [
    {
      name: 'voterDiversity',
      title: 'Voter Diversity',
      type: 'blockContent'
    },
    {
      name: 'disclosureAccessibility',
      title: 'Disclosure & Accessibility',
      type: 'blockContent'
    },
    {
      name: 'structureLeadership',
      title: 'Structure & Leadership',
      type: 'blockContent'
    },
    {
      name: 'valueAdd',
      title: 'Value-Add Tools',
      type: 'blockContent'
    },
    {
      title: 'Producer',
      name: 'producer',
      // A reference is a way to point to another document
      type: 'reference',
      to: [{type: 'producer'}]
    }
  ],
  preview: {
    select: {
      title: 'producer.name'
    },
    prepare(selection) {
      return {
        title: selection.title
      }
    }
  }
}
