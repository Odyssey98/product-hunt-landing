import { Container } from '../ui/container'
import Button from '../ui/button'

export function CTA() {
  return (
    <Container className="py-20">
      <div className="bg-blue-50 p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">
          Start Tracking Your Devices
        </h2>
        <p className="text-gray-600 mb-8">
          Join thousands of tech enthusiasts making smarter device decisions
        </p>
        <Button size="lg">
          Try for Free
        </Button>
        <p className="text-sm text-gray-500 mt-4">
          No credit card required • Free forever
        </p>

        {/* Trust Signals */}
        <div className="mt-16">
          <p className="text-gray-500 mb-4">As featured in</p>
          <div className="flex justify-center gap-8 opacity-50">
            <span className="font-serif text-xl">TechCrunch</span>
            <span className="font-serif text-xl">The Verge</span>
            <span className="font-serif text-xl">Wired</span>
          </div>
        </div>
      </div>
    </Container>
  )
}