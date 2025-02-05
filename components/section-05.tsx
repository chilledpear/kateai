// components/section-05.tsx

import Image from 'next/image'
import LogosIllustration from '@/public/images/logos-illustration.svg'
import Logos from '@/public/images/logos.png'

export default function Section05() {
  return (
    <section>
      <div className="relative max-w-7xl mx-auto">
        {/* Background */}
        <div
          className="absolute inset-0 rounded-tr-[100px] bg-linear-to-tr from-blue-600 to-blue-500 pointer-events-none -z-10"
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Vertical padding reduced by about 30% */}
          <div className="py-8 md:py-14">
            <div className="relative max-w-3xl mx-auto text-center">
              <div className="mb-8" data-aos="fade-up">
                <h2 className="h2 text-white mb-4">Embrace the Future with Kate AI</h2>
                <p className="text-lg text-blue-200 mb-6">
                  Bring everything into one platform—strengthen your community, discover trending alpha, and help shape the future of digital finance by submitting your suggestions.
                </p>
              </div>
              {/* Layered logos: illustration as background, partner logos on top */}
              <div className="relative mb-6" data-aos="fade-up" data-aos-delay="100">
                <Image
                  src={LogosIllustration}
                  alt="Logos Illustration"
                  width={720}
                  height={283}
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="relative">
                  <Image src={Logos} width={720} height={283} alt="Partner Logos" className="mx-auto" />
                </div>
              </div>
              {/* Lower three blocks */}
              <div
                className="mx-auto grid gap-8 md:grid-cols-3 xl:gap-6 items-center text-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="relative px-4">
                  <div className="mb-3 flex justify-center">
                    {/* Checkmark icon remains as is */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-white text-xl font-bold mb-1">All-in-One Platform</h4>
                  <p className="text-blue-200 text-sm">
                    Experience seamless integration of Twitter downloads, crypto insights, and community features—all in one place.
                  </p>
                </div>
                <div className="relative px-4">
                  <div className="mb-3 flex justify-center">
                    {/* Chart Bar icon for trending alpha */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h4v11H3zM10 3h4v18h-4zM17 14h4v7h-4z" />
                    </svg>
                  </div>
                  <h4 className="text-white text-xl font-bold mb-1">Discover Trending Alpha</h4>
                  <p className="text-blue-200 text-sm">
                    Stay updated with the latest market trends and crypto signals—curated just for you.
                  </p>
                </div>
                <div className="relative px-4">
                  <div className="mb-3 flex justify-center">
                    {/* Lightbulb icon for shaping the future */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a7 7 0 00-7 7c0 2.761 1.343 5.228 3.5 6.5v3.5a1 1 0 001 1h4a1 1 0 001-1v-3.5c2.157-1.272 3.5-3.739 3.5-6.5a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="text-white text-xl font-bold mb-1">Shape the Future</h4>
                  <p className="text-blue-200 text-sm">
                    Submit your suggestions and help evolve Kate AI into the ultimate crypto assistant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
