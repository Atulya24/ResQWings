import React from 'react'

export default function FeatureCard({
  icon,
  title,
  status = 'ACTIVE',
  description,
  tint = 'bg-rose-50',
  border = 'border-rose-200',
  badgeColor = 'bg-emerald-100 text-emerald-700',
  metricLeft,
  metricRight,
  footerNote,
  cornerIcon,
}) {
  return (
    <div className={`${tint} border ${border} rounded-xl shadow-sm p-5 sm:p-6 relative`}>      
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="text-rose-500" aria-hidden>{icon}</div>
          <div>
            <div className="text-xs font-semibold text-rose-500/90">{title}</div>
            <div className="mt-1 text-sm text-slate-600 max-w-xl">{description}</div>
          </div>
        </div>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${badgeColor}`}>{status}</span>
      </div>

      <div className="mt-5">
        <div className="bg-white/70 rounded-lg border border-slate-200 p-4">
          <div className="grid grid-cols-2 text-center">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-blue-700">{metricLeft?.value}</div>
              <div className="text-xs text-slate-500 mt-1">{metricLeft?.label}</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-blue-700">{metricRight?.value}</div>
              <div className="text-xs text-slate-500 mt-1">{metricRight?.label}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-slate-500 font-medium">{footerNote}</span>
        <span className="text-rose-400" aria-hidden>{cornerIcon}</span>
      </div>
    </div>
  )
}
