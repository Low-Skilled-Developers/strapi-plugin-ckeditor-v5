import * as yup from 'yup'

import { strapi } from '../../../package.json'
import PluginIcon from '../assets/plugin-icon.svg'
import { RegisterPluginOptions } from '../interfaces/register-plugin-options.interface'

export const RegisterOptions: RegisterPluginOptions = {
  pluginId: strapi.id,
  name: strapi.name,
  type: strapi.type as RegisterPluginOptions['type'],
  icon: () => <img src={PluginIcon as unknown as string} style={{ width: 24, height: 24 }} alt={'plugin image'}/>,
  intlLabel: {
    id: `${strapi.id}.label`,
    defaultMessage: strapi.name,
  },
  intlDescription: {
    id: `${strapi.id}.description`,
    defaultMessage: 'The rich text editor for every use case',
  },
  components: {
    Input: async () => await import('../components/input').then((module) => ({ default: module.CKEditorInput }))
  },
  options: {
    base: [
      {
        intlLabel: {
          id: `${strapi.id}.preset.label`,
          defaultMessage: 'Choose editor version',
        },
        description: {
          id: `${strapi.id}.preset.description`,
          defaultMessage: "Do you need more or less features?",
        },
        name: 'options.preset',
        type: 'select',
        defaultValue: 'standard',
        options: [
          {
            key: 'light',
            value: 'light',
            metadatas: {
              intlLabel: {
                id: `${strapi.id}.preset.light.label`,
                defaultMessage: 'Light version',
              },
            },
          },
          {
            key: 'standard',
            value: 'standard',
            metadatas: {
              intlLabel: {
                id: `${strapi.id}.preset.standard.label`,
                defaultMessage: 'Standard version',
              },
            },
          },
          {
            key: 'rich',
            value: 'rich',
            metadatas: {
              intlLabel: {
                id: `${strapi.id}.preset.rich.label`,
                defaultMessage: 'Rich version',
              },
            },
          },
        ],
      },
      {
        intlLabel: {
          id: `${strapi.id}.output.label`,
          defaultMessage: 'Choose output type',
        },
        description: {
          id: `${strapi.id}.output.description`,
          defaultMessage: "Decide, whether you want to get your output in HTML or Markdown",
        },
        name: 'options.output',
        type: 'select',
        defaultValue: 'HTML',
        options: [
          {
            key: 'html',
            value: 'HTML',
            metadatas: {
              intlLabel: {
                id: `${strapi.id}.output.html.label`,
                defaultMessage: 'HTML',
              },
            },
          },
          {
            key: 'markdown',
            value: 'Markdown',
            metadatas: {
              intlLabel: {
                id: `${strapi.id}.output.markdown.label`,
                defaultMessage: 'Markdown',
              },
            },
          },
        ],
      },
    ],
    advanced: [
      {
        sectionTitle: null,
        items: [
          {
            name: 'required',
            type: 'checkbox',
            intlLabel: {
              id: `${strapi.id}.required.label`,
              defaultMessage: 'Required field',
            },
            description: {
              id: `${strapi.id}.required.description`,
              defaultMessage: "You won't be able to create an entry if this field is empty",
            },
          },
          // Note: We can't call it simply "maxLength" because then Strapi
          // applies this to the length of HTML string automatically.
          // We want to apply this to the number of characters in the editor,
          // hence – a unique name.
          {
            name: 'options.maxLengthCharacters',
            type: 'checkbox-with-number-field',
            intlLabel: {
              id: `${strapi.id}.maxLength.label`,
              defaultMessage: 'Maximum length (characters)',
            },
          },
        ],
      },
    ],
    validator: () => (
      {
        preset: yup.string().required({
          id: `${strapi.id}.preset.error.required`,
          defaultMessage: 'Editor preset is required',
        }),
      }
    ),
  },
}
