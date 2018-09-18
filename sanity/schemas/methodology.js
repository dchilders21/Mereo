export default {
  name: 'methodology',
  title: 'Methodology',
  type: 'document',
  fields: [
    {
      name: 'methodology',
      title: 'Methodology',
      type: 'blockContent'
    }
  ],
  preview: {
    select: {
      title: 'methodology',
    },
    prepare(selection) {
      return {
        title: 'Methodology',
      }
    }
  }
}
