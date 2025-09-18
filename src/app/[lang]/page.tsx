import React from "react"
import { Metadata } from "next"
import { Cinzel } from "next/font/google"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Blog from "@/components/Blog"
import Stacks from "@/components/Stacks"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import TransitionPage from "@/components/TransitionPage"
import getTranslations from "@/actions/translate"
import { blogPostsES } from "@/utils/blogPosts"
import { blogPostsEN } from "@/utils/blogPostsEN"

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

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
})

async function HomePage({ params }: { params: Promise<{ lang: string }> }) {

  const { lang } = await params
  const introTranslations = await getTranslations(lang, "intro")
  const aboutTranslations = await getTranslations(lang, "about")
  const projectsTranslations = await getTranslations(lang, "projects")
  const footerTranslations = await getTranslations(lang, "footer")
  const stacksTranslations = await getTranslations(lang, "stacks")
  const contactTranslations = await getTranslations(lang, "contact")
  const experienceTranslations = await getTranslations(lang, "experience")
  const utilsTranslations = await getTranslations(lang, "utils")

  const blogPosts = lang === "es" ? blogPostsES : blogPostsEN

  return (
    <>
      <TransitionPage />
      <div className="bg-bg-primary dark:bg-dark-bg-primary">
        <Hero
          font={cinzel}
          t={introTranslations}
          tu={utilsTranslations}
          lang={lang}
        />
        <About t={aboutTranslations} />
        <Projects t={projectsTranslations} lang={lang} />
        <Experience t={experienceTranslations} lang={lang} />
        <Blog blogPosts={blogPosts} lang={lang} />
        <Stacks t={stacksTranslations} />
        <Contact t={contactTranslations} tu={utilsTranslations} lang={lang} />
        <Footer t={footerTranslations} tu={utilsTranslations} />
      </div>
    </>
  )
}

export default HomePage