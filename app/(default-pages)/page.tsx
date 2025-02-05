// app/(default-pages)/page.tsx

export const metadata = {
  title: 'Kate AI – Your Flirty Anime Crypto Assistant',
  description:
    'Kate AI is live with Twitter video downloading. Invite her to your Telegram group and enjoy smart, playful interactions – with more exciting features on the horizon!',
}

import Hero from '@/components/hero'
import Section01 from '@/components/section-01'
import Section02 from '@/components/section-02'
import Section03 from '@/components/section-03'
import Section04 from '@/components/section-04'
import Section05 from '@/components/section-05'
import Section07 from '@/components/section-07'
import Faqs from '@/components/faqs'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section07 />
      <Faqs />
      <Cta />
    </>
  )
}
