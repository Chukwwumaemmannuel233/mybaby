"use client"

import Image from "next/image"
import { Heart, Calendar, Camera, MessageCircle, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FloatingHearts } from "@/components/floating-hearts"
import { LoveCounter } from "@/components/love-counter"
import { LoveQuotes } from "@/components/love-quotes"
import { ReasonsILoveYou } from "@/components/reasons-i-love-you"
import { LoveLetters } from "@/components/love-letters"
import { PhotoGalleryModal } from "@/components/photo-gallery-modal"
import { LoveStoryExplorer } from "@/components/love-story-explorer"
import { useState } from "react"

export default function LoveWebsite() {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false)
  const [showLoveStory, setShowLoveStory] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <FloatingHearts />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 to-purple-200/20" />
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="animate-pulse">
            <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6 fill-current" />
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent mb-6">
            My Beautiful Angel
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            To the most amazing woman in my life, my heart, my soul, my everything. This website is a small token of my
            endless love for you. ✨
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-3 sm:px-8 rounded-full"
              onClick={() => setShowLoveStory(true)}
            >
              <Heart className="w-5 h-5 mr-2" />
              Explore Our Love Story
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-pink-300 text-pink-600 hover:bg-pink-50 px-6 py-3 sm:px-8 rounded-full bg-transparent"
              onClick={() => document.getElementById("memories")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              See Memories
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-pink-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Her Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">About My Princess</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Every day with you feels like a fairy tale. Here's what makes you so incredibly special...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl px-4 sm:px-6 mx-auto">
            <div className="space-y-6">
              <Card className="p-4 sm:p-6 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <Star className="w-8 h-8 text-pink-500 mt-1 fill-current" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Your Beautiful Soul</h3>
                      <p className="text-gray-600">
                        Your kindness, compassion, and the way you light up every room you enter makes you absolutely
                        extraordinary.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <Sparkles className="w-8 h-8 text-purple-500 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Your Amazing Smile</h3>
                      <p className="text-gray-600">
                        That smile of yours can brighten the darkest days and makes my heart skip a beat every single
                        time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 sm:p-6 bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <Heart className="w-8 h-8 text-rose-500 mt-1 fill-current" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Your Loving Heart</h3>
                      <p className="text-gray-600">
                        The way you love, care, and support everyone around you shows what an incredible person you are.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/love (23).jpeg"
                  alt="My Beautiful Love"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent" />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-10 h-10 text-white fill-current animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Love Story Explorer Section */}
      {showLoveStory && (
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Love Story Journey</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Take a journey through the chapters of our beautiful love story...
              </p>
            </div>
            <LoveStoryExplorer />
          </div>
        </section>
      )}

      {/* Love Counter Section */}
      <section className="py-20 bg-gradient-to-br from-pink-100 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Time We've Been in Love</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Every second with you is precious. Here's how long we've been creating beautiful memories together...
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <LoveCounter />
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50" id="memories">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Beautiful Memories</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Every moment with you is a treasure. Here are some of our favorite memories together...
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={`/images/love (${index}).jpeg`}
                    alt={`Beautiful Memory ${index}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">Beautiful moment together ❤️</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full"
              onClick={() => setIsPhotoModalOpen(true)}
            >
              <Camera className="w-5 h-5 mr-2" />
              View All Photos
            </Button>
          </div>
        </div>
      </section>

      {/* Love Quotes Section */}
      <section className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Words of Love</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Beautiful quotes that remind me of our love story...
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <LoveQuotes />
          </div>
        </div>
      </section>

      {/* Love Timeline Section */}
      <section className="py-20 bg-white/70 backdrop-blur-sm" id="timeline">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Love Story Timeline</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              From the first moment we met to this beautiful journey we're on together...
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-300 to-purple-300"></div>

              {[
                {
                  date: "First Meeting",
                  title: "The Day Everything Changed",
                  description:
                    "When I first saw you, I knew my life would never be the same. Your smile captured my heart instantly.",
                },
                {
                  date: "First Date",
                  title: "Magic in the Air",
                  description:
                    "Our first date was perfect. Time seemed to stop when I was with you, and I knew I was falling in love.",
                },
                {
                  date: "Becoming Official",
                  title: "You Said Yes!",
                  description:
                    "The happiest day of my life when you agreed to be mine. My heart was overflowing with joy and love.",
                },
                {
                  date: "Today",
                  title: "Forever and Always",
                  description:
                    "Every day with you is a blessing. I can't wait to spend the rest of my life loving you more and more.",
                },
              ].map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <Card
                    className={`w-full sm:w-80 md:w-96 p-4 sm:p-6 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                  >
                    <CardContent className="p-0">
                      <div className="flex items-center mb-3">
                        <Calendar className="w-5 h-5 text-pink-500 mr-2" />
                        <span className="text-sm font-medium text-pink-600">{milestone.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-400 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reasons I Love You Section */}
      <section id="reasons" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Infinite Reasons I Love You
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              There are countless reasons why I love you, but here are just a few that make my heart overflow...
            </p>
          </div>
          <div className="max-w-7xl mx-auto">
            <ReasonsILoveYou />
          </div>
        </div>
      </section>

      {/* Love Messages Section */}
      <section className="py-20 bg-gradient-to-br from-rose-100 to-pink-100" id="messages">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Messages from My Heart</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Words can never fully express how much you mean to me, but here are some thoughts from my heart...
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              "You are my sunshine on cloudy days, my anchor in stormy seas, and my greatest blessing in life.",
              "Every morning I wake up grateful for another day to love you and another chance to make you smile.",
              "Your love has transformed me into a better person. Thank you for believing in me and supporting my dreams.",
              "In a world full of temporary things, you are my forever. I choose you today, tomorrow, and always.",
              "You make ordinary moments feel extraordinary just by being there. Life with you is pure magic.",
              "My love for you grows stronger with each passing day. You are my heart, my soul, my everything.",
            ].map((message, index) => (
              <Card
                key={index}
                className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm border-pink-200 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <MessageCircle className="w-8 h-8 text-pink-500 mb-4" />
                  <p className="text-gray-700 italic leading-relaxed">"{message}"</p>
                  <div className="mt-4 flex justify-end">
                    <Heart className="w-5 h-5 text-pink-400 fill-current" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Love Letters Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Love Letters to You</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Personal messages from my heart to yours, written with all my love...
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <LoveLetters />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-12 h-12 mx-auto mb-4 fill-current animate-pulse" />
          <h3 className="text-2xl font-bold mb-2">Forever Yours</h3>
          <p className="text-pink-100 mb-4">
            This website is just a small glimpse into the infinite love I have for you.
          </p>
          <p className="text-sm text-pink-200">Made with ❤️ for the most beautiful woman in the world</p>
        </div>
      </footer>
      <PhotoGalleryModal isOpen={isPhotoModalOpen} onClose={() => setIsPhotoModalOpen(false)} />
    </div>
  )
}
