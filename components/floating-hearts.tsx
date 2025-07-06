"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    const heartArray = Array.from({ length: window.innerWidth < 768 ? 8 : 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
    }))
    setHearts(heartArray)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute w-3 h-3 sm:w-4 sm:h-4 text-pink-300 fill-current animate-float opacity-20 sm:opacity-30"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: window.innerWidth < 768 ? "6s" : "8s",
          }}
        />
      ))}
    </div>
  )
}
