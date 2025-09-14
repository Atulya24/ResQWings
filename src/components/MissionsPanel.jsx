import React from 'react'

function StatusBadge({ label, color = 'bg-slate-200 text-slate-800' }) {
  return (
    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${color}`}>{label}</span>
  )
}

function MissionRow({ code, title, subtitle, meta, leftDot = 'bg-yellow-500', badges = [] }) {
  return (
    <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <div className="flex items-start gap-3 min-w-0">
        <span className={`mt-1 w-2 h-2 rounded-full ${leftDot}`} />
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-slate-100 shrink-0">{code}</span>
            <span className="text-blue-300 break-words">{title}</span>
            <span className="text-slate-400 shrink-0">→</span>
            <span className="text-slate-300 break-words">{subtitle}</span>
          </div>
          <div className="text-xs text-slate-400 mt-1 break-words">{meta}</div>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-wrap sm:justify-end">
        {badges.map((b, i) => (
          <StatusBadge key={i} {...b} />
        ))}
      </div>
    </div>
  )
}

export default function MissionsPanel() {
  return (
    <div className="bg-slate-900/70 backdrop-blur-sm text-slate-100 rounded-lg border border-slate-700/60 shadow-inner">
      <div className="px-5 py-4 border-b border-slate-700/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-blue-300" aria-hidden>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M4.5 6.75a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm1.5 4.5a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15z"/></svg>
          </span>
          <span className="font-semibold">Active Missions</span>
        </div>
        <div className="text-slate-400 text-sm">3 total missions</div>
      </div>
      <div className="divide-y divide-slate-700/40">
        <MissionRow
          code="M001"
          title="Medical Supply"
          subtitle="Flood Zone A"
          meta="Payload: 4.2kg | ETA: 12 min"
          leftDot="bg-yellow-500"
          badges={[{ label: 'In Progress', color: 'bg-yellow-200 text-yellow-900' }]}
        />
        <MissionRow
          code="M002"
          title="Communication Device"
          subtitle="Earthquake Zone B"
          meta="Payload: 2.0kg | ETA: Complete"
          leftDot="bg-emerald-500"
          badges={[{ label: 'Completed', color: 'bg-emerald-200 text-emerald-900' }]}
        />
        <MissionRow
          code="M003"
          title="Search & Rescue"
          subtitle="Landslide Area C"
          meta="Payload: 5.0kg | ETA: 8 min"
          leftDot="bg-rose-500"
          badges={[{ label: 'Critical', color: 'bg-rose-200 text-rose-900' }]}
        />
      </div>
    </div>
  )
}
