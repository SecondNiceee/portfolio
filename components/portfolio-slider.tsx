"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Autocoder",
    description: "Электроника автомобилей Mercedes, BMW, VAG. 2 языка.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YNtSksScJnvWpQMoipuLUmO8uHoWKp.png",
    url: "https://autocoder.pl/",
    tag: "Мультиязычный",
  },
  {
    id: 2,
    title: "Теле-Ателье",
    description: "Сервисный центр по ремонту телевизоров. Сайт с наибольшей прибылью.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tv-X6Iq7dQ4HjITctRnbdRMSIHf9VPNXF.jpg",
    url: "https://teleatele.kz/",
    tag: "Топ по прибыли",
  },
  {
    id: 3,
    title: "SmartCardio",
    description: "Инновационный прибор для мониторинга сердечного ритма.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smartcardio-YK6F7vTb5Za6dy9UX2k6O4pYk8gban.jpg",
    url: "https://smartcardio.ru/",
    tag: "Инновации",
  },
  {
    id: 4,
    title: "VB Finance",
    description: "Финансовые и юридические услуги для бизнеса.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vbstrakova-zMd4nTGwYO13WUzVbK5uerV2MEjl5z.webp",
    url: "https://vsbatrakova.ru/",
    tag: "Бизнес",
  },
  {
    id: 5,
    title: "Uronu-Net",
    description: "Страхование имущества от ударов БПЛА.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/save-lIeW3WZBPYFb6gXgcwjMwEp59OKyd2.webp",
    url: "https://uronu-net.ru/",
    tag: "Страхование",
  },
  {
    id: 6,
    title: "Визитка врача",
    description: "Детский кардиолог-аритмолог. Персональная визитка.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/visit-OrYyC2w9z3nOuzmFEbjFG0N9idDBhL.webp",
    url: "https://smartcardio.ru/ekaterina",
    tag: "Визитка",
  },
]

export function PortfolioSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Slider */}
      <div className="relative overflow-hidden rounded-xl">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="w-full flex-shrink-0">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={70}
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#5100fd] text-white text-xs font-medium px-3 py-1 rounded-full">
                    {project.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-medium mb-2">{project.title}</h3>
                  <p className="text-zinc-300 mb-4 max-w-xl">{project.description}</p>
                  <Button
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-full"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    Перейти
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-[#5100fd] w-6" 
                : "bg-zinc-600 hover:bg-zinc-500"
            }`}
          />
        ))}
      </div>

      {/* Caption */}
      <p className="text-center text-zinc-500 text-sm mt-4">
        И другие проекты...
      </p>
    </div>
  )
}
