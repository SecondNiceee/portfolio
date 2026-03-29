import { NextRequest, NextResponse } from "next/server"

interface GeoData {
  country?: string
  city?: string
  region?: string
}

async function getGeoData(ip: string): Promise<GeoData> {
  try {
    // Using ip-api.com (free, no key required, 45 requests/minute limit)
    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,regionName,city`)
    if (response.ok) {
      const data = await response.json()
      if (data.status === "success") {
        return {
          country: data.country,
          city: data.city,
          region: data.regionName,
        }
      }
    }
  } catch (error) {
    console.error("Geo lookup failed:", error)
  }
  return {}
}

async function sendTelegramMessage(message: string): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    console.error("Telegram credentials not configured")
    return false
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "HTML",
        }),
      }
    )
    return response.ok
  } catch (error) {
    console.error("Failed to send Telegram message:", error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { page, referrer, userAgent } = body

    // Get IP from headers
    const forwarded = request.headers.get("x-forwarded-for")
    const realIp = request.headers.get("x-real-ip")
    const ip = forwarded?.split(",")[0]?.trim() || realIp || "unknown"

    // Get geo data
    const geo = await getGeoData(ip)

    // Format message
    const timestamp = new Date().toLocaleString("ru-RU", {
      timeZone: "Europe/Moscow",
    })

    const message = `
<b>Новый посетитель на сайте</b>

<b>Время:</b> ${timestamp}
<b>IP:</b> ${ip}
<b>Страна:</b> ${geo.country || "Неизвестно"}
<b>Город:</b> ${geo.city || "Неизвестно"}
<b>Регион:</b> ${geo.region || "Неизвестно"}
<b>Страница:</b> ${page || "/"}
<b>Откуда пришел:</b> ${referrer || "Прямой заход"}
<b>Устройство:</b> ${userAgent?.substring(0, 100) || "Неизвестно"}
`.trim()

    await sendTelegramMessage(message)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Track error:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
