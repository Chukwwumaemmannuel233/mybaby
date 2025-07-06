"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Heart } from "lucide-react"

const quotes = [
  "You are my today and all of my tomorrows.",
  "In all the world, there is no heart for me like yours.",
  "You are my sun, my moon, and all my stars.",
  "I love you not only for what you are, but for what I am when I am with you.",
  "You make me want to be a better person every single day.",
  "My heart is perfect because you are in it.",
  "You are the poetry I never knew how to write.",
  "Every love story is beautiful, but ours is my favorite.",
]

export function LoveQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200 p-4 sm:p-6 md:p-8 text-center min-h-[200px] flex items-center justify-center">
      <CardContent className="p-0">
        <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-pink-400 mx-auto mb-4" />
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 italic mb-4 transition-all duration-500">
          "{quotes[currentQuote]}"
        </p>
        <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 mx-auto fill-current animate-pulse" />
      </CardContent>
    </Card>
  )
}
