// src/components/sections/hero.tsx
import Button from '../ui/button'
import { Container } from '../ui/container'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-20 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl opacity-20 translate-y-1/2" />
      
      <Container className="relative pt-20 pb-24 text-center">
        {/* Product Hunt Badge */}
        <a 
          href="#" 
          className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow mb-8"
        >
          <Image
            src="/producthunt.svg"
            alt="Product Hunt Logo"
            width={20}
            height={20}
          />
          <span className="text-gray-600">Featured on Product Hunt</span>
        </a>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 text-transparent bg-clip-text">
            Track Your Device Costs Like Never Before
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your expensive devices into manageable daily costs.
            Your iPhone 14 Pro costs less than your daily coffee!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 my-12">
          {[
            {
              price: "$999",
              label: "iPhone 14 Pro",
              sublabel: "purchase price",
              color: "from-blue-500"
            },
            {
              price: "$0.91",
              label: "Daily Cost",
              sublabel: "over 3 years",
              color: "from-green-500"
            },
            {
              price: "67%",
              label: "Lifespan",
              sublabel: "remaining",
              color: "from-purple-500"
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="relative group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 ${item.color} to-transparent" />
              <div className="text-left">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    {item.price}
                  </span>
                  <div className="text-sm text-gray-500">
                    <div className="font-medium text-gray-900">{item.label}</div>
                    <div>{item.sublabel}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4">
          <Button size="lg" className="px-8 py-6 text-lg rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300">
            Start Tracking For Free
          </Button>
          <span className="text-sm text-gray-500">
            No credit card required • Free forever
          </span>
        </div>

        {/* Preview Image */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
          <Image
            src="/images/dashboard/screely-1731319506567.png"
            alt="Dashboard Preview"
            width={1200}
            height={675}
            className="rounded-t-2xl shadow-2xl"
          />
        </div>
      </Container>
    </div>
  )
}