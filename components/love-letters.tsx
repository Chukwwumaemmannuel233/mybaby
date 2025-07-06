import { Card, CardContent } from "@/components/ui/card"
import { Mail, Heart, Calendar } from "lucide-react"

const letters = [
  {
    date: "Every Morning",
    title: "Good Morning, Beautiful",
    content:
      "Every morning I wake up and the first thought in my mind is you. Your smile, your laugh, the way you make everything better just by being there. I can't wait to spend another beautiful day loving you.",
    color: "from-pink-100 to-rose-100",
  },
  {
    date: "Every Evening",
    title: "My Daily Gratitude",
    content:
      "As each day ends, I'm filled with gratitude for having you in my life. You make ordinary moments feel magical, and I fall in love with you more deeply with each passing day.",
    color: "from-purple-100 to-pink-100",
  },
  {
    date: "Always",
    title: "Forever and Always",
    content:
      "My love, you are my greatest blessing, my best friend, and my soulmate. I promise to love you, cherish you, and support you through all of life's adventures. You are my forever.",
    color: "from-rose-100 to-pink-100",
  },
]

export function LoveLetters() {
  return (
    <div className="space-y-8">
      {letters.map((letter, index) => (
        <Card
          key={index}
          className={`bg-gradient-to-br ${letter.color} border-pink-200 hover:shadow-lg transition-shadow duration-300`}
        >
          <CardContent className="p-4 sm:p-6 md:p-8">
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-pink-500 mr-3" />
              <div className="flex items-center text-sm text-pink-600">
                <Calendar className="w-4 h-4 mr-1" />
                {letter.date}
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">{letter.title}</h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">{letter.content}</p>
            <div className="flex justify-end">
              <Heart className="w-5 h-5 text-pink-500 fill-current" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
