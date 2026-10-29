import { useState, useEffect } from 'react'
import heroImage from '../assets/images/main.jpeg'

interface HeroProps {
  title: string
  subtitle: string
  imageUrl: string
}

const Hero = ({ title, subtitle, imageUrl }: HeroProps) => {
  const [displayedTitle, setDisplayedTitle] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)

  // Use imported image if imageUrl is the relative path
  const bgImage = imageUrl === '/assets/images/main.jpeg' ? heroImage : imageUrl

  useEffect(() => {
    if (currentIndex < title.length) {
      const timeout = setTimeout(() => {
        setDisplayedTitle(prev => prev + title[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 45) // Typing speed: 45ms per character

      return () => clearTimeout(timeout)
    } else if (currentIndex === title.length && title.length > 0) {
      // Typewriter done: lighten the background and slide in the subtitle and buttons.
      // Plain CSS transitions, so the content still appears if animations can't run.
      const typingCompletionDelay = setTimeout(() => setRevealed(true), 100)
      return () => clearTimeout(typingCompletionDelay)
    }
  }, [currentIndex, title])

  return (
    <section
      className="relative flex min-h-[calc(80vh-4rem)] sm:min-h-[calc(90vh-4rem)] w-full items-center px-4 sm:px-8 lg:px-10 py-12 sm:py-14 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay: dark while typing, lighter once the title is complete */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/60 to-brand-950/75" />
      <div
        className={`absolute inset-0 bg-brand-950/30 transition-opacity duration-700 ${revealed ? 'opacity-0' : 'opacity-100'}`}
      />
      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <img
          src={`${import.meta.env.BASE_URL}images/logo.png`}
          alt="Vivekananda Bhawan emblem"
          className="w-20 h-20 sm:w-28 sm:h-28 rounded-full shadow-2xl ring-4 ring-white/20 mb-6"
        />
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-white max-w-4xl">
          {displayedTitle}
          <span className={`${displayedTitle.length === title.length ? 'hidden' : 'animate-pulse'}`}>|</span>
        </h1>
        <div
          className={`transition-all duration-700 ease-out ${
            revealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'
          }`}
        >
          <div className="w-16 h-1 bg-saffron-500 mt-5 mb-5" />
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/85 max-w-2xl">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#/facilities"
              className="px-6 py-3 rounded-full bg-saffron-500 text-brand-950 font-semibold shadow-lg hover:bg-saffron-400 transition-colors"
            >
              Explore Facilities
            </a>
            <a
              href="#/gallery"
              className="px-6 py-3 rounded-full bg-saffron-500 text-brand-950 font-semibold shadow-lg hover:bg-saffron-400 transition-colors"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
