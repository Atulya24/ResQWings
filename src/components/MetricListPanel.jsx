import React from 'react'

export function PanelContainer({ children, className = '' }) {
  return (
    <div className={`bg-slate-900/70 backdrop-blur-sm text-slate-100 rounded-lg border border-slate-700/60 shadow-inner ${className}`}>
      {children}
    </div>
  )
}

export function PanelHeader({ title }) {
  return (
    <div className="px-5 py-4 border-b border-slate-700/50 text-slate-200 font-semibold">
      {title}
    </div>
  )
}

export function MetricRow({ label, value, valueClass = 'text-emerald-400' }) {
  return (
    <div className="px-5 py-3 flex items-center justify-between">
      <span className="text-slate-300">{label}</span>
      <span className={`font-semibold ${valueClass}`}>{value}</span>
    </div>
  )
}

export default function MetricListPanel({ title, items }) {
  return (
    <PanelContainer>
      <PanelHeader title={title} />
      <div className="divide-y divide-slate-700/40">
        {items.map((it, idx) => (
          <MetricRow key={idx} {...it} />
        ))}
      </div>
    </PanelContainer>
  )
}
