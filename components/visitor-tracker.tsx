"use client"

import { useEffect } from "react"

export function VisitorTracker() {
  useEffect(() => {
    // Track visitor on page load
    const trackVisitor = async () => {
      try {
        await fetch("/api/track", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            page: window.location.pathname,
            referrer: document.referrer || null,
            userAgent: navigator.userAgent,
          }),
        })
      } catch (error) {
        // Silently fail - tracking should not affect user experience
        console.error("Tracking failed:", error)
      }
    }

    trackVisitor()
  }, [])

  return null
}
