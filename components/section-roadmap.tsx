// components/section-roadmap.tsx

import React from 'react'

export default function SectionRoadmap() {
  return (
    <section className="bg-slate-100 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="h2 font-bold text-slate-800">Kate AI Roadmap</h2>
          <p className="text-lg text-slate-500">
            We’re just getting started! Explore our current release and our exciting upcoming features.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Version 1 */}
          <div className="bg-white p-6 rounded-lg shadow" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-bold mb-3 text-slate-800">Version 1</h3>
            <p className="text-slate-600 mb-4">
              <strong>Twitter Downloader:</strong> Download any Twitter video by simply posting the link.
            </p>
            <p className="text-sm text-slate-500">
              Released now – enjoy seamless video downloads via our Telegram bot.
            </p>
          </div>
          {/* Version 2 */}
          <div className="bg-white p-6 rounded-lg shadow" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-bold mb-3 text-slate-800">Version 2</h3>
            <p className="text-slate-600 mb-4">
              <strong>Twitter Analytics Dashboard:</strong> Monitor total mentions, engagement metrics, and view trend graphs for keywords, handles, or contract addresses.
            </p>
            <p className="text-slate-600 mb-4">
              <strong>User-Driven Queries:</strong> Ask Kate live: “How many times has [contract address] been mentioned today?”
            </p>
            <p className="text-sm text-slate-500">
              Coming soon – advanced analytics to keep you ahead in the crypto game.
            </p>
          </div>
          {/* Version 3 */}
          <div className="bg-white p-6 rounded-lg shadow" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-2xl font-bold mb-3 text-slate-800">Version 3</h3>
            <p className="text-slate-600 mb-4">
              <strong>Automated Alerts:</strong> Get notified when tweets from key influencers or with specific keywords hit your defined thresholds.
            </p>
            <p className="text-slate-600 mb-4">
              <strong>Content Aggregation:</strong> Enjoy mini-news digests on trending topics and hashtags powered by AI summarization.
            </p>
            <p className="text-sm text-slate-500">
              On the horizon – stay tuned for a more connected Twitter experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
