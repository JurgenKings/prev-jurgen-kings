import React from "react"
import { Metadata } from "next"
import { Cinzel } from "next/font/google"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Stacks from "@/components/Stacks"
import Footer from "@/components/Footer"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Experience from "@/components/Experience"
import TransitionPage from "@/components/TransitionPage"
import getTranslations from "@/utils/translate"

export const metadata: Metadata = {
  alternates: {
    canonical: `${process.env.BASE_URL}`,
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
        <Stacks t={stacksTranslations} />
        <Contact t={contactTranslations} tu={utilsTranslations} lang={lang} />
        <Footer t={footerTranslations} tu={utilsTranslations} />
      </div>
    </>
  )
}

export default HomePage