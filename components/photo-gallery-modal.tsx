"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface PhotoGalleryModalProps {
  isOpen: boolean
  onClose: () => void
}

const allPhotos = [
  {
    id: 1,
    type: "video",
    src: "/videos/love-9.mp4?height=600&width=600&text=Beach Vacation", // ✅ Use actual video path
    caption: "Our magical first date ❤️",
    date: "January 2023",
  },
  {
    id: 2,
    type: "video",
    src: "/videos/love-1.mp4?height=600&width=600&text=Beach Vacation",
    caption: "Perfect beach day together 🏖️",
    date: "March 2023",
  },
  {
    id: 3,
    type: "video",
    src: "/videos/love-2.mp4?height=600&width=600&text=Beach Vacation",
    caption: "Celebrating our love 💕",
    date: "June 2023",
  },
  {
    id: 4,
    type: "video",
    src: "/videos/love-3.mp4?height=600&width=600&text=Beach Vacation",
    caption: "Beautiful sunset, beautiful you 🌅",
    date: "August 2023",
  },
  {
    id: 5,
    type: "video",
    src: "/videos/love-4.mp4?height=600&width=600&text=Beach Vacation",
    caption: "Perfect night in together 🥰",
    date: "October 2023",
  },
  {
    id: 6,
    type: "video",
    src: "/videos/love-5.mp4?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
  {
    id: 7,
    type: "video",
    src: "/videos/love-6.mp4?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
  {
    id: 8,
    type: "video",
    src: "/videos/love-7.mp4?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
  {
    id: 9,
    type: "video",
    src: "/videos/love-8.mp4?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
  {
    id: 10,
    type: "video",
    src: "/videos/love-10.mp4?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
  {
    id: 11,
    type: "video",
    src: "/videos/love-11.mp4?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
  {
    id: 12,
    type: "image",
    src: "/images/love (8).jpeg?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
  {
    id: 13,
    type: "image",
    src: "/images/love (9).jpeg?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
  {
    id: 14,
    type: "image",
    src: "/images/love (10).jpeg?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
  {
    id: 15,
    type: "image",
    src: "/images/love (11).jpeg?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
  {
    id: 16,
    type: "image",
    src: "/images/love (12).jpeg?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
  {
    id: 17,
    type: "image",
    src: "/images/love (13).jpeg?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
  {
    id: 18,
    type: "image",
    src: "/images/love (14).jpeg?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
  {
    id: 19,
    type: "image",
    src: "/images/love (15).jpeg?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
  {
    id: 20,
    type: "image",
    src: "/images/love (16).jpeg?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
  {
    id: 21,
    type: "image",
    src: "/images/love (17).jpeg?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
  {
    id: 22,
    type: "image",
    src: "/images/love (18).jpeg?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
  {
    id: 23,
    type: "image",
    src: "/images/love (19).jpeg?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
  {
    id: 24,
    type: "image",
    src: "/images/love (20).jpeg?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
  {
    id: 25,
    type: "image",
    src: "/images/love (21).jpeg?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
  {
    id: 26,
    type: "image",
    src: "/images/love (22).jpeg?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
  {
    id: 27,
    type: "image",
    src: "/images/love (24).jpeg?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
  {
    id: 28,
    type: "image",
    src: "/images/love (25).jpeg?height=600&width=600&text=Beach Vacation",
    caption: "Holiday magic with you ✨",
    date: "December 2023",
  },
]

export function PhotoGalleryModal({ isOpen, onClose }: PhotoGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!isOpen) return null

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % allPhotos.length)
  }

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + allPhotos.length) % allPhotos.length)
  }

  const current = allPhotos[currentIndex]

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="relative w-full max-w-6xl max-h-[95vh] mx-4 sm:mx-auto bg-white rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 bg-gradient-to-r from-pink-50 to-rose-50 border-b border-pink-200">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Our Beautiful Memories</h2>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row h-full max-h-[calc(90vh-80px)]">
          {/* Large Display */}
          <div className="flex-1 relative bg-gray-100 flex items-center justify-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevPhoto}
              className="absolute left-2 sm:left-4 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 w-10 h-10 sm:w-12 sm:h-12"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="relative w-full h-full flex items-center justify-center p-8">
              {current.type === "video" ? (
                <video
                  src={current.src}
                  controls
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                />
              ) : (
                <Image
                  src={current.src || "/placeholder.svg"}
                  alt={current.caption}
                  width={600}
                  height={600}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                />
              )}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={nextPhoto}
              className="absolute right-2 sm:right-4 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 w-10 h-10 sm:w-12 sm:h-12"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Caption */}
            <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800">{current.caption}</p>
                  <p className="text-sm text-gray-600">{current.date}</p>
                </div>
                <Heart className="w-6 h-6 text-pink-500 fill-current" />
              </div>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="w-full md:w-80 bg-gray-50 p-2 sm:p-4 overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">All Our Memories</h3>
            <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-2 gap-2">
              {allPhotos.map((photo, index) => (
                <Card
                  key={photo.id}
                  className={`cursor-pointer overflow-hidden transition-all duration-200 ${
                    index === currentIndex ? "ring-2 ring-pink-400 shadow-lg" : "hover:shadow-md"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="aspect-square relative">
                    {photo.type === "video" ? (
                      <video
                        src={photo.src}
                        muted
                        autoPlay
                        loop
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={photo.src || "/placeholder.svg"}
                        alt={photo.caption}
                        width={150}
                        height={150}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {index === currentIndex && (
                      <div className="absolute inset-0 bg-pink-400/20 flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white fill-current" />
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




