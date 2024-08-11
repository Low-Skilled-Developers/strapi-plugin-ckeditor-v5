// import { ReactComponent as PluginIcon } from '@/assets/plugin-icon.svg'
// import { Core } from '@strapi/strapi'
// import { Cog } from '@strapi/icons'
import { AdminInput } from '@strapi/types/dist/plugin/config/strapi-admin'
import { winston, Logger } from '@strapi/logger'

import { RegisterOptions } from './config/register.options'
import { StrapiApp } from '@strapi/admin/dist/admin/src/StrapiApp'

export class CKEditorPlugin implements AdminInput {
  private readonly logger: Logger

  constructor() {
    this.logger = winston.createLogger()
  }

  public register = (app: StrapiApp) => {
    app.customFields.register(RegisterOptions as any)

    // NOTE: To add menu item
    // app.addMenuLink({
    //   to: `plugins/${strapi.name}`,
    //   icon: Cog,
    //   intlLabel: {
    //     id: `${strapi.name}.plugin.name`,
    //     defaultMessage: strapi.displayName,
    //   },
    //   Component:  () => import('./pages/app').then((module) => ({ default: module.App }))
    // } as any)
  }

  public registerTrads: AdminInput['registerTrads'] = async ({ locales }) => {
    const promises = locales.map(async (locale) => {
      try {
        const { default: data }: { default: Record<string, string> } = await import(`./translations/${locale}.json`)

        return {
          data,
          locale,
        }
      } catch (error) {
        this.logger.error(error)

        return {
          data: {},
          locale,
        }
      }
    })

    return await Promise.all(promises)
  }
}

