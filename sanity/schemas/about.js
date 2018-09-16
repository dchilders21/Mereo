export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'about',
      title: 'About',
      type: 'blockContent'
    }
  ],
  preview: {
    select: {
      title: 'about',
    },
    prepare(selection) {
      return {
        title: 'About',
      }
    }
  }
}
