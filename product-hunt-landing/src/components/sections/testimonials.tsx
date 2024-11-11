// src/components/sections/testimonials.tsx
import { Star } from 'lucide-react'
import { Container } from '@/components/ui/container'
import Image from 'next/image'

const testimonials = [
  {
    quote: "Finally found a tool that helps me understand my tech investments. Seeing my MacBook Pro costs less per day than my Netflix subscription was eye-opening!",
    author: {
      name: "Sarah Mitchell",
      role: "Product Designer at Figma",
      image: "/testimonials/sarah.jpg"
    },
    rating: 5,
    platform: "Product Hunt",
    badge: "EARLY ADOPTER"
  },
  {
    quote: "This changed how I think about device costs. The daily breakdown makes expensive purchases much more approachable.",
    author: {
      name: "Michael Brown",
      role: "Tech Reviewer",
      image: "/testimonials/michael.jpg"
    },
    rating: 5,
    platform: "Twitter",
    badge: "VERIFIED USER"
  }
]

export function Testimonials() {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Loved by Tech Enthusiasts</h2>
          <p className="text-gray-600">Join thousands of users making smarter device decisions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Platform Badge */}
              <div className="absolute -top-3 right-8 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                {testimonial.badge}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-sm text-gray-500">{testimonial.platform}</span>
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-lg mb-6">&quot;{testimonial.quote}&quot;</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonial.author.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.author.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-500 mb-6">TRUSTED BY TEAMS AT</p>
          <div className="flex justify-center gap-12 grayscale opacity-50">
            <Image src="/logos/apple.svg" alt="Apple" width={100} height={40} />
            <Image src="/logos/google.svg" alt="Google" width={100} height={40} />
            <Image src="/logos/microsoft.svg" alt="Microsoft" width={100} height={40} />
            <Image src="/logos/amazon.svg" alt="Amazon" width={100} height={40} />
          </div>
        </div>
      </Container>
    </div>
  )
}