import type { Metadata } from "next"
import { Toaster } from "react-hot-toast"
import { ThemeProvider } from "@/context/ThemeContext"
import getTranslations from "@/utils/translate"
import "../globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.BASE_URL}`),
  title: "Jurgen Kings",
  twitter: {
    card: "summary_large_image",
  },
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {

  const { lang } = await params
  const metaTranslations = await getTranslations(lang, "meta")

  return (
    <html lang={lang}>
      <head>
        <meta name="description" content={metaTranslations.description} />
        <meta name="keywords" content={metaTranslations.keywords} />
      </head>
      <body>
        <ThemeProvider>
          <Toaster position="top-right" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
