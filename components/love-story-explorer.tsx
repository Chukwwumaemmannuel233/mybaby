"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star, MapPin, Camera, Music, Gift, Sparkles } from "lucide-react"

const loveStoryChapters = [
  {
    id: 1,
    title: "The First Glance",
    icon: Star,
    color: "from-pink-400 to-rose-400",
    content: {
      story:
        "It was a moment that changed everything. When our eyes first met, time seemed to stand still. I knew in that instant that you were someone special, someone who would change my life forever.",
      details:
        "The way you smiled, the sparkle in your eyes, the gentle way you laughed - everything about that moment is etched in my memory.",
      emotion: "My heart skipped a beat, and I felt like I was floating on air.",
    },
  },
  {
    id: 2,
    title: "Getting to Know You",
    icon: Heart,
    color: "from-rose-400 to-pink-400",
    content: {
      story:
        "Every conversation revealed another beautiful layer of who you are. Your kindness, your intelligence, your sense of humor - I fell deeper in love with each word we shared.",
      details:
        "Late night talks, shared dreams, inside jokes that only we understood. You became my favorite person to talk to.",
      emotion: "I found myself thinking about you constantly, counting the hours until we could talk again.",
    },
  },
  {
    id: 3,
    title: "Our First Date",
    icon: MapPin,
    color: "from-purple-400 to-pink-400",
    content: {
      story:
        "Nervous excitement filled the air as we embarked on our first official date. Every moment was perfect - your laughter, your stories, the way you made me feel so comfortable.",
      details:
        "From the restaurant to our evening walk, everything felt magical. The world seemed brighter when I was with you.",
      emotion: "I knew I was falling in love, and I hoped you felt the same way.",
    },
  },
  {
    id: 4,
    title: "Becoming Us",
    icon: Sparkles,
    color: "from-pink-400 to-purple-400",
    content: {
      story:
        "The day you said yes to being mine was the happiest day of my life. We officially became 'us' - a team, a partnership, a love story in the making.",
      details:
        "From that moment, every day became an adventure. We created traditions, shared dreams, and built a beautiful life together.",
      emotion: "Pure joy and excitement for all the memories we would create together.",
    },
  },
  {
    id: 5,
    title: "Growing Together",
    icon: Gift,
    color: "from-rose-400 to-purple-400",
    content: {
      story:
        "Through every season, every challenge, every celebration, we've grown stronger together. You've made me a better person, and our love has only deepened.",
      details:
        "Anniversaries, holidays, quiet Sunday mornings, adventures big and small - every moment with you is a treasure.",
      emotion: "Grateful every day for the love we share and excited for our future together.",
    },
  },
  {
    id: 6,
    title: "Forever and Always",
    icon: Music,
    color: "from-purple-400 to-rose-400",
    content: {
      story:
        "This is just the beginning of our story. With every passing day, I love you more. You are my present and my future, my heart and my home.",
      details:
        "Dreams of tomorrow, plans we're making, the life we're building - everything is more beautiful because you're in it.",
      emotion: "Endless love and excitement for all the chapters yet to be written in our love story.",
    },
  },
]

export function LoveStoryExplorer() {
  const [currentChapter, setCurrentChapter] = useState(0)
  const [isExploring, setIsExploring] = useState(false)

  if (!isExploring) {
    return (
      <div className="text-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full text-lg"
          onClick={() => setIsExploring(true)}
        >
          <Heart className="w-6 h-6 mr-2" />
          Begin Our Love Story Journey
        </Button>
      </div>
    )
  }

  const chapter = loveStoryChapters[currentChapter]
  const IconComponent = chapter.icon

  return (
    <div className="max-w-4xl mx-auto">
      {/* Chapter Navigation */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-2 bg-white/50 backdrop-blur-sm rounded-full p-1 sm:p-2">
          {loveStoryChapters.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentChapter(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentChapter ? "bg-pink-500 scale-125" : "bg-pink-200 hover:bg-pink-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Chapter Content */}
      <Card className="bg-gradient-to-br from-white/80 to-pink-50/80 backdrop-blur-sm border-pink-200 shadow-xl">
        <CardContent className="p-4 sm:p-6 md:p-8">
          <div className="text-center mb-6">
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r ${chapter.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
            >
              <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{chapter.title}</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed italic">"{chapter.content.story}"</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
                <CardContent className="p-4 sm:p-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Camera className="w-5 h-5 text-pink-500 mr-2" />
                    The Details
                  </h4>
                  <p className="text-gray-600">{chapter.content.details}</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200">
                <CardContent className="p-4 sm:p-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Heart className="w-5 h-5 text-rose-500 mr-2 fill-current" />
                    How I Felt
                  </h4>
                  <p className="text-gray-600">{chapter.content.emotion}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mt-8">
            <Button
              variant="outline"
              onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
              disabled={currentChapter === 0}
              className="border-pink-300 text-pink-600 hover:bg-pink-50 text-sm"
            >
              Previous Chapter
            </Button>

            <span className="text-sm text-gray-500">
              Chapter {currentChapter + 1} of {loveStoryChapters.length}
            </span>

            <Button
              variant="outline"
              onClick={() => setCurrentChapter(Math.min(loveStoryChapters.length - 1, currentChapter + 1))}
              disabled={currentChapter === loveStoryChapters.length - 1}
              className="border-pink-300 text-pink-600 hover:bg-pink-50 text-sm"
            >
              Next Chapter
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
