import { Strapi } from '@strapi/types/dist/core/strapi'
import { CustomFieldServerOptions } from '@strapi/types/dist/modules/custom-fields'

import { strapi as plugin } from '../../package.json'

export function register({ strapi }: { strapi: Strapi }) {
  strapi.customFields.register({
    plugin: plugin.name,
    name: plugin.displayName,
    type: plugin.type as CustomFieldServerOptions['type'],
  })
}
