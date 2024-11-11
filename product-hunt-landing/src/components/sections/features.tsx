// src/components/sections/features.tsx
import { Check, Smartphone, Clock, DollarSign, LineChart, Bell } from 'lucide-react'
import { Container } from '../ui/container'
import Image from 'next/image'

export function Features() {
  const features = [
    {
      icon: Smartphone,
      title: "Device Detection",
      description: "Automatically detects and adds your current device"
    },
    {
      icon: Clock,
      title: "Lifecycle Tracking",
      description: "Monitor usage and plan upgrades effectively"
    },
    {
      icon: DollarSign,
      title: "Cost Analysis",
      description: "Break down device costs into daily perspective"
    },
    {
      icon: LineChart,
      title: "Usage Analytics",
      description: "Visualize your device usage patterns"
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Get notified when it's time to upgrade"
    }
  ]

  return (
    <div className="relative overflow-hidden bg-white py-24">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything you need to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}manage your devices
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track costs, monitor usage, and make informed decisions about your tech investments.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="relative group bg-white p-6 rounded-2xl border transition-all hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Demo Section */}
        <div className="relative rounded-3xl bg-gradient-to-b from-blue-50 to-white p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Real-time Device Analytics
              </h3>
              <p className="text-gray-600 mb-6">
                Get detailed insights about your device usage and costs. Make informed decisions about when to upgrade or sell your devices.
              </p>
              <ul className="space-y-4">
                {[
                  "Track daily and monthly costs",
                  "Monitor device depreciation",
                  "Analyze usage patterns",
                  "Plan future purchases"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-green-50 p-1 rounded-full">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-10" />
              <Image
                src="/public/images/dashboard/screely-1731319506567.png"
                alt="Analytics Dashboard"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}