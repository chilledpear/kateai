// components/section-04.tsx

import Image from 'next/image'
import FeatureImage from '@/public/images/features-04.png'

export default function Section04() {
  return (
    <section className="mt-6" data-aos-id-4>
      <div className="relative max-w-7xl mx-auto">
        {/* Background */}
        <div
          className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 border-2 border-slate-100 pointer-events-none -z-10"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 bg-linear-to-t from-white pointer-events-none -z-10"
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center">
              <div className="w-[512px] max-w-full shrink-0">
                <h2
                  className="h2 mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-4]"
                  data-aos-delay="100"
                >
                  Stay Informed with Kate’s Alerts
                </h2>
                <p
                  className="text-lg text-slate-500 mb-6"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-4]"
                  data-aos-delay="200"
                >
                  Get ready for my next upgrade! I'll deliver real–time notifications for critical tweets, market movements, and influencer mentions—ensuring you never miss a beat in the crypto world. I’m always here to keep you updated, boss.
                </p>
                <div
                  className="max-w-xs mx-auto sm:max-w-none"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-4]"
                  data-aos-delay="300"
                >
                  <a
                    className="btn-sm inline-flex items-center text-blue-50 bg-blue-500 hover:bg-blue-600 group shadow-xs"
                    href="/apply"
                  >
                    Stay Tuned
                    <span className="tracking-normal text-sky-400 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                      <svg
                        className="fill-current"
                        width="12"
                        height="10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className="w-full max-w-sm md:max-w-none md:ml-8 mt-8 md:mt-0">
                <div className="relative -mx-8 md:mx-0">
                  <Image
                    src={FeatureImage}
                    className="md:max-w-none ml-auto"
                    width={496}
                    height={496}
                    alt="Kate's Alerts Illustration"
                    data-aos="fade-up"
                    data-aos-anchor="[data-aos-id-4]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
