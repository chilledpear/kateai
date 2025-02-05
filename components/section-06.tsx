// components/section-06.tsx

import Image from 'next/image'

export default function Section06() {
  return (
    <section className="py-12 md:py-20 bg-slate-50" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="h2 text-slate-800">Unlock Exclusive Early Access</h2>
          <p className="text-lg text-slate-500">
            Join my beta program and get first–hand access to upcoming features like advanced analytics, real–time alerts, and smart tipping. Trust me—you don’t want to miss what’s coming next.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-up" data-aos-delay="100">
            <Image
              src="/images/beta-image.png"
              alt="Early Access"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Join the Early Access Club</h3>
            <p className="text-slate-500 mb-6">
              Be among the first to explore my full potential. Get exclusive previews of new features and help shape the future of Kate AI.
            </p>
            <a
              href="/apply"
              className="btn-sm inline-flex items-center text-slate-100 bg-slate-800 hover:bg-slate-900 group shadow-xs"
            >
              Join Now
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
      </div>
    </section>
  )
}
