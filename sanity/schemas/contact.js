export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'contact',
      title: 'Contact',
      type: 'blockContent'
    }
  ],
  preview: {
    select: {
      title: 'contact',
    },
    prepare(selection) {
      return {
        title: 'Contact',
      }
    }
  }
}
