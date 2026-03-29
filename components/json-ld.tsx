export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NiceSite",
    url: "https://nicesite.ru",
    logo: "https://nicesite.ru/icon.svg",
    description: "Профессиональное создание сайтов и лендингов под ключ",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://t.me/LastTryS",
    },
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Создание лендингов и сайтов",
    description: "Профессиональное создание качественных лендингов и сайтов под ключ. SEO-оптимизация, адаптивный дизайн, быстрая загрузка.",
    provider: {
      "@type": "Organization",
      name: "NiceSite",
    },
    areaServed: {
      "@type": "Country",
      name: "Россия",
    },
    offers: {
      "@type": "Offer",
      price: "3000",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Создать качественный лендинг всего за 3000 рублей",
    description: "Создать сайт или купить лендинг недорого. Профессиональное создание лендингов и сайтов под ключ.",
    url: "https://nicesite.ru",
    mainEntity: {
      "@type": "Product",
      name: "Лендинг под ключ",
      description: "Качественный лендинг с SEO-оптимизацией и адаптивным дизайном",
      offers: {
        "@type": "Offer",
        price: "3000",
        priceCurrency: "RUB",
        availability: "https://schema.org/InStock",
      },
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит создать сайт?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Стоимость создания сайта начинается от 3000 рублей. Цена зависит от сложности проекта и необходимого функционала.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько времени занимает создание лендинга?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Создание качественного лендинга занимает от 1 до 7 дней в зависимости от сложности дизайна и контента.",
        },
      },
      {
        "@type": "Question",
        name: "Включена ли SEO-оптимизация?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, все наши сайты и лендинги включают базовую SEO-оптимизацию для поисковых систем.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
