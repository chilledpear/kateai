// components/ui/footer.tsx

import Link from 'next/link'
import Image from 'next/image'
import Illustration from '@/public/images/footer-illustration.svg'

export default function Footer() {
  return (
    <footer className="relative">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-800 -z-10" aria-hidden="true" />
      {/* Illustration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <Image className="max-w-none" src={Illustration} alt="Footer illustration" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Footer Blocks */}
        <div className="grid sm:grid-cols-12 lg:grid-cols-10 gap-8 py-8 border-t border-slate-700">
          <div className="sm:col-span-12 lg:col-span-2 lg:max-w-xs">
            <Link className="block" href="/" aria-label="Kate AI">
              <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                <g fillRule="nonzero" fill="none">
                  <g className="fill-blue-50" transform="translate(3 3)">
                    <circle cx="5" cy="5" r="5" />
                    <circle cx="19" cy="5" r="5" />
                    <circle cx="5" cy="19" r="5" />
                    <circle cx="19" cy="19" r="5" />
                  </g>
                  <g className="fill-sky-300">
                    <circle cx="15" cy="5" r="5" />
                    <circle cx="25" cy="15" r="5" />
                    <circle cx="15" cy="25" r="5" />
                    <circle cx="5" cy="15" r="5" />
                  </g>
                </g>
              </svg>
            </Link>
          </div>
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-bold mb-3">Features</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <a className="text-slate-400 hover:text-sky-400 transition duration-150 ease-in-out" href="#download">
                  Twitter Downloader
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-sky-400 transition duration-150 ease-in-out" href="#analytics">
                  Analytics & Queries (Soon)
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-sky-400 transition duration-150 ease-in-out" href="#alerts">
                  Automated Alerts (Soon)
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-sky-400 transition duration-150 ease-in-out" href="#tipping">
                  Solana Tipping (Soon)
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-bold mb-3">Company</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <a className="text-slate-400 hover:text-sky-400 transition duration-150 ease-in-out" href="#about">
                  About Kate AI
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-sky-400 transition duration-150 ease-in-out" href="#team">
                  Our Story
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-sky-400 transition duration-150 ease-in-out" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-bold mb-3">Social</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <a className="text-slate-400 hover:text-sky-400 transition duration-150 ease-in-out" href="#twitter">
                  Twitter
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-sky-400 transition duration-150 ease-in-out" href="#telegram">
                  Telegram
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-sky-400 transition duration-150 ease-in-out" href="#discord">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Area */}
        <div className="pb-4 md:pb-8">
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Kate AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
