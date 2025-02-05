// components/hero.tsx

import Link from 'next/link'
import Image from 'next/image'
import Illustration from '@/public/images/hero-illustration.svg'
import HeroImage from '@/public/images/hero-image.png'

export default function Hero() {
  return (
    <section className="relative">
      {/* Background using original blue gradient */}
      <div
        className="absolute inset-0 rounded-bl-[100px] mb-28 md:mb-0 bg-linear-to-tr from-blue-600 to-blue-500 pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-36 md:pt-40 md:pb-20">
          <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
            <div className="md:w-[600px]">
              <h1
                className="h1 text-white mb-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Meet Kate AI – Your Crypto Twitter Assistant!
              </h1>
              <p
                className="text-lg text-blue-200 mb-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Add Kate AI to your telegram group and watch her fetch twitter alpha, trending coins, and more.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-0"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div>
                  <Link
                    className="w-full inline-flex items-center justify-center text-slate-100 bg-slate-800 hover:bg-slate-900 group shadow-xs px-8 py-4 text-lg rounded-full"
                    href="/apply"
                  >
                    Add Kate AI Bot
                    <span className="tracking-normal text-sky-400 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                      <svg
                        className="fill-current"
                        width="16"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7h11M7 1v11"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
                <div>
                  <Link
                    className="w-full inline-flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 shadow-xs relative before:absolute before:inset-0 before:bg-blue-400/60 before:-z-10 before:rounded-full px-8 py-4 text-lg rounded-full"
                    href="/features"
                  >
                    Chat with Me
                  </Link>
                </div>
              </div>
            </div>
            <div className="max-w-sm mx-auto md:absolute md:left-[600px] md:top-0 -mb-12 md:-mt-12 md:mb-0">
              <div className="relative">
                <Image
                  src={HeroImage}
                  width={548}
                  height={545}
                  alt="Kate AI mascot"
                  data-aos="fade-up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
