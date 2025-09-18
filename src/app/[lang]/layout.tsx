import type { Metadata } from "next"
import { Toaster } from "react-hot-toast"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/context/ThemeContext"
import getTranslations from "@/actions/translate"
import PrismStyles from "@/components/PrismStyles"
import "../globals.css"
import "../prism-okaidia.css"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL || "https://jurgenkings.com"
  const resolvedParams = await params
  const { lang } = resolvedParams
  const metaTranslations = await getTranslations(lang, "meta")

  return {
    metadataBase: new URL(baseUrl),
    title: "Jurgen Kings",
    description: metaTranslations.description,
    keywords: metaTranslations.keywords,
    twitter: {
      card: "summary_large_image",
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        "es": `${baseUrl}/es`,
        "en": `${baseUrl}/en`,
      }
    }
  }
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {

  const { lang } = await params

  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <PrismStyles />
          <Toaster position="top-right" />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
