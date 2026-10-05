'use client'

import { useRef } from 'react'
import { Button } from '#/components/ui/button.tsx'

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef}>
      <div className="bg-[url(../../public/images/fresh-produce-no-sign.png)]  bg-center bg-no-repeat overflow-hidden relative flex flex-col xl:h-screen justify-center z-10 xl:gap-0 gap-12">
        <div className="max-w-7xl mx-auto sm:px-16 px-4 w-full xl:pt-0 pt-32">
          <div className="relative text-white text-start z-30">
            <h1 className="text-inherit text-5xl! md:text-6xl! lg:text-7xl! font-normal! max-w-160 mt-2 mb-6 bg-black/30 px-4 py-2 rounded-lg">
              Our Grocery Store
            </h1>
            <div>
              <Button className="px-6 py-3.5 bg-white border-0 text-black duration-300 hover:bg-white/80 font-medium rounded-full hover:cursor-pointer h-auto">
                <a href="#">Download our Catalog!</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="xl:absolute bottom-0 right-0 z-30 xl:w-auto lg:w-4/5 w-full lg:ms-auto"></div>
      </div>
    </section>
  )
}

export default HeroSection
