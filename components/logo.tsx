export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* N letter icon */}
      <div className="relative w-8 h-8 bg-gradient-to-br from-[#5100fd] to-[#7c3aed] rounded-lg flex items-center justify-center overflow-hidden">
        <span className="text-white font-bold text-lg leading-none flex items-center justify-center w-full h-full text-center" style={{ marginTop: '-1px' }}>N</span>
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent" />
      </div>
      {/* Text */}
      <span className="font-semibold text-white text-lg tracking-tight">
        Nice<span className="text-[#5100fd]">Site</span>
      </span>
    </div>
  )
}
