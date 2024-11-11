import { Box } from "lucide-react"

export default function Component() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Box className="w-8 h-8 text-[#8B5CF6]" />
          <h1 className="text-2xl font-medium">TimeValue</h1>
        </div>
        <p className="text-gray-600">
          Track your digital device costs daily and manage their lifecycle efficiently
        </p>
        <button className="bg-[#8B5CF6] text-white px-6 py-2 rounded-md hover:bg-[#7C3AED] transition-colors">
          Try TimeValue Now
        </button>
      </div>

      {/* Screenshot */}
      <div className="bg-gray-100 rounded-lg p-4">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screely-1731319506567-4OBsH1QaNkbm66OfknzRDAUm8jy8dR.png"
          alt="TimeValue Dashboard"
          width={1200}
          height={675}
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: "$",
            title: "Daily Cost Tracking",
            description: "See your device expenses broken down into daily costs. That $2,112 M1Pro? Just $5.8 per day over a year."
          },
          {
            icon: "⏰",
            title: "Lifecycle Management",
            description: "Monitor usage progress, expected lifespan, and make informed decisions about upgrades or replacements."
          },
          {
            icon: "📱",
            title: "Multi-Device Support",
            description: "Track all your devices in one place: computers, tablets, phones, and more. Compare costs across your tech ecosystem."
          }
        ].map((feature, index) => (
          <div key={index} className="text-center space-y-2">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-medium">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Why Use */}
      <div className="space-y-8">
        <h2 className="text-3xl font-medium text-center">Why Use TimeValue?</h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          {[
            "Gain insights into your true device costs and usage patterns",
            "Make informed decisions about future tech purchases",
            "Easily track multiple devices across different categories",
            "Visualize your tech expenses in terms of daily costs"
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <Box className="w-5 h-5 text-[#8B5CF6] flex-shrink-0" />
              <span className="text-lg">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <blockquote className="text-xl italic">
          &quot;TimeValue helped me realize I was spending the equivalent of 423 Starbucks lattes on my devices. It&apos;s changed how I think about my tech purchases!&quot;
        </blockquote>
        <p className="text-gray-600">- Happy TimeValue User</p>
      </div>

      {/* CTA */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-medium">Start Tracking Your Device Costs Today</h2>
        <p className="text-gray-600">
          Join others in making smarter device purchasing decisions
        </p>
        <button className="bg-[#8B5CF6] text-white px-6 py-2 rounded-md hover:bg-[#7C3AED] transition-colors">
          Launch TimeValue
        </button>
      </div>
    </div>
  )
}