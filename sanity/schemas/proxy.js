export default {
  name: 'proxy',
  title: 'Proxy',
  type: 'document',
  fields: [
    {
      name: 'proxy',
      title: 'Proxy',
      type: 'blockContent'
    }
  ],
  preview: {
    select: {
      title: 'proxy',
    },
    prepare(selection) {
      return {
        title: 'Proxy',
      }
    }
  }
}
