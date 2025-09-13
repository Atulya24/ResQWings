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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center">
        <div className="flex items-center gap-3">
          <img
            src={logoSrc}
            alt="ResQWings logo"
            className="h-8 w-auto rounded-sm bg-white/0"
            onError={(e)=>{
              if (logoSrc === '/logo.png') setLogoSrc('/logo.png.jpg')
              else e.currentTarget.style.display='none'
            }}
          />
          <div className="leading-tight">
            <div className="font-bold text-lg text-white">ResQWings - DISASTER RESPONSE</div>
            <div className="text-xs text-brand">AI-Powered Medical Supply & Communication Delivery System</div>
          </div>
        </div>
        {/* Right-most controls */}
        <div className="ml-auto flex items-center gap-4 text-sm">
          <InstallPrompt />
          <span className="bg-transparent border border-white text-white px-3 py-1 rounded-full font-semibold shadow-sm">ALERT: CRITICAL</span>
          <span className="text-white hidden sm:inline">{dateStr}, {timeStr}</span>
        </div>
      </div>
    </div>
  )
}
