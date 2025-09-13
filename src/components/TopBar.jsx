import React from 'react'
import InstallPrompt from './InstallPrompt.jsx'

function useClock() {
  const [now, setNow] = React.useState(new Date())
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return now
}

export default function TopBar() {
  const now = useClock()
  const dateStr = now.toLocaleDateString(undefined, {
    year: 'numeric', month: '2-digit', day: '2-digit'
  })
  const timeStr = now.toLocaleTimeString(undefined, {
    hour12: false,
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  })
  const [logoSrc, setLogoSrc] = React.useState('/logo.png')

  return (
    <div className="bg-[#0b2a4a] text-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 flex flex-col sm:flex-row sm:items-center gap-2">
        {/* Left cluster: logo + title */}
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <img
            src={logoSrc}
            alt="ResQWings logo"
            className="h-7 sm:h-8 w-auto rounded-sm bg-white/0"
            onError={(e)=>{
              if (logoSrc === '/logo.png') setLogoSrc('/logo.png.jpg')
              else e.currentTarget.style.display='none'
            }}
          />
          <div className="leading-tight min-w-0">
            <div className="font-bold text-base sm:text-lg text-white truncate">ResQWings - DISASTER RESPONSE</div>
            <div className="hidden sm:block text-xs text-brand">AI-Powered Medical Supply & Communication Delivery System</div>
          </div>
        </div>
        {/* Right-most controls (wrap below on mobile) */}
        <div className="w-full sm:w-auto sm:ml-auto flex flex-wrap items-center gap-2 sm:gap-4 gap-y-2 text-xs sm:text-sm justify-start sm:justify-end pt-1 sm:pt-0">
          <InstallPrompt />
          <span className="bg-transparent border border-white text-white px-2.5 py-1 sm:px-3 sm:py-1 rounded-full font-semibold shadow-sm">ALERT: CRITICAL</span>
          <span className="text-white hidden sm:inline">{dateStr}, {timeStr}</span>
        </div>
      </div>
    </div>
  )
}
