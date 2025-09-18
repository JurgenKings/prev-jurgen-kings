import { NextRequest, NextResponse } from "next/server"
import { getLocale, hasPathnameLocale } from "@/utils/i18n"

export async function middleware(req: NextRequest) {

  const { pathname } = req.nextUrl

  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/images/") ||
    pathname.startsWith("/documents/") ||
    pathname === "/favicon.ico" ||
    pathname.endsWith(".png")
  ) {
    return NextResponse.next()
  }

  const hasLocal = hasPathnameLocale(pathname)
  if (hasLocal) return

  const locale = getLocale({
    "accept-language": req.headers.get("Accept-Language") || "",
  })

  req.nextUrl.pathname = `${locale}${pathname}`

  const response = NextResponse.redirect(req.nextUrl)
  response.headers.set(
    "Link",
    `<${req.nextUrl.origin}/${locale}>; rel="canonical"`
  )
  return response
}