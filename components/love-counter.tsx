"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Clock, Calendar, Star, Timer, Sparkles } from "lucide-react"

export function LoveCounter() {
  const [timeData, setTimeData] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set your relationship start date here
    const startDate = new Date("2024-03-20") // Replace with your actual date

    const updateTime = () => {
      const now = new Date()
      const diff = now.getTime() - startDate.getTime()

      // Calculate years
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))

      // Calculate months (remaining after years)
      const remainingAfterYears = diff - years * 1000 * 60 * 60 * 24 * 365.25
      const months = Math.floor(remainingAfterYears / (1000 * 60 * 60 * 24 * 30.44))

      // Calculate days (remaining after months)
      const remainingAfterMonths = remainingAfterYears - months * 1000 * 60 * 60 * 24 * 30.44
      const days = Math.floor(remainingAfterMonths / (1000 * 60 * 60 * 24))

      // Calculate hours, minutes, seconds
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeData({ years, months, days, hours, minutes, seconds })
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-4">
      <Card className="bg-gradient-to-br from-pink-100 to-rose-100 border-pink-200">
        <CardContent className="p-3 sm:p-4 text-center">
          <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 mx-auto mb-2" />
          <div className="text-xl sm:text-2xl font-bold text-pink-600">{timeData.years}</div>
          <div className="text-xs sm:text-sm text-pink-500">Years</div>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-rose-100 to-pink-100 border-rose-200">
        <CardContent className="p-3 sm:p-4 text-center">
          <Star className="w-6 h-6 sm:w-8 sm:h-8 text-rose-500 mx-auto mb-2" />
          <div className="text-xl sm:text-2xl font-bold text-rose-600">{timeData.months}</div>
          <div className="text-xs sm:text-sm text-rose-500">Months</div>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-purple-200">
        <CardContent className="p-3 sm:p-4 text-center">
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 mx-auto mb-2" />
          <div className="text-xl sm:text-2xl font-bold text-purple-600">{timeData.days}</div>
          <div className="text-xs sm:text-sm text-purple-500">Days</div>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-pink-100 to-purple-100 border-pink-200">
        <CardContent className="p-3 sm:p-4 text-center">
          <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 mx-auto mb-2" />
          <div className="text-xl sm:text-2xl font-bold text-pink-600">{timeData.hours}</div>
          <div className="text-xs sm:text-sm text-pink-500">Hours</div>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-rose-100 to-purple-100 border-rose-200">
        <CardContent className="p-3 sm:p-4 text-center">
          <Timer className="w-6 h-6 sm:w-8 sm:h-8 text-rose-500 mx-auto mb-2" />
          <div className="text-xl sm:text-2xl font-bold text-rose-600">{timeData.minutes}</div>
          <div className="text-xs sm:text-sm text-rose-500">Minutes</div>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-purple-100 to-rose-100 border-purple-200">
        <CardContent className="p-3 sm:p-4 text-center">
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 mx-auto mb-2 fill-current animate-pulse" />
          <div className="text-xl sm:text-2xl font-bold text-purple-600">{timeData.seconds}</div>
          <div className="text-xs sm:text-sm text-purple-500">Seconds</div>
        </CardContent>
      </Card>
    </div>
  )
}
