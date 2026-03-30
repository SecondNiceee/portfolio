"use client"

import { Button } from "@/components/ui/button"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { CircleArrowRight, Check, X, Zap, Search, Smartphone, Globe, FileCode, Layout, Image as ImageIcon, Code, Server, AlertCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { PortfolioSlider } from "@/components/portfolio-slider"
import { Logo } from "@/components/logo"

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const progress = Math.min(scrollY / viewportHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linesOpacity = 1 - scrollProgress
  const linesScale = 1 - scrollProgress * 0.3

  const scrollToSeo = () => {
    const seoSection = document.getElementById("seo")
    if (seoSection) {
      seoSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="relative min-h-[200vh] bg-black text-white overflow-hidden">
      <Navbar />

      {/* Animated Lines Background */}
      <div
        className="fixed inset-0 z-0 w-screen h-screen pointer-events-none transition-all duration-100"
        style={{
          opacity: linesOpacity,
          transform: `scale(${linesScale})`,
        }}
      >
        <div className="bg-lines-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2269"
            height="2108"
            viewBox="0 0 2269 2108"
            fill="none"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M510.086 0.543457L507.556 840.047C506.058 1337.18 318.091 1803.4 1.875 2094.29"
              stroke="#4C00EC"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeDasharray="100px 99999px"
              className="animate-line-race-1"
            />
            <path
              d="M929.828 0.543457L927.328 829.877C925.809 1334 737.028 1807.4 418.435 2106"
              stroke="#4C00EC"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeDasharray="100px 99999px"
              className="animate-line-race-2"
            />
            <path
              d="M1341.9 0.543457L1344.4 829.876C1345.92 1334 1534.7 1807.4 1853.29 2106"
              stroke="#4C00EC"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeDasharray="100px 99999px"
              className="animate-line-race-3"
            />
            <path
              d="M1758.96 0.543457L1761.49 840.047C1762.99 1337.18 1950.96 1803.4 2267.17 2094.29"
              stroke="#4C00EC"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeDasharray="100px 99999px"
              className="animate-line-race-4"
            />
            <path
              opacity="0.2"
              d="M929.828 0.543457L927.328 829.877C925.809 1334 737.028 1807.4 418.435 2106"
              stroke="white"
              strokeWidth="1"
              strokeMiterlimit="10"
            />
            <path
              opacity="0.2"
              d="M510.086 0.543457L507.556 840.047C506.058 1337.18 318.091 1803.4 1.875 2094.29"
              stroke="white"
              strokeWidth="1"
              strokeMiterlimit="10"
            />
            <path
              opacity="0.2"
              d="M1758.96 0.543457L1761.49 840.047C1762.99 1337.18 1950.96 1803.4 2267.17 2094.29"
              stroke="white"
              strokeWidth="1"
              strokeMiterlimit="10"
            />
            <path
              opacity="0.2"
              d="M1341.9 0.543457L1344.4 829.876C1345.92 1334 1534.7 1807.4 1853.29 2106"
              stroke="white"
              strokeWidth="1"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
      </div>

      {/* 3D Letter N - Volumetric Letter */}
      <div
        className="fixed pointer-events-none z-10"
        style={{
          opacity: linesOpacity,
          transform: `scale(${linesScale})`,
          perspective: "3000px",
          right: "30%",
          top: "30%",
        }}
      >
        <div
          className="relative text-[40vw] font-bold leading-none select-none animate-float-3d"
          style={{
            transformStyle: "preserve-3d",
            zIndex: 10,
          }}
        >
          {/* 3D volumetric layers - simplified */}
          {[...Array(25)].map((_, i) => {
            const depth = i - 12; // Center at 0
            const intensity = Math.max(0, 1 - Math.abs(depth) / 12);
            const brightness = Math.floor(30 * intensity);

            return (
              <span
                key={i}
                className="absolute inset-0"
                style={{
                  transform: `translateZ(${depth * 4}px)`,
                  color: `rgb(${brightness}, ${brightness}, ${brightness})`,
                  opacity: intensity * 0.8,
                  fontWeight: 900,
                }}
              >
                N
              </span>
            );
          })}
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12 pt-40 pb-32 min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Status Toggle */}
          <div className="flex items-center gap-3 mb-12 animate-fade-in">
            <div className="relative w-14 h-7 bg-gradient-to-r from-green-400 to-green-500 rounded-full">
              <div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300" />
            </div>
            <span className="text-sm text-zinc-300">Открыты для новых клиентов</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-[1.1] animate-fade-in-up text-balance">
            Создаем быстрые, современные сайты, приносящие прибыль
          </h1>

          {/* USP Badges */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up animation-delay-200">
            <div className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 rounded-full px-4 py-2">
              <Zap className="h-4 w-4 text-[#5100fd]" />
              <span className="text-sm text-zinc-300">Загрузка за 1 секунду</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 rounded-full px-4 py-2">
              <Search className="h-4 w-4 text-[#5100fd]" />
              <span className="text-sm text-zinc-300">Отличное SEO</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 rounded-full px-4 py-2">
              <span className="text-sm text-zinc-300">15+ Отзывов</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              onClick={scrollToSeo}
              className="group bg-[#5100fd] hover:bg-[#6610ff] text-white px-8 py-6 text-base rounded-full transition-all duration-[650ms] hover:scale-[1.02]"
            >
              Узнать больше
              <CircleArrowRight className="ml-2 h-5 w-5 transition-transform duration-[650ms] group-hover:rotate-90" />
            </Button>
          </div>
        </div>
      </div>

      {/* SEO Section */}
      <section id="seo" className="relative z-20 py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-balance">
              Ваш сайт будет готов к продвижению в Google и Яндекс
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-3xl">
              Мы не просто рисуем дизайн, мы создаем инструмент, который поисковики любят и понимают.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="relative rounded-2xl border border-zinc-800 p-3">
                <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative bg-zinc-900/50 rounded-xl p-6">
                  <FileCode className="h-8 w-8 text-[#5100fd] mb-4" />
                  <h3 className="text-xl font-medium mb-2">Техническая чистота</h3>
                  <p className="text-zinc-400">Правильная структура заголовков (H1-H6), sitemap.xml и robots.txt.</p>
                </div>
              </div>

              <div className="relative rounded-2xl border border-zinc-800 p-3">
                <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative bg-zinc-900/50 rounded-xl p-6">
                  <Code className="h-8 w-8 text-[#5100fd] mb-4" />
                  <h3 className="text-xl font-medium mb-2">Микроразметка</h3>
                  <p className="text-zinc-400">Внедряем Schema.org, чтобы в поиске ваш сайт выглядел богаче.</p>
                </div>
              </div>

              <div className="relative rounded-2xl border border-zinc-800 p-3">
                <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative bg-zinc-900/50 rounded-xl p-6">
                  <Smartphone className="h-8 w-8 text-[#5100fd] mb-4" />
                  <h3 className="text-xl font-medium mb-2">Адаптивность</h3>
                  <p className="text-zinc-400">Полное соответствие мобильным алгоритмам поисковиков.</p>
                </div>
              </div>

              <div className="relative rounded-2xl border border-zinc-800 p-3">
                <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative bg-zinc-900/50 rounded-xl p-6">
                  <Zap className="h-8 w-8 text-[#5100fd] mb-4" />
                  <h3 className="text-xl font-medium mb-2">Скорость</h3>
                  <p className="text-zinc-400">Поисковики любят сайты, которые открываются без задержек.</p>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-zinc-900/80 border border-zinc-700 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-medium mb-2">Важно знать</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Если вы только покупаете сайт на новый домен + хостинг, он получает «базу» для органического роста,
                    но для мгновенных заявок в первый месяц мы рекомендуем подключить контекстную рекламу.
                    Уже &quot;прогретому&quot; сайту можем улучшить конверсию, поработав с SEO.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section id="performance" className="relative z-20 py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-balance">
              Сайт без замедлений
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-3xl">
              Каждая секунда задержки стоит вам потерянных продаж.
            </p>

            {/* Why it matters */}
            <div className="mb-12">
              <h3 className="text-xl font-medium mb-6 text-zinc-300">Почему это важно</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative rounded-2xl border border-zinc-800 p-3">
                  <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                  <div className="relative bg-zinc-900/50 rounded-xl p-6">
                    <Globe className="h-8 w-8 text-[#5100fd] mb-4" />
                    <h4 className="text-lg font-medium mb-2">SEO</h4>
                    <p className="text-zinc-400 text-sm">Скоростные сайты ранжируются лучше поисковиками.</p>
                  </div>
                </div>

                <div className="relative rounded-2xl border border-zinc-800 p-3">
                  <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                  <div className="relative bg-zinc-900/50 rounded-xl p-6">
                    <Zap className="h-8 w-8 text-[#5100fd] mb-4" />
                    <h4 className="text-lg font-medium mb-2">Рост конверсии</h4>
                    <p className="text-zinc-400 text-sm">Быстрые сайты продают на 20-30% лучше.</p>
                  </div>
                </div>

                <div className="relative rounded-2xl border border-zinc-800 p-3">
                  <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                  <div className="relative bg-zinc-900/50 rounded-xl p-6">
                    <Smartphone className="h-8 w-8 text-[#5100fd] mb-4" />
                    <h4 className="text-lg font-medium mb-2">Мобильные клиенты</h4>
                    <p className="text-zinc-400 text-sm">Пользователь не закроет вкладку, ожидая загрузку.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How it's done */}
            <div>
              <h3 className="text-xl font-medium mb-6 text-zinc-300">Как это реализовано</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-zinc-900/50 rounded-xl p-4 border border-zinc-800">
                  <ImageIcon className="h-5 w-5 text-[#5100fd]" />
                  <span className="text-zinc-300 text-sm">Оптимизация изображений (WebP)</span>
                </div>
                <div className="flex items-center gap-3 bg-zinc-900/50 rounded-xl p-4 border border-zinc-800">
                  <Code className="h-5 w-5 text-[#5100fd]" />
                  <span className="text-zinc-300 text-sm">Чистый, минифицируемый код</span>
                </div>
                <div className="flex items-center gap-3 bg-zinc-900/50 rounded-xl p-4 border border-zinc-800">
                  <Server className="h-5 w-5 text-[#5100fd]" />
                  <span className="text-zinc-300 text-sm">Настройка кэширования и CDN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative z-20 py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-balance">
              Коммерческие примеры
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-3xl">
              Реальные проекты, которые приносят прибыль нашим клиентам.
            </p>

            <PortfolioSlider />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-20 py-12 pb-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-balance">
              Честные цены без скрытых доплат
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-3xl">
              Выберите формат сотрудничества, который подходит вашему бюджету. Все тарифы включают адаптивную версию для мобильных.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Basic Plan */}
              <div className="relative rounded-2xl border border-zinc-800 p-3">
                <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative bg-zinc-900/50 rounded-xl p-8">
                  <h3 className="text-2xl font-medium mb-2">Свой контроль</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold">3000</span>
                    <span className="text-zinc-400">рублей</span>
                  </div>
                  <p className="text-zinc-400 text-sm mb-6">
                    Идеально, если вы хотите сами выбирать и оплачивать услуги провайдеров.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-zinc-300 text-sm">Разработка сайта с нуля (лендинг или визитка)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-zinc-300 text-sm">Настройка вашего домена и хостинга</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-zinc-300 text-sm">Базовая SEO-оптимизация</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-zinc-300 text-sm">Удобная админ-панель</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-zinc-300 text-sm">Инструкция по управлению</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X className="h-5 w-5 text-red-500" />
                      <span className="text-zinc-500 text-sm">Оплата хостинга и домена отдельно</span>
                    </div>
                  </div>

                  <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-6 rounded-full">
                    Заказать за 3000 руб
                  </Button>
                </div>
              </div>

              {/* Best Choice Plan */}
              <div className="relative rounded-2xl border-2 border-[#5100fd] p-3">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#5100fd] text-white text-xs font-medium px-4 py-1 rounded-full">
                  Лучший выбор
                </div>
                <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative bg-zinc-900/50 rounded-xl p-8">
                  <h3 className="text-2xl font-medium mb-2">Полный пакет</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold">5000</span>
                    <span className="text-zinc-400">рублей</span>
                  </div>
                  <p className="text-zinc-400 text-sm mb-6">
                    Все включено: мы берем на себя хостинг, домен и техническую поддержку.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-zinc-300 text-sm">Все из тарифа &quot;Свой контроль&quot;</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-zinc-300 text-sm">Удобная админ-панель</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-zinc-300 text-sm">Хостинг и домен включены на год</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-zinc-300 text-sm">Расширенная SEO-оптимизация</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-zinc-300 text-sm">Техническая поддержка 30 дней</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-zinc-300 text-sm">Интеграция с Яндекс.Метрикой</span>
                    </div>
                  </div>

                  <Button className="w-full bg-[#5100fd] hover:bg-[#6610ff] text-white py-6 rounded-full">
                    Заказать за 5000 руб
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Panel Section */}
      <section id="admin" className="relative z-20 py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-balance">
              Удобная админ-панель
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-3xl">
              Редактируйте сайт без программиста. Все изменения применяются мгновенно.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="relative rounded-2xl border border-zinc-800 p-3">
                <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative bg-zinc-900/50 rounded-xl p-6">
                  <Layout className="h-8 w-8 text-[#5100fd] mb-4" />
                  <h3 className="text-xl font-medium mb-2">Редактирование контента</h3>
                  <p className="text-zinc-400">Текст, фото, SEO-настройки и прочие параметры сайта - все в одном месте.</p>
                </div>
              </div>

              <div className="relative rounded-2xl border border-zinc-800 p-3">
                <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative bg-zinc-900/50 rounded-xl p-6">
                  <Zap className="h-8 w-8 text-[#5100fd] mb-4" />
                  <h3 className="text-xl font-medium mb-2">Не влияет на скорость</h3>
                  <p className="text-zinc-400">Показатели загрузки на мобильных от 80% (Google Page Speed) или менее 1.5 секунды.</p>
                </div>
              </div>

              <div className="relative rounded-2xl border border-zinc-800 p-3">
                <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative bg-zinc-900/50 rounded-xl p-6">
                  <FileCode className="h-8 w-8 text-[#5100fd] mb-4" />
                  <h3 className="text-xl font-medium mb-2">Удобное разделение</h3>
                  <p className="text-zinc-400">Все разбито по секциям: главный экран, услуги, преимущества, цены, контакты и другие.</p>
                </div>
              </div>

              <div className="relative rounded-2xl border border-zinc-800 p-3">
                <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative bg-zinc-900/50 rounded-xl p-6">
                  <Globe className="h-8 w-8 text-[#5100fd] mb-4" />
                  <h3 className="text-xl font-medium mb-2">Быстрая публикация</h3>
                  <p className="text-zinc-400">Изменения с админки попадают на сайт в течение 30 секунд.</p>
                </div>
              </div>
            </div>

            {/* Screenshots */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VbRLyK1MZkDWiruhUbZfLbMpcqeXwo.png"
                  alt="Админ-панель: редактирование секций"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dDvbkvqI1JKQaL9EH2R8MKWeTLl154.png"
                  alt="Админ-панель: настройки сайта"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Need Section */}
      <section id="requirements" className="relative z-20 py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-balance">
              Что нужно, чтобы ваш сайт заработал?
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-3xl">
              Полный расчет затрат на запуск вашего сайта.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between bg-zinc-900/50 rounded-xl p-5 border border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#5100fd]/20 flex items-center justify-center">
                    <span className="text-[#5100fd] font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Заказать услугу</h3>
                    <p className="text-sm text-zinc-400">Разработка сайта под ключ</p>
                  </div>
                </div>
                <span className="text-xl font-bold">3000 - 5000 руб</span>
              </div>

              <div className="flex items-center justify-between bg-zinc-900/50 rounded-xl p-5 border border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#5100fd]/20 flex items-center justify-center">
                    <span className="text-[#5100fd] font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Домен</h3>
                    <p className="text-sm text-zinc-400">Адрес вашего сайта (например, site.ru)</p>
                  </div>
                </div>
                <span className="text-xl font-bold">200 - 500 руб</span>
              </div>

              <div className="flex items-center justify-between bg-zinc-900/50 rounded-xl p-5 border border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#5100fd]/20 flex items-center justify-center">
                    <span className="text-[#5100fd] font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Хостинг</h3>
                    <p className="text-sm text-zinc-400">Рекомендуем Beget - качественный и быстрый</p>
                  </div>
                </div>
                <span className="text-xl font-bold">220 руб/мес</span>
              </div>
            </div>

            {/* Total */}
            <div className="bg-[#5100fd]/10 border border-[#5100fd]/30 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-medium mb-1">Итого для старта:</h3>
                  <p className="text-sm text-zinc-400">Единоразово + ежемесячный хостинг</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-[#5100fd]">от 3420 руб</span>
                  <p className="text-sm text-zinc-400">+ 220 руб/мес</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative z-20 py-12 border-t border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <Logo className="mb-4" />
              <p className="text-zinc-400 text-sm">Создаем быстрые сайты, приносящие прибыль</p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex items-center gap-4">
                <a href="https://t.me/username" className="text-zinc-400 hover:text-white transition-colors">
                  Telegram
                </a>
                <a href="https://wa.me/79001234567" className="text-zinc-400 hover:text-white transition-colors">
                  WhatsApp
                </a>
              </div>
              <p className="text-zinc-500 text-sm">
                &copy; 2026 NiceSite. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
