import type { Attribute } from '@strapi/types/dist/schema'
import { CustomInputProps } from '@strapi/content-type-builder/dist/admin/src/components/GenericInputs'

/**
 * @see https://docs-next.strapi.io/dev-docs/custom-fields#components
 */
export interface InputV4Props extends CustomInputProps<Attribute.RichText> {}
