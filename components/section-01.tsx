// components/section-01.tsx
import React from 'react'

export default function Section01() {
  return (
    <section id="features" className="py-12 md:py-28 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3 items-start">
          {/* Feature 1: Add Kate on Telegram */}
          <div className="relative md:px-9" data-aos="fade-up">
            <div className="mb-3 flex justify-center">
              {/* New Download Icon: Arrow Down on a Square */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l-3-3m3 3l3-3M4 20h16" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-1 text-slate-800 text-center">
              Add Kate on Telegram
            </h4>
            <p className="text-slate-500 text-center">
              Add Kate AI to your telegram group and let Kate fetch twitter alpha (PS She loves it).
            </p>
          </div>
          {/* Feature 2: Chat with Kate */}
          <div className="relative md:px-9" data-aos="fade-up" data-aos-delay="100">
            <div className="mb-3 flex justify-center">
              {/* Chat Icon remains unchanged */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-1 text-slate-800 text-center">
              Chat with Kate
            </h4>
            <p className="text-slate-500 text-center">
              Send Kate a DM to answer any questions as your flexible personal assistant.
            </p>
          </div>
          {/* Feature 3: Continuous Upgrades */}
          <div className="relative md:px-9" data-aos="fade-up" data-aos-delay="200">
            <div className="mb-3 flex justify-center">
              {/* New Up Arrow Icon for Continuous Upgrades */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-1 text-slate-800 text-center">
              Continuous Upgrades
            </h4>
            <p className="text-slate-500 text-center">
              Share your suggestions with Kate and have those features add to her.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
