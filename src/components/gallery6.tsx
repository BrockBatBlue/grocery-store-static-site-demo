'use client'

import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from 'cn'

import { Button } from '#/components/ui/button.tsx'
import type { CarouselApi } from '#/components/ui/carousel.tsx'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '#/components/ui/carousel.tsx'

interface GalleryItem {
  id: string
  title: string
  summary: string
  url: string
  image: string
}

interface Gallery6Props {
  heading?: string
  demoUrl?: string
  items?: GalleryItem[]
  className?: string
}

const Gallery6 = ({
  heading = 'What you will find at our store',
  demoUrl = 'https://www.shadcnblocks.com',
  items = [
    {
      id: 'item-1',
      title: 'Fresh Produce',
      summary:
        'Fresh produce from local farmers and suppliers, including fruits, vegetables, and herbs.',
      url: '#',
      image: '../../public/images/product-section.png',
    },
    {
      id: 'item-2',
      title: 'Meat and Poultry',
      summary:
        'Meat and poultry from local farmers and suppliers, including beef, pork, chicken, and turkey.',
      url: '#',
      image: '../../public/images/meat-poultry-section.png',
    },
    {
      id: 'item-3',
      title: 'Dairy Products',
      summary:
        'Dairy products from local farmers and suppliers, including milk, cheese, and yogurt.',
      url: '#',
      image: '../../public/images/dairy-section.png',
    },
    {
      id: 'item-4',
      title: 'Baked Goods',
      summary:
        'Baked goods from local farmers and suppliers, including bread, cakes, and cookies.',
      url: '#',
      image:
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'item-5',
      title: 'Frozen Foods',
      summary:
        'Frozen foods from local farmers and suppliers, including frozen fruits, vegetables, and meats.',
      url: '#',
      image:
        'https://images.unsplash.com/photo-1601599964574-cddabfa36549?auto=format&fit=crop&w=1200&q=80',
    },
  ],
  className,
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  useEffect(() => {
    if (!carouselApi) {
      return
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev())
      setCanScrollNext(carouselApi.canScrollNext())
    }
    updateSelection()
    carouselApi.on('select', updateSelection)
    return () => {
      carouselApi.off('select', updateSelection)
    }
  }, [carouselApi])
  return (
    <section className={cn('py-32 ', className)} id="departments">
      <div className="container">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div>
            <h2 className="mb-3 px-50 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              {heading}
            </h2>
            <a
              href={demoUrl}
              className="group px-50 flex items-center gap-1 text-sm font-medium md:text-base lg:text-lg"
            >
              Get our Weekly Deals Catalog
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev()
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext()
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="px-0 w-full max-w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              '(max-width: 768px)': {
                dragFree: true,
              },
            },
          }}
          className="relative w-full max-w-full md:left-[-1rem]"
        >
          <CarouselContent className="hide-scrollbar w-full max-w-full md:-mr-4 md:ml-8 2xl:mr-[max(0rem,calc(50vw-700px-1rem))] 2xl:ml-[max(8rem,calc(50vw-700px+1rem))]">
            {items.map((item) => (
              <CarouselItem key={item.id} className="ml-8 md:max-w-120">
                <a
                  href={item.url}
                  className="group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex aspect-3/2 justify-center overflow-clip rounded-xl">
                      <div className="flex-1">
                        <div className="px-0 flex h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 line-clamp-3 pt-4 text-lg font-medium break-words md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                    {item.title}
                  </div>
                  <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
                    {item.summary}
                  </div>
                  <div className="flex items-center text-sm">
                    Read more{' '}
                    <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

export { Gallery6 }
