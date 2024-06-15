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
  }
})
