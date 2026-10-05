import Hero02Page from '#/components/shadcn-space/blocks/hero-02'
import { createFileRoute } from '@tanstack/react-router'
import { Gallery6 } from '#/components/gallery6'
import { Contact7 } from '#/components/contact7'
import Testimonial01 from '#/components/shadcn-space/blocks/testimonial-02'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <Hero02Page />
      <Contact7 />
      <Gallery6 />
      <Testimonial01 />
    </>
  )
}
