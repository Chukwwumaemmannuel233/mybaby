import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star, Sparkles, Sun, Moon, Flower } from "lucide-react"

const reasons = [
  {
    icon: Heart,
    title: "Your Beautiful Heart",
    description: "The way you care for everyone around you shows your incredible soul",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Star,
    title: "Your Amazing Laugh",
    description: "Your laughter is music to my ears and brightens my entire world",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "Your Intelligence",
    description: "Your brilliant mind and thoughtful conversations inspire me daily",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: Sun,
    title: "Your Positive Energy",
    description: "You bring sunshine into every room and make everything better",
    color: "from-yellow-400 to-pink-400",
  },
  {
    icon: Moon,
    title: "Your Gentle Nature",
    description: "Your kindness and compassion make you absolutely extraordinary",
    color: "from-purple-400 to-pink-400",
  },
  {
    icon: Flower,
    title: "Your Natural Beauty",
    description: "Inside and out, you are the most beautiful person I've ever known",
    color: "from-pink-400 to-rose-400",
  },
]

export function ReasonsILoveYou() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {reasons.map((reason, index) => {
        const IconComponent = reason.icon
        return (
          <Card
            key={index}
            className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
          >
            <CardContent className="p-4 sm:p-6 text-center">
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${reason.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
