'use client'

import { useRef } from 'react'
import { Badge } from '#/components/ui/badge.tsx'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '#/components/ui/carousel.tsx'
import { motion, useInView } from 'motion/react'

export interface Testimonial {
  quote: string
  author: string
  role: string
  image: string
}

export interface Testimonial01Props {
  badge?: string
  title?: string
  testimonials?: Testimonial[]
}

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      'I love finding fresh fruits and vegetables here. The staff is always friendly, and I can count on the quality every time I shop.',
    author: 'María González',
    role: 'Loyal customer',
    image:
      'https://images.pexels.com/photos/8422701/pexels-photo-8422701.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    quote:
      'The meat and poultry selection is excellent, and the prices are fair. This has become my go-to grocery store for the whole family.',
    author: 'Carlos Rodríguez',
    role: 'Local customer',
    image:
      'https://images.pexels.com/photos/14349176/pexels-photo-14349176.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    quote:
      'I can find everything I need in one place, from fresh produce to baked goods. Shopping here is convenient and welcoming.',
    author: 'Ana Martínez',
    role: 'Regular customer',
    image:
      'https://images.pexels.com/photos/4177735/pexels-photo-4177735.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    quote:
      'The store is clean, well stocked, and has a great selection of dairy and frozen foods. I always enjoy stopping by.',
    author: 'José Hernández',
    role: 'Local customer',
    image:
      'https://images.pexels.com/photos/8422670/pexels-photo-8422670.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    quote:
      'The fresh bread and helpful service make this grocery store special. It is a pleasure to shop here each week.',
    author: 'Lucía Fernández',
    role: 'Regular customer',
    image:
      'https://images.unsplash.com/photo-1770739318724-f7b285d8620b?auto=format&fit=crop&w=1000&q=80',
  },
]

export default function Testimonial01({
  testimonials = defaultTestimonials,
}: Testimonial01Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section ref={sectionRef}>
      <div className="max-w-7xl mx-auto sm:px-16 px-4 pt-12">
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
            className="flex flex-col gap-3"
          >
            <Badge className="text-sm h-auto py-1 px-3 border-0 w-fit">
              Testimonials
            </Badge>
            <h2 className="sm:text-5xl text-xl leading-none font-medium tracking">
              What our customers are saying
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
            className="pt-12 pb-8"
          >
            <Carousel>
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="grid grid-cols-12 gap-6 items-center">
                      <div className="lg:col-span-8 col-span-12 flex sm:flex-row flex-col sm:gap-10 gap-6 lg:pe-12">
                        <div className="shrink-0 flex items-start">
                          <img
                            src="https://images.shadcnspace.com/assets/svgs/icon-quote.svg"
                            alt="muted quote"
                            className="dark:hidden"
                          />
                          <img
                            src="https://images.shadcnspace.com/assets/svgs/icon-quote-white.svg"
                            alt="muted quote"
                            className="hidden dark:block"
                          />
                        </div>
                        <div className="flex flex-col gap-12">
                          <p className="sm:text-4xl text-xl text-muted-foreground">
                            {testimonial.quote}
                          </p>
                          <div>
                            <p className="text-base font-medium ">
                              {testimonial.author}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-4 col-span-12">
                        <div className="aspect-square overflow-hidden rounded-xl">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="block h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                className={'-top-20 left-auto right-12 size-8 cursor-pointer'}
              />
              <CarouselNext
                className={'-top-20 right-0 size-8 cursor-pointer'}
              />
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
