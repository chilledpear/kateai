// components/section-07.tsx

import Image from 'next/image'

export default function Section07() {
  return (
    <section>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="relative max-w-3xl mx-auto text-center">
              <div className="mb-12" data-aos="fade-up">
                <h2 className="h2 mb-4 text-center">Kate AI Roadmap</h2>
                <p className="text-lg text-slate-500 mb-8">
                  Explore my evolution – from delivering instant Twitter downloads to a full suite of advanced crypto insights.
                </p>
              </div>
              <div
                className="mx-auto grid gap-8 md:grid-cols-3 xl:gap-6 items-start"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {/* Block 1: Now – Instant Downloads */}
                <div className="relative flex flex-col h-full rounded-br-[100px] py-5 px-6">
                  <div className="mb-4">
                    <div className="text-lg font-bold text-center mb-3">Now – Instant Downloads</div>
                    <Image
                      src="/images/pricing-01.png"
                      alt="Instant Downloads"
                      width={640}
                      height={432}
                      className="mx-auto rounded-lg shadow-xl"
                    />
                  </div>
                  <div className="text-slate-800 font-medium mb-4 text-center">
                    Seamless Twitter Downloads
                  </div>
                  <p className="text-slate-500 text-center text-sm">
                    I transform every Twitter link into a high–quality video download in seconds. Your community gets the content they need—fast and flawlessly.
                  </p>
                </div>
                {/* Block 2: Next – Analytics & Interactive Insights */}
                <div className="relative flex flex-col h-full bg-gradient-to-b from-blue-100 to-blue-50 rounded-br-[100px] py-5 px-6">
                  <div className="absolute top-0 right-0 -translate-y-1/2 mr-6 inline-flex text-sm text-white bg-teal-500 font-medium rounded-full px-3 py-px">
                    Coming Soon
                  </div>
                  <div className="mb-4">
                    <div className="text-lg font-bold text-center mb-3">Next – Analytics & Interactive Insights</div>
                    <Image
                      src="/images/pricing-02.png"
                      alt="Analytics & Interactive Insights"
                      width={640}
                      height={432}
                      className="mx-auto rounded-lg shadow-xl"
                    />
                  </div>
                  <div className="text-slate-800 font-medium mb-4 text-center">
                    Real–Time Analytics & Engaging Chat
                  </div>
                  <p className="text-slate-500 text-center text-sm">
                    In my next phase, I’ll deliver dynamic analytics that capture market trends and social signals. Expect interactive chat features that empower you with real–time insights.
                  </p>
                </div>
                {/* Block 3: Future – Intelligent Alerts & Enhanced Analytics */}
                <div className="relative flex flex-col h-full rounded-br-[100px] py-5 px-6">
                  <div className="mb-4">
                    <div className="text-lg font-bold text-center mb-3">Future – Intelligent Alerts & Enhanced Analytics</div>
                    <Image
                      src="/images/pricing-03.png"
                      alt="Intelligent Alerts & Enhanced Analytics"
                      width={640}
                      height={432}
                      className="mx-auto rounded-lg shadow-xl"
                    />
                  </div>
                  <div className="text-slate-800 font-medium mb-4 text-center">
                    Automated Alerts & Deep Insights
                  </div>
                  <p className="text-slate-500 text-center text-sm">
                    Eventually, I’ll offer intelligent, automated alerts for critical market events and influential tweets. My enhanced analytics engine will curate the most relevant insights—empowering you to make informed decisions.
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