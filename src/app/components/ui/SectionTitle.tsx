export function SectionTitle({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex items-center gap-2.5 mb-4">
			<span className="w-3 h-[2px] bg-blue-600 rounded-full shrink-0" />
			<h2
				className="text-[13px] font-semibold text-slate-900 uppercase tracking-[0.1em]"
				style={{ fontFamily: "'Fraunces', serif" }}
			>
				{children}
			</h2>
			<div className="flex-1 h-px bg-slate-200" />
		</div>
	);
}
