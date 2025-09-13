import React from 'react'

export default function Footer() {
  return (
    <div className="bg-slate-900/70 backdrop-blur-sm text-slate-300 rounded-lg border border-slate-700/60 text-xs px-4 sm:px-6 py-4 text-center">
      ResQWings AI Disaster Response System | Emergency Command: +91-1800-RESCUE |
      Last Update: {new Date().toLocaleString()} | Target: 20% Response Time Reduction Achieved: 7.8%
    </div>
  )
}
