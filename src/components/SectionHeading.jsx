
function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="relative mb-12 max-w-3xl">
      {/* Eyebrow */}
      <div className="mb-5 flex items-center gap-3">
        <span
          className={`h-[3px] w-10 rounded-full ${
            light ? "bg-[#c7f36b]" : "bg-green-700"
          }`}
        />

        <p
          className={`text-[10px] font-black uppercase tracking-[0.25em] ${
            light ? "text-[#c7f36b]" : "text-green-700"
          }`}
        >
          {eyebrow}
        </p>

        <span
          className={`rounded-full px-2.5 py-1 text-[9px] font-bold tracking-wider ${
            light
              ? "bg-white/10 text-white/60"
              : "bg-green-100 text-green-800"
          }`}
        >
          STRIDE CLUB
        </span>
      </div>

      {/* Main heading */}
      <h2
        className={`text-4xl font-black uppercase leading-[0.98] tracking-[-0.065em] sm:text-5xl md:text-6xl ${
          light ? "text-white" : "text-[#17251f]"
        }`}
      >
        {title}
        <span
          className={`ml-2 inline-block ${
            light ? "text-[#c7f36b]" : "text-green-700"
          }`}
        >
          .
        </span>
      </h2>

      {/* Decorative divider */}
      <div className="mt-6 flex items-center gap-2">
        <span
          className={`h-1.5 w-12 rounded-full ${
            light ? "bg-[#c7f36b]" : "bg-green-700"
          }`}
        />
        <span
          className={`h-1.5 w-3 rounded-full ${
            light ? "bg-[#c7f36b]/50" : "bg-green-700/40"
          }`}
        />
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            light ? "bg-[#c7f36b]/30" : "bg-green-700/25"
          }`}
        />
      </div>

      {/* Description */}
      {description && (
        <p
          className={`mt-6 max-w-xl text-sm leading-8 sm:text-base ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}

      {/* Background decoration */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -right-2 -top-8 select-none text-8xl font-black opacity-[0.035] sm:text-9xl ${
          light ? "text-white" : "text-[#17251f]"
        }`}
      >
        ✳
      </span>
    </div>
  );
}

export default SectionHeading;
