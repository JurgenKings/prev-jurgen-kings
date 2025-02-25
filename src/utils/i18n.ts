import Negotiator from "negotiator"
import { match } from "@formatjs/intl-localematcher"

const supportedLocales = ["es", "en"]
const defaultLocale = "es"

const getLocale = (headers: { "accept-language": string }): string => {
  const languages = new Negotiator({ headers }).languages()

  return match(languages, supportedLocales, defaultLocale)
}

const hasPathnameLocale = (pathname: string): boolean => {
  return supportedLocales.some(
    (locale) =>
      pathname.includes(`/${locale}/`) || pathname.endsWith(`/${locale}`)
  )
}

export {
  supportedLocales,
  defaultLocale,
  getLocale,
  hasPathnameLocale
}