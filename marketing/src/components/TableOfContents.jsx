import { Container } from '@/components/Container'
import { Expandable } from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'Initial Consultation': {
    'Understanding Your Needs': 1,
    'Site Analysis': 15,
    'Budget Planning': 20,
  },
  'Design Phase': {
    'Conceptual Design': 21,
    'Detailed Drawings': 22,
    'Material Specifications': 26,
    '3D Modeling': 31,
  },
  'Approval Process': {
    'Planning Permissions': 50,
    'Local Authority Consultations': 57,
    'Building Regulations': 66,
  },
  'Construction Phase': {
    'Contractor Selection': 82,
    'Project Management': 88,
    'Quality Assurance': 95,
  },
}

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="py-16 scroll-mt-14 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Our Process
        </SectionHeading>
        <p className="mt-8 text-4xl font-bold tracking-tight font-display text-slate-900">
          Explore the comprehensive steps involved in our architectural planning service. Every detail you need to know is outlined.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Our service is designed to guide you from the initial concept to the completion of your project, ensuring all your architectural needs are met efficiently in the UK.
        </p>
        <Expandable>
          {({ isExpanded }) => (
            <>
              <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
                {Object.entries(tableOfContents)
                  .slice(0, isExpanded ? undefined : 2)
                  .map(([title, steps]) => (
                    <li key={title}>
                      <h3 className="text-3xl font-bold tracking-tight font-display text-slate-900">
                        {title}
                      </h3>
                      <ol
                        role="list"
                        className="px-6 py-3 mt-8 text-base tracking-tight divide-y divide-slate-300/30 rounded-2xl bg-slate-50 sm:py-7 sm:px-8"
                      >
                        {Object.entries(steps).map(([step, pageNumber]) => (
                          <li
                            key={step}
                            className="flex justify-between py-3"
                            aria-label={`${step} on page ${pageNumber}`}
                          >
                            <span
                              className="font-medium text-slate-900"
                              aria-hidden="true"
                            >
                              {step}
                            </span>
                            <span
                              className="font-mono text-slate-400"
                              aria-hidden="true"
                            >
                              {pageNumber}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </li>
                  ))}
              </ol>
              <Expandable.Button>See more</Expandable.Button>
            </>
          )}
        </Expandable>
      </Container>
    </section>
  )
}
