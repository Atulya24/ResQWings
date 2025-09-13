import React from 'react'

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = React.useState(null)
  const [canInstall, setCanInstall] = React.useState(false)
  const [installed, setInstalled] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false)

  React.useEffect(() => {
    const beforeInstallHandler = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault()
      setDeferredPrompt(e)
      setCanInstall(true)
      setShowModal(true) // auto-open popup when eligible
      // debug
      try { console.info('[PWA] beforeinstallprompt fired') } catch {}
    }

    const installedHandler = () => {
      setInstalled(true)
      setCanInstall(false)
      setDeferredPrompt(null)
      setShowModal(false)
      try { console.info('[PWA] appinstalled event fired') } catch {}
    }

    window.addEventListener('beforeinstallprompt', beforeInstallHandler)
    window.addEventListener('appinstalled', installedHandler)

    return () => {
      window.removeEventListener('beforeinstallprompt', beforeInstallHandler)
      window.removeEventListener('appinstalled', installedHandler)
    }
  }, [])

  // Log SW readiness to help debug installability
  React.useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(() => {
        try { console.info('[PWA] Service worker is ready') } catch {}
      })
    }
  }, [])

  const triggerInstall = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome !== 'accepted') {
      // user dismissed
    }
    setDeferredPrompt(null)
    setCanInstall(false)
    setShowModal(false)
  }

  if (installed) {
    return <span className="text-green-600 text-sm">Installed</span>
  }

  return (
    <>
      {/* Visible trigger button in the header (disabled until eligible) */}
      <button
        onClick={() => canInstall && setShowModal(true)}
        disabled={!canInstall}
        className={`shrink-0 inline-flex items-center gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold transition-colors border ${canInstall ? 'bg-brand text-white hover:bg-brand-dark border-brand' : 'bg-brand/60 text-white border-brand/70 cursor-not-allowed'}`}
        title={canInstall ? 'Install ResQWings' : 'Install not available yet'}
      >
        Install App
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)} />
          <div className="relative bg-white rounded-lg shadow-xl w-[90%] max-w-sm mx-auto p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded bg-brand/10 flex items-center justify-center text-brand" aria-hidden>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm.75 5.5a.75.75 0 10-1.5 0v4.25H7a.75.75 0 100 1.5h4.25V17a.75.75 0 101.5 0v-3.75H17a.75.75 0 100-1.5h-4.25V7.5z"/></svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Install ResQWings</div>
                <div className="text-sm text-gray-600 mt-1">Add this app to your device for quick access and a full-screen experience.</div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-end gap-3">
              <button onClick={() => setShowModal(false)} className="px-3 py-1.5 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">Not now</button>
              <button onClick={triggerInstall} className="px-3 py-1.5 rounded-md bg-brand text-white font-medium hover:bg-brand-dark">Install</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
