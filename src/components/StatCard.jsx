import React from 'react'

export default function StatCard({ title, value, subtitle, icon, iconBg = 'bg-green-100', iconColor = 'text-green-600' }) {
  return (
    <div className="bg-white/95 rounded-lg shadow border border-gray-200 p-5 flex items-center justify-between">
      <div>
        <div className="text-xs uppercase tracking-wider text-gray-500">{title}</div>
        <div className="mt-1 text-4xl font-bold text-gray-900">{value}</div>
        {subtitle && (
          <div className="mt-2 text-sm text-gray-500 flex items-center gap-2">
            {subtitle}
          </div>
        )}
      </div>
      <div className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center ${iconColor}`}>
        {icon}
      </div>
    </div>
  )
}
