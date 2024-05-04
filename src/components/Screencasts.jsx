import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import duotoneImage from '@/images/screencasts/duotone.svg'
import gridsImage from '@/images/screencasts/grids.svg'
import setupImage from '@/images/screencasts/setup.svg'
import strokesImage from '@/images/screencasts/strokes.svg'

const services = [
  {
    title: 'Consultation',
    description:
      'Schedule a call or site visit to discuss your project ideas and goals.',
    image: setupImage,
    runtime: { minutes: 30, seconds: 0 },
  },
  {
    title: 'Design',
    description:
      'Our team creates detailed floor plans, 3D renderings, and custom designs tailored to your vision.',
    image: gridsImage,
    runtime: { minutes: 45, seconds: 0 },
  },
  {
    title: 'Planning',
    description:
      'We handle all aspects of the planning application process, liaising with local authorities to ensure smooth approval.',
    image: strokesImage,
    runtime: { minutes: 60, seconds: 0 },
  },
  {
    title: 'Execution',
    description:
      'Once approved, we oversee the construction process to bring your dream space to life.',
    image: duotoneImage,
    runtime: { minutes: 75, seconds: 0 },
  },
]

function PlayIcon(props) {
  return (
    <svg
      aria-hidden="true"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
      <circle cx="8" cy="8" r="6.25" fill="none" />
    </svg>
  )
}

export function Screencasts() {
  return (
    <section
      id="screencasts"
      aria-labelledby="screencasts-title"
      className="py-16 scroll-mt-14 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="screencasts-title">
          Transform Your Space with Expert Architecture Services
        </SectionHeading>
        <p className="mt-8 text-4xl font-bold tracking-tight font-display text-slate-900">
          From concept to completion, we guide you through every step of the design and planning process.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Discover our comprehensive services for residential and commercial projects, designed to bring your vision to life efficiently and effectively.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 gap-y-10 gap-x-8 [counter-reset:service] sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <li key={service.title} className="[counter-increment:service]">
              <div
                className="relative flex items-center justify-center px-6 shadow-lg h-44 rounded-2xl"
                style={{
                  backgroundImage:
                    'conic-gradient(from -49.8deg at 50% 50%, #7331FF 0deg, #00A3FF 59.07deg, #4E51FF 185.61deg, #39DBFF 284.23deg, #B84FF1 329.41deg, #7331FF 360deg)',
                }}
              >
                <div className="flex overflow-hidden rounded shadow-sm">
                  <Image src={service.image} alt="" unoptimized />
                </div>
                <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
                  <PlayIcon className="w-4 h-4 fill-current stroke-current" />
                  <time
                    dateTime={`${service.runtime.minutes}m ${service.runtime.seconds}s`}
                    className="ml-2"
                  >
                    {`${service.runtime.minutes}:${service.runtime.seconds
                      .toString()
                      .padStart(2, '0')}`}
                  </time>
                </div>
              </div>
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(service,decimal-leading-zero)]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
