export default {
  name: 'faqs',
  title: 'Faqs',
  type: 'document',
  fields: [
    {
      name: 'faqs',
      title: 'Faqs',
      type: 'blockContent'
    }
  ],
  preview: {
    select: {
      title: 'faqs',
    },
    prepare(selection) {
      return {
        title: 'Faqs',
      }
    }
  }
}
