import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    speaker: group({
      title: 'Speaker',
      description: 'Speaker configuration.',
      icon: 'i-mdi-page-layout-footer',
      fields: {
        details: field({
          type: 'array',
          title: 'Links',
          description: 'Array of link object displayed in footer.',
          icon: 'i-mdi-link-variant',
          default: []
        })
      }
    }),
    timeline: group({
      title: 'Timeline',
      description: 'Career Timeline.',
      icon: 'i-mdi-page-layout-footer',
      fields: {
        items: field({
          type: 'array',
          items: {
            type: 'object',
            fields: {
              daterange: field({
                type: 'string',
                description: 'The date of the timeline event',
              }),
              title: field({
                type: 'string',
                description: 'The title of the timeline event',
              }),
              text: field({
                type: 'string',
                description: 'Description or details of the timeline event',
              }),
              company: field({
                type: 'string',
                description: 'Company of the timeline event',
              }),

              location: field({
                type: 'string',
                description: 'Location'
              })
            },
          },
        }),
      },
    })
  }
})
