import { Plugin, ButtonView } from 'ckeditor5'

import MediaLibIcon from '../assets/media-lib-icon.svg'

export class StrapiMediaLibPlugin extends Plugin {
  static readonly pluginName = 'strapiMediaLib'

  /**
   * Strapi function used to show media library modal.
   * Should be provided via connect method before using toggle method.
   *
   * @type {function|null}
   */
  private strapiToggle: Function | null = null

  public init() {
    this.editor.ui.componentFactory.add(StrapiMediaLibPlugin.pluginName, () => {

      const button = new ButtonView()

      button.set({
        label: "Media Library",
        icon: MediaLibIcon,
        tooltip: true,
      })

      button.on('execute', this.toggle.bind(this))

      return button
    })
  }

  public connect(strapiToggle: Function) {
    if(typeof strapiToggle !== 'function') {
      throw new TypeError('Input parameter for toggle should be a function')
    }

    this.strapiToggle = strapiToggle
  }

  public toggle() {
    if(typeof this.strapiToggle !== 'function') {
      throw new TypeError('Strapi media library toggle function not connected. Use connect function first')
    }

    this.strapiToggle()
  }
}

declare module '@ckeditor/ckeditor5-core' {
  interface PluginsMap {
    [StrapiMediaLibPlugin.pluginName]: StrapiMediaLibPlugin;
  }
}
