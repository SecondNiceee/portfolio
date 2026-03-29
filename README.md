# NiceSite - Portfolio Website

Современный сайт-портфолио для веб-студии. Создан на Next.js с использованием Tailwind CSS.

## Возможности

- Адаптивный дизайн для всех устройств
- Анимированный фон с SVG линиями
- Плавная прокрутка (Lenis)
- SEO-оптимизация
- Слайдер портфолио
- Секция с ценами

## Отслеживание посетителей

При каждом посещении сайта отправляется уведомление в Telegram с информацией:
- IP-адрес посетителя
- Страна и город (через ip-api.com)
- Страница посещения
- Источник перехода (referrer)
- User Agent

### Настройка Telegram уведомлений

1. Создайте бота через [@BotFather](https://t.me/BotFather) и получите токен
2. Получите свой Chat ID (напишите боту [@userinfobot](https://t.me/userinfobot))
3. Добавьте переменные окружения:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

## Запуск

```bash
npm install
npm run dev
```

## Деплой на VPS

1. Клонируйте репозиторий
2. Создайте `.env` файл с переменными
3. Соберите проект: `npm run build`
4. Запустите: `npm start`

Рекомендуется использовать PM2 для управления процессом:

```bash
npm install -g pm2
pm2 start npm --name "nicesite" -- start
pm2 save
pm2 startup
```

## Технологии

- Next.js 15
- React 19
- Tailwind CSS v4
- Radix UI
- Lenis (плавная прокрутка)
- Vercel Analytics
