type MetricCardProps = {
  label: string
  value: string
  sublabel?: string
}

export function MetricCard({ label, value, sublabel }: MetricCardProps) {
  return (
    <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-5">
      <p className="text-sm text-gray-600 font-medium">{label}</p>
      <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
      {sublabel && <p className="text-xs text-gray-500 mt-1">{sublabel}</p>}
    </div>
  )
}
