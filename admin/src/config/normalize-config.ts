import { EditorConfig, Markdown } from 'ckeditor5'

import { LightConfig } from './config-presets/light.config'
import { RichConfig } from './config-presets/rich.config'
import { StandardConfig } from './config-presets/standard.config'

interface FieldConfig extends Record<string, any> {
  maxLengthCharacters?: number
}

export function normalizeConfig<T extends FieldConfig = object>({ maxLengthCharacters, ...options }: T) {
  const baseConfig = getBaseConfig(options.preset)

  if(options.output === 'Markdown') {
    baseConfig.plugins.push(Markdown)
  }

  // if(maxLengthCharacters) {
  //   config.plugins.push(CKEditor5.maximumLength.MaximumLength)
  //
  //   config.maximumLength = {
  //     characters: maxLengthCharacters,
  //   }
  // }

  return baseConfig
}


function getBaseConfig(preset: string): EditorConfig {
  switch (preset) {
    case 'light':
      return LightConfig
    case 'standard':
      return StandardConfig
    case 'rich':
      return RichConfig
    default:
      throw new TypeError(`Invalid preset name: ${preset}`)
  }
}
