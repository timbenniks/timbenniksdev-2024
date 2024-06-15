import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    seo: group({
      title: 'SEO',
      description: 'SEO configuration.',
      icon: 'i-ph-app-window',
      fields: {
        siteName: field({
          type: 'string',
          title: 'Site Name',
          description: 'Name used in ogSiteName and used as second part of your page title (My page title - Nuxt UI Pro).',
          icon: 'i-mdi-web',
          default: []
        })
      }
    }),

    speakerDetails: group({
      title: 'Speaker Details',
      description: 'Info about Tim for conferences',
      icon: 'i-ph-app-window',
      fields: {
        speakerDetails: field({
          type: 'array',
          title: 'details',
          description: 'A list of speaker detail key value pairs',
          icon: 'i-mdi-web',
          fields: {
            label: field({
              type: 'string',
              title: 'Label',
              description: 'Label',
            }),
            val: field({
              type: 'string',
              title: 'Value',
              description: 'Value',
            }),
            link: field({
              type: 'string',
              title: 'Link',
              description: 'Link',
            })
          }
        })
      }
    })
  }
})
