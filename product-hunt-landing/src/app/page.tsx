import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { Testimonials } from '@/components/sections/testimonials'
import { CTA } from '@/components/sections/cta'

export default function Home() {
  return (
    <main>
      {/* Product Hunt Banner */}
      <div className="bg-[#da552f] text-white text-center py-2">
        <span className="text-sm">✨ Featured on Product Hunt</span>
      </div>
      
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </main>
  )
}