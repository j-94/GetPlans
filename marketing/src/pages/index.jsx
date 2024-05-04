import Head from 'next/head'

import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Transform Your Space with Expert Architecture Services
        </title>
        <meta
          name="description"
          content="From concept to completion, we guide you through every step of the design and planning process."
        />
      </Head>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
      <Testimonial
        id="testimonial-from-john-and-sarah"
        author={{
          name: 'John and Sarah',
          role: 'Homeowners',
          image: avatarImage1,
        }}
      >
        <p>
          “GetPlans transformed our outdated house into a beautiful, modern home. Their attention to detail and expert guidance made the entire process stress-free.”
        </p>
      </Testimonial>
      <Screencasts />
      <Testimonial
        id="testimonial-from-emily"
        author={{
          name: 'Emily',
          role: 'Business Owner',
          image: avatarImage2,
        }}
      >
        <p>
          “We had a vision for our new office space, and GetPlans brought it to life. Their design team is top-notch, and they handled all the planning and construction details flawlessly.”
        </p>
      </Testimonial>
      <Resources />
      <FreeChapters />
      <Pricing />
      <Testimonials />
      <Author />
      <Footer />
    </>
  )
}
