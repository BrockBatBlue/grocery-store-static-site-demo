import type { Testimonial } from '#/components/shadcn-space/blocks/testimonial-02/testimonial.tsx'
import Testimonial01Inner from '#/components/shadcn-space/blocks/testimonial-02/testimonial.tsx'

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      'I could not find my favorite brand of coffee anywhere else, but here I found it here, and it was on sale!',
    author: 'John Doe',
    role: 'Customer',
    image:
      'https://images.shadcnspace.com/assets/profiles/testimonial-user.png',
  },
  {
    quote:
      'I called ahead about a specific item, and they had it in stock, and set it aside for me!',
    author: 'Jane Doe',
    role: 'Customer',
    image:
      'https://images.shadcnspace.com/assets/profiles/testimonial-user.png',
  },
  {
    quote:
      'I called ahead about a specific item, and they had it in stock, and set it aside for me!',
    author: 'Jane Doe',
    role: 'Customer',
    image:
      'https://images.shadcnspace.com/assets/profiles/testimonial-user.png',
  },
  {
    quote:
      'I called ahead about a specific item, and they had it in stock, and set it aside for me!',
    author: 'Jane Doe',
    role: 'Customer',
    image:
      'https://images.shadcnspace.com/assets/profiles/testimonial-user.png',
  },
]

export default function Testimonial01() {
  return (
    <main id="testimonials">
      <Testimonial01Inner testimonials={defaultTestimonials} />
    </main>
  )
}
