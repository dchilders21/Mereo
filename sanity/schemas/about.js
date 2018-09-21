export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'short',
      title: 'Short',
      type: 'blockContent'
    },
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
