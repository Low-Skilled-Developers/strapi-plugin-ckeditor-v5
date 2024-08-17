import { ReactNode } from 'react'
import { CustomFieldServerOptions } from '@strapi/types/dist/modules/custom-fields'

export interface InputV5Props {
  name: string
  hint: string
  label: string
  required: boolean
  disabled: boolean
  attribute: InputAttribute
  placeholder: string
  labelAction?: ReactNode
  error?: string
}

interface InputAttribute {
  /**
   * @example: plugin::ckeditor5.CKEditor5
   */
  customField: string
  /**
   * @desc unknown field
   */
  mainField: undefined
  /**
   * @desc
   */
  preset: string // NOTE from plugin preset config: "light" | "standard" | "rich"
  type: CustomFieldServerOptions['type']
  required: boolean
  options : {
    output: 'HTML' | 'Markdown',
    maxLengthCharacters?: number
  },
}
