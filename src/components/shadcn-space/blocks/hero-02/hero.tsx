'use client'

import { useRef } from 'react'
import { Button } from '#/components/ui/button.tsx'

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="relative left-1/2 -ml-[50vw] w-screen overflow-hidden h-180"
    >
      <div className="absolute inset-0 z-0 bg-[url(../../public/images/fresh-produce-no-sign.png)] bg-cover bg-center bg-no-repeat" />
      <div className="relative z-10 flex flex-col justify-center gap-12 xl:gap-0 py-20 sm:py-24 xl:py-32">
        <div className="max-w-7xl mx-auto sm:px-16 px-4 w-full">
          <div className="relative text-white text-start z-30">
            <h1 className="text-inherit text-5xl! md:text-6xl! lg:text-7xl! font-normal! max-w-160 mt-2 mb-6 bg-black/30 px-4 py-2 rounded-lg">
              Our Grocery Store
            </h1>
            <div>
              <Button className="px-6 py-3.5 bg-[#FEE9E1] border-0 text-[#FEE9E1] duration-300 hover:bg-[#FEE9E1]/80 font-medium rounded-full hover:cursor-pointer h-auto">
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
