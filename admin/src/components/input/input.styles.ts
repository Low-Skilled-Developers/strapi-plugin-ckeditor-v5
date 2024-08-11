import { createGlobalStyle } from "styled-components"
import { NoInfer, RuleSet } from 'styled-components/dist/types'

import { common } from "../../config/theme-palettes/common"
import { light } from "../../config/theme-palettes/light"
import { dark } from "../../config/theme-palettes/dark"
import { additional } from "../../config/theme-palettes/additional"

export const InputStyles = (() => {
  const storedTheme = localStorage.getItem('STRAPI_THEME')
  const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"

  const palettes: RuleSet<NoInfer<any>>[] = [common]

  const theme = storedTheme ?? defaultTheme

  if(theme === 'light') {
    palettes.push(light)
  } else if(theme === 'dark') {
    palettes.push(dark)
  }

  palettes.push(additional)

  return createGlobalStyle`${palettes.join(' ')}`
})()
