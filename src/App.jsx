import React from 'react'
import TopBar from './components/TopBar.jsx'
import DisasterBanner from './components/DisasterBanner.jsx'
import StatCard from './components/StatCard.jsx'
import MetricListPanel from './components/MetricListPanel.jsx'
import FeatureCard from './components/FeatureCard.jsx'
import MissionsPanel from './components/MissionsPanel.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <DisasterBanner />

          {/* Top Stats */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <StatCard
              title="Active Drones"
              value={8}
              icon={(
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 6a6 6 0 100 12 6 6 0 000-12zM2 12a10 10 0 0110-10v2A8 8 0 004 12H2zm10 10A10 10 0 012 12h2a8 8 0 008 8v2zm10-10a10 10 0 01-10 10v-2a8 8 0 008-8h2zM12 2a10 10 0 0110 10h-2a8 8 0 00-8-8V2z" />
                </svg>
              )}
              iconBg="bg-emerald-100" iconColor="text-emerald-600"
            />
            <StatCard
              title="Medicine Delivered"
              value={<><span>194</span> <span className="text-base font-medium text-gray-500">supplies</span></>}
              subtitle={<span className="text-emerald-600">↑ 12% improvement</span>}
              icon={(
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M3 7a3 3 0 013-3h12a3 3 0 013 3v2H3V7zm0 4h18v6a3 3 0 01-3 3H6a3 3 0 01-3-3v-6z" />
                </svg>
              )}
              iconBg="bg-blue-100" iconColor="text-blue-600"
            />
            <StatCard
              title="Critical Rescues"
              value={23}
              icon={(
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M9.401 1.996a3 3 0 015.198 0l7.36 12.892A3 3 0 0119.36 19H4.64a3 3 0 01-2.599-4.112L9.4 1.996ZM12 7a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1Zm0 10a1.25 1.25 0 1 0 0-2.5A1.25 1.25 0 0 0 12 17Z" clipRule="evenodd" />
                </svg>
              )}
              iconBg="bg-rose-100" iconColor="text-rose-600"
            />
          </div>

          {/* Dark Panels (now in responsive columns) */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MetricListPanel
              title="AI Performance"
              items={[
                { label: 'Obstacle Avoidance', value: '97.7%', valueClass: 'text-emerald-400' },
                { label: 'Navigation Accuracy', value: '98.2%', valueClass: 'text-emerald-400' },
                { label: 'Mission Success Rate', value: '96.8%', valueClass: 'text-emerald-400' },
              ]}
            />

            <MetricListPanel
              title="Payload Status"
              items={[
                { label: 'Max Capacity', value: '5.0 kg' },
                { label: 'Current Load', value: '3.8 kg', valueClass: 'text-amber-300' },
                { label: 'Deliveries Today', value: '109', valueClass: 'text-emerald-400' },
              ]}
            />

            <MetricListPanel
              title="Impact Metrics"
              items={[
                { label: 'Lives Impacted', value: '392' },
                { label: 'Time Saved', value: '27.8%' },
                { label: 'Areas Covered', value: '20 km²' },
              ]}
            />
          </div>

          {/* Feature Cards (now in responsive columns) */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard
              icon={(
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm.75 5.5a.75.75 0 10-1.5 0v4.25H7a.75.75 0 100 1.5h4.25V17a.75.75 0 101.5 0v-3.75H17a.75.75 0 100-1.5h-4.25V7.5z"/>
                </svg>
              )}
              title="AI NAVIGATION & OBSTACLE AVOIDANCE"
              description="Real-time pathfinding with computer vision for safe delivery in disaster zones"
              status="ACTIVE"
              tint="bg-rose-50"
              border="border-rose-200"
              badgeColor="bg-emerald-100 text-emerald-700"
              metricLeft={{ value: '20', label: 'Areas Mapped' }}
              metricRight={{ value: '847', label: 'AI Decisions/min' }}
              footerNote="IMMEDIATE ACTION"
              cornerIcon={(
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M10.5 3.75a.75.75 0 011.5 0V11.25H19a.75.75 0 110 1.5h-7V20.25a.75.75 0 11-1.5 0V12.75H4a.75.75 0 110-1.5h6.5V3.75z"/>
                </svg>
              )}
            />

            <FeatureCard
              icon={(
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M3 7a3 3 0 013-3h12a3 3 0 013 3v2H3V7zm0 4h18v6a3 3 0 01-3 3H6a3 3 0 01-3-3v-6z"/>
                </svg>
              )}
              title="MEDICAL SUPPLY DEPLOYMENT"
              description="Automated delivery of medical supplies and communication devices (5kg payload capacity)"
              status="DEPLOYING"
              tint="bg-amber-50"
              border="border-amber-200"
              badgeColor="bg-amber-100 text-amber-800"
              metricLeft={{ value: '109', label: 'Supplies Dropped' }}
              metricRight={{ value: '34', label: 'Comms Devices' }}
              footerNote="HIGH PRIORITY"
              cornerIcon={(
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 110 1.5h-15A.75.75 0 013.75 12z"/>
                </svg>
              )}
            />
          </div>

          {/* Missions */}
          <div className="mt-6">
            <MissionsPanel />
          </div>
        </div>
      </main>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
        <Footer />
      </div>
    </div>
  )
}
