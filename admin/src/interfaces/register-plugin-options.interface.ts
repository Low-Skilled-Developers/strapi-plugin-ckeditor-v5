import { ComponentType } from 'react'
import { CustomFieldServerOptions } from '@strapi/types/dist/modules/custom-fields'
import { MessageDescriptor } from '@formatjs/intl/src/types'

// import type { CustomField } from '@strapi/admin/dist/admin/src/core/apis/CustomFields'

/**
 * @see { @link https://docs-next.strapi.io/dev-docs/custom-fields } Registering a custom field in the admin panel
 */
// export interface RegisterPluginOptions extends CustomField {
export interface RegisterPluginOptions {
  name: string;
  pluginId?: string
  type: CustomFieldServerOptions['type']
  icon?: ComponentType
  intlLabel: MessageDescriptor
  intlDescription: MessageDescriptor
  components: Record<string, any>
  options: PluginOption
}

interface PluginOption {
  base: object | object[]
  advanced: object | object[]
  validator: Function
}
