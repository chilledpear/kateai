// components/cta.tsx

export default function Cta() {
  return (
    <section className="relative">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-800 -z-10" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos="fade-up">
        <div className="py-12 md:py-20">
          <div className="sm:flex sm:flex-col lg:flex-row justify-between items-center text-center lg:text-left">
            <div className="mb-6 lg:mr-16 lg:mb-0">
              <p className="text-xl text-blue-400 font-medium mb-3">Ready for a fresh crypto experience?</p>
              <h2 className="h2 text-slate-100">Add Kate AI to your Telegram group today</h2>
            </div>
            <div className="shrink-0">
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div>
                  <a className="btn-sm w-full inline-flex items-center text-slate-100 bg-slate-800 hover:bg-slate-900 group shadow-xs" href="/apply">
                    Add Kate Bot
                    <span className="tracking-normal text-sky-400 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                      <svg className="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                      </svg>
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    className="btn-sm w-full inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 shadow-xs"
                    href="#features"
                  >
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
