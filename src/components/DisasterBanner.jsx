import React from 'react'

export default function DisasterBanner() {
  return (
    <div className="bg-gray-100 text-slate-900 rounded-lg shadow-lg border border-gray-300 px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 text-rose-500" aria-hidden>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M9.401 1.996a3 3 0 0 1 5.198 0l7.36 12.892A3 3 0 0 1 19.36 19H4.64a3 3 0 0 1-2.599-4.112L9.4 1.996ZM12 7a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1Zm0 10a1.25 1.25 0 1 0 0-2.5A1.25 1.25 0  0 0 12 17Z" clipRule="evenodd" />
          </svg>
        </div>
        <div>
          <div className="font-semibold">ACTIVE DISASTER: Flood - Delhi Region</div>
          <div className="text-sm text-brand-light">AI powered drones deployed for medical supply delivery and communication restoration</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-3 py-2 rounded-md shadow">
          <span className="hidden sm:inline">Deploy Drone</span>
          <span className="sm:hidden">Deploy</span>
        </button>
      </div>
    </div>
  )
}
