import HeroSection from '#/components/shadcn-space/blocks/hero-02/hero.tsx'
import Navbar from '#/components/shadcn-space/blocks/hero-02/navbar.tsx'
import type { NavLinkItem } from '#/components/shadcn-space/blocks/hero-02/navbar.tsx'

const Hero02Page = () => {
  const navData: NavLinkItem[] = [
    { name: 'Contact', href: '/#contact', isActive: true },
    { name: 'Store Departments', href: '/#departments', isActive: false },
    { name: 'Testimonials', href: '/#testimonials', isActive: false },
  ]
  return (
    <>
      <Navbar navData={navData} />
      <main className="-mt-20">
        <HeroSection />
      </main>
    </>
  )
}

export default Hero02Page
