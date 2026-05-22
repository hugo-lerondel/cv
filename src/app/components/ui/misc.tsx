export function SubSectionLabel({ children }: { children: React.ReactNode }) {
	return (
		<p className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-2">
			{children}
		</p>
	);
}

export function Period({ children }: { children: React.ReactNode }) {
	return (
		<span className="text-[10px] text-slate-400 font-medium whitespace-nowrap shrink-0 mt-0.5">
			{children}
		</span>
	);
}

export function StackRow({ tags }: { tags: string[] }) {
	return (
		<div className="flex flex-wrap gap-1.5 mb-2.5">
			{tags.map((t) => (
				<span
					key={t}
					className="text-[10px] px-2 py-0.5 rounded-sm border border-slate-200 bg-slate-50 text-slate-600 font-medium leading-5"
				>
					{t}
				</span>
			))}
		</div>
	);
}

export function BulletList({ items }: { items: string[] }) {
	return (
		<ul className="space-y-1.5">
			{items.map((item) => (
				<li key={item} className="flex items-start gap-2">
					<span className="mt-[7px] w-1 h-1 rounded-full bg-blue-400 shrink-0" />
					<span className="text-[12px] text-slate-600 leading-relaxed">
						{item}
					</span>
				</li>
			))}
		</ul>
	);
}
