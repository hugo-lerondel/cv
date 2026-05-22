import { competences, education } from "../../data/cv-data";
import { SubSectionLabel } from "./ui/misc";
import { SectionTitle } from "./ui/SectionTitle";

export function Sidebar() {
	return (
		<div className="w-full md:w-[295px] shrink-0 px-8 py-8 print:w-[295px]">
			{/* Études & Certifications */}
			<SectionTitle>Études & Certifications</SectionTitle>
			<div className="mb-8">
				{education.map(({ degree, school, field, period, note }, i) => (
					<div key={degree} className="flex gap-3">
						<div className="flex flex-col items-center">
							<div className="mt-1 w-2 h-2 rounded-full bg-blue-600 ring-2 ring-blue-100 shrink-0" />
							{i < education.length - 1 && (
								<div className="w-px flex-1 bg-slate-200 mt-1" />
							)}
						</div>
						<div
							className={`pb-5 flex-1 ${i === education.length - 1 ? "pb-0" : ""}`}
						>
							<div className="flex items-start justify-between gap-1">
								<h3
									className="text-[12px] font-semibold text-slate-900 leading-snug"
									style={{ fontFamily: "'Fraunces', serif" }}
								>
									{degree}
								</h3>
								<span className="text-[10px] text-slate-400 whitespace-nowrap mt-0.5 font-medium shrink-0">
									{period}
								</span>
							</div>
							<p className="text-[11px] font-semibold text-blue-600 mt-0.5">
								{school}
							</p>
							<p className="text-[11px] text-slate-500">{field}</p>
							{note && (
								<p className="text-[11px] text-slate-400 italic mt-0.5">
									{note}
								</p>
							)}
						</div>
					</div>
				))}
			</div>

			{/* Compétences */}
			<SectionTitle>Compétences</SectionTitle>

			{/* Techniques — Front / Back / DevOps */}
			<div className="mb-5 space-y-3.5">
				{(Object.entries(competences.techniques) as [string, string[]][]).map(
					([cat, tags]) => (
						<div key={cat}>
							<div className="flex items-center gap-2 mb-1.5">
								<span className="text-[9px] font-bold uppercase tracking-[0.18em] text-blue-600">
									{cat}
								</span>
								<div className="flex-1 h-px bg-blue-100" />
							</div>
							<div className="flex flex-wrap gap-1.5">
								{tags.map((s) => (
									<span
										key={s}
										className="text-[10px] px-2 py-0.5 rounded-sm border border-blue-200 bg-blue-50 text-blue-800 font-medium leading-5"
									>
										{s}
									</span>
								))}
							</div>
						</div>
					),
				)}
			</div>

			{/* Savoir-être */}
			<div className="mb-5">
				<SubSectionLabel>Savoir-être</SubSectionLabel>
				<ul className="space-y-1.5">
					{competences.nonTechniques.map((s) => (
						<li key={s} className="flex items-start gap-2">
							<span className="mt-[5px] w-1 h-1 rounded-full bg-slate-400 shrink-0" />
							<span className="text-[11px] text-slate-600 leading-snug">
								{s}
							</span>
						</li>
					))}
				</ul>
			</div>

			{/* Langues */}
			<div>
				<SubSectionLabel>Langues</SubSectionLabel>
				<ul className="space-y-3">
					{competences.langues.map(({ langue, niveau, pct }) => (
						<li key={langue}>
							<div className="flex justify-between items-baseline mb-1">
								<span className="text-[11px] font-semibold text-slate-800">
									{langue}
								</span>
								<span className="text-[10px] text-slate-400">{niveau}</span>
							</div>
							<div className="h-[3px] w-full bg-slate-100 rounded-full overflow-hidden">
								<div
									className="h-full bg-blue-500 rounded-full"
									style={{ width: `${pct}%` }}
								/>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
