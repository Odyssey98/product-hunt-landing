'use client'

import React from 'react';
import { Box, Clock, Smartphone, DollarSign, ChevronRight, Star, Users, BarChart } from "lucide-react";

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-24">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-3 bg-white p-2 rounded-full shadow-md">
            <Box className="w-6 h-6 text-purple-600" />
            <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent pr-2">
              TimeValue
            </span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 max-w-3xl">
            Transform Your Device Costs into
            <span className="text-purple-600"> Daily Value</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl">
            Make smarter tech decisions by understanding the true daily cost of your devices
          </p>

          <div className="flex gap-4">
            <button 
              onClick={() => window.location.href = 'https://ysb.chatgptnb.com/'}
              className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transform hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl">
              Try TimeValue Free
            </button>
            <button 
              onClick={() => window.location.href = 'https://ysb.chatgptnb.com/'}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-gray-50 border border-purple-200 transform hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2">
              Learn More <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-100 to-transparent rounded-3xl transform -skew-y-3"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl p-4 transform hover:-translate-y-2 transition-transform duration-300">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screely-1731322967973-Lq50kueC4LDHtvV470medG0mteJKVP.png"
              alt="TimeValue Dashboard"
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </div>


      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 py-24 bg-white">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <DollarSign className="w-8 h-8 text-purple-600" />,
              title: "Daily Cost Tracking",
              description: "Convert your device expenses into daily costs for better understanding and planning."
            },
            {
              icon: <Clock className="w-8 h-8 text-purple-600" />,
              title: "Lifecycle Management",
              description: "Monitor device lifespan and make data-driven decisions about upgrades."
            },
            {
              icon: <Smartphone className="w-8 h-8 text-purple-600" />,
              title: "Multi-Device Support",
              description: "Track and compare costs across your entire tech ecosystem seamlessly."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-purple-50 transition-colors duration-300 group">
              <div className="bg-white rounded-xl p-3 shadow-md w-14 h-14 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-purple-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: <Users className="w-8 h-8" />, value: "100+", label: "Active Users" },
              { icon: <BarChart className="w-8 h-8" />, value: "$500K+", label: "Costs Tracked" },
              { icon: <Star className="w-8 h-8" />, value: "4.2/5", label: "User Rating" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-center text-purple-300 mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold">{stat.value}</div>
                <div className="text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-3xl p-12">
          <div className="flex justify-center mb-8">
            <Star className="w-12 h-12 text-yellow-400 fill-current" />
          </div>
          <blockquote className="text-2xl font-medium text-gray-900 mb-6">
            &quot;TimeValue has completely transformed how I think about my tech purchases. Now I can make informed decisions based on daily costs rather than just upfront prices.&quot;
          </blockquote>
          <p className="text-gray-600">Sarah Chen, Product Designer</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Start Optimizing Your Device Costs Today</h2>
          <p className="text-xl text-purple-100 mb-8">Join thousands of users making smarter tech investment decisions</p>
          <button 
            onClick={() => window.location.href = 'https://ysb.chatgptnb.com/'}
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl">
            Launch TimeValue Now
          </button>
        </div>
      </div>
    </div>
  );
}