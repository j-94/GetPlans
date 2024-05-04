import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (<section id="offerings" aria-label="Key Offerings" className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32">
  <Container className="text-lg tracking-tight text-slate-700">
      <p className="font-display text-4xl font-bold tracking-tight text-slate-900 mb-6">
          Our Key Offerings
      </p>
      
      <ul role="list" className="mt-4 space-y-3">
          {[  
              <><span className="font-semibold">Detailed Floor Plans:</span> Comprehensive layout visuals of your property</>,
              <><span className="font-semibold">Measured Site Survey:</span> Precise property dimensions</>,
              <><span className="font-semibold">Design Consultation:</span> Expert-guided brainstorming sessions</>,
              <><span className="font-semibold">Property Photographs:</span> Visual documentation of your property</>,
              <><span className="font-semibold">Planning Options Overview:</span> Strategic insights for potential paths</>,
              <><span className="font-semibold">Custom Feature Requests:</span> Transform your unique ideas into reality</>,
              <><span className="font-semibold">Planning Application Management:</span> Hassle-free official processes</>,
              <><span className="font-semibold">Local Planning Authority Liaison:</span> Ensuring smooth collaborations</>,
              <><span className="font-semibold">Diverse Design Options:</span> Multiple ideas backed by experts</>,
              <><span className="font-semibold">Electronic Planning Submission:</span> Efficient, paperless applications</>,
          ].map((feature, index) => (
              <li key={index} className="flex">
                  <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
                  <span className="ml-4">{feature}</span>
              </li>
          ))}
      </ul>
  </Container>
</section>



  )
}
