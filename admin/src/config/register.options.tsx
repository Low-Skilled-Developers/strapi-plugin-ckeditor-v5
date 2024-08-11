import * as yup from 'yup'

import { strapi } from '../../../package.json'
import PluginIcon from '../assets/plugin-icon.svg'
import { RegisterPluginOptions } from '../interfaces/register-plugin-options.interface'

export const RegisterOptions: RegisterPluginOptions = {
  pluginId: strapi.name,
  name: strapi.displayName,
  type: strapi.type as RegisterPluginOptions['type'],
  icon: () => <img src={PluginIcon as unknown as string} style={{ width: 24, height: 24 }} alt={'plugin image'}/>,
  intlLabel: {
    id: `${strapi.name}.label`,
    defaultMessage: strapi.displayName,
  },
  intlDescription: {
    id: `${strapi.name}.description`,
    defaultMessage: 'The rich text editor for every use case',
  },
  components: {
    Input: async () => await import('../components/input').then((module) => ({ default: module.CKEditorInput }))
  },
  options: {
    base: [
      {
        intlLabel: {
          id: `${strapi.name}.preset.label`,
          defaultMessage: 'Choose editor version',
        },
        description: {
          id: `${strapi.name}.preset.description`,
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
                id: `${strapi.name}.preset.light.label`,
                defaultMessage: 'Light version',
              },
            },
          },
          {
            key: 'standard',
            value: 'standard',
            metadatas: {
              intlLabel: {
                id: `${strapi.name}.preset.standard.label`,
                defaultMessage: 'Standard version',
              },
            },
          },
          {
            key: 'rich',
            value: 'rich',
            metadatas: {
              intlLabel: {
                id: `${strapi.name}.preset.rich.label`,
                defaultMessage: 'Rich version',
              },
            },
          },
        ],
      },
      {
        intlLabel: {
          id: `${strapi.name}.output.label`,
          defaultMessage: 'Choose output type',
        },
        description: {
          id: `${strapi.name}.output.description`,
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
                id: `${strapi.name}.output.html.label`,
                defaultMessage: 'HTML',
              },
            },
          },
          {
            key: 'markdown',
            value: 'Markdown',
            metadatas: {
              intlLabel: {
                id: `${strapi.name}.output.markdown.label`,
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
              id: `${strapi.name}.required.label`,
              defaultMessage: 'Required field',
            },
            description: {
              id: `${strapi.name}.required.description`,
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
              id: `${strapi.name}.maxLength.label`,
              defaultMessage: 'Maximum length (characters)',
            },
          },
        ],
      },
    ],
    validator: () => (
      {
        preset: yup.string().required({
          id: `${strapi.name}.preset.error.required`,
          defaultMessage: 'Editor preset is required',
        }),
      }
    ),
  },
}
