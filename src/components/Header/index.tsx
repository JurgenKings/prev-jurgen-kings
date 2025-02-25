"use client"
import React, { useState } from "react"
import { motion } from "motion/react"
import { BsSun, BsMoon } from "react-icons/bs"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { useTheme } from "@/context/ThemeContext"
import MagneticEffect from "@/components/MagneticEffect"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import NavMobile from "@/components/NavMobile"

interface HeaderProps {
  t: Record<string, string>;
  lang: string;
}

function Header({ t, lang }: HeaderProps): React.JSX.Element {

  const navLinks = [t.nav_links.projects, t.nav_links.contact]

  const { isDarkMode, toggleIsDarkMode } = useTheme()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleIsOpenMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <header className="sticky top-0 left-0 w-full z-50 bg-opacity-20 dark:bg-opacity-20 bg-bg-primary dark:bg-dark-bg-primary backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4">
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-serif font-bold text-cyan-400"
              aria-label={t.aria_label_logo}
            >
              Jurgen Kings
            </motion.h2>

            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  className="text-text-primary font-semibold dark:text-dark-text-primary hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors duration-300"
                  aria-label={`${link} link`}
                >
                  {link}
                </motion.a>
              ))}
              <MagneticEffect className="flex items-center space-x-2">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/jurgen-kings/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl p-2 hover:bg-bg-hover dark:hover:bg-dark-bg-hover rounded-full transition-colors duration-300"
                  aria-label="Perfil en LinkedIn"
                >
                  <FaLinkedin className="text-xl text-text-primary dark:text-dark-text-primary hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors duration-300" />
                </motion.a>
              </MagneticEffect>
              <MagneticEffect className="flex items-center space-x-2">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/JurgenKings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl p-2 hover:bg-bg-hover dark:hover:bg-dark-bg-hover rounded-full transition-colors duration-300"
                  aria-label="Perfil en GitHub"
                >
                  <FaGithub className="text-xl text-text-primary dark:text-dark-text-primary hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors duration-300" />
                </motion.a>
              </MagneticEffect>
              <MagneticEffect className="flex items-center space-x-2">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleIsDarkMode}
                  className="p-2 rounded-full hover:bg-bg-hover dark:hover:bg-dark-bg-hover transition-colors duration-300"
                  aria-label={t.aria_label_toggle_dark_mode}
                >
                  {isDarkMode ? (
                    <BsSun className="text-yellow-400 text-xl hover:text-cyan-400 transition-colors duration-300" />
                  ) : (
                    <BsMoon className="text-text-primary dark:text-dark-text-primary text-xl hover:text-cyan-400 transition-colors duration-300" />
                  )}
                </motion.button>
              </MagneticEffect>
              <LanguageSwitcher currentLang={lang} />
            </div>

            <button
              className="md:hidden text-text-primary dark:text-dark-text-primary hover:text-cyan-400 transition-colors duration-300"
              aria-label={isMenuOpen ? t.aria_label_close_menu : t.aria_label_open_menu}
              onClick={toggleIsOpenMenu}
            >
              <motion.div
                className="flex flex-col justify-center items-center w-full h-full"
                animate={isMenuOpen ? "open" : "closed"}
              >
                <motion.span
                  className="w-[22px] h-0.5 bg-text-primary dark:bg-dark-text-primary mb-[5px]"
                  variants={{
                    closed: { rotate: 0 },
                    open: { rotate: 45, translateY: 6 }
                  }}
                />
                <motion.span
                  className="w-[22px] h-0.5 bg-text-primary dark:bg-dark-text-primary mb-[5px]"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                />
                <motion.span
                  className="w-[22px] h-0.5 bg-text-primary dark:bg-dark-text-primary"
                  variants={{
                    closed: { rotate: 0 },
                    open: { rotate: -45, translateY: -6 }
                  }}
                />
              </motion.div>
            </button>
          </motion.div>

        </nav>
      </header>

      <NavMobile
        isMenuOpen={isMenuOpen}
        toggleIsOpenMenu={toggleIsOpenMenu}
        navLinks={navLinks}
        lang={lang}
      />
    </>


  )
}

export default Header