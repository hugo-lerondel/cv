import { experiences } from "../../data/cv-data";
import { BulletList, Period, StackRow } from "./ui/misc";
import { SectionTitle } from "./ui/SectionTitle";

export function ExperienceSection() {
	const takima = experiences[0];
	const capgemini = experiences[1];

	return (
		<div className="flex-1 px-9 py-8 min-w-0">
			<SectionTitle>Expériences</SectionTitle>

			{/* Takima */}
			<div className="mb-7">
				<div className="flex items-start justify-between gap-2 mb-1">
					<div className="flex items-center gap-2">
						<span
							className="text-[14px] font-semibold text-slate-900"
							style={{ fontFamily: "'Fraunces', serif" }}
						>
							{takima.company}
						</span>
						<span className="text-[10px] font-semibold text-white bg-slate-700 px-1.5 py-0.5 rounded-sm uppercase tracking-wide">
							{takima.contractType}
						</span>
					</div>
					<Period>{takima.period}</Period>
				</div>
				<p className="text-[11px] text-slate-400 mb-3">{takima.companyType}</p>

				{/* Missions multiples */}
				<div className="space-y-4">
					{takima.missions?.map((mission) => (
						<div
							key={mission.client}
							className="border-l-2 border-blue-500 pl-4 bg-blue-50/40 rounded-r-md py-3 pr-3"
						>
							<div className="flex items-start justify-between gap-2 mb-1">
								<div>
									<p className="text-[12.5px] font-semibold text-slate-800">
										Mission :{" "}
										<span className="text-blue-700">{mission.client}</span>
									</p>
									<p className="text-[11px] text-slate-500">{mission.role}</p>
								</div>
								<Period>{mission.period}</Period>
							</div>
							<StackRow tags={mission.stack} />
							<BulletList items={mission.bullets} />
						</div>
					))}
				</div>
			</div>

			{/* Capgemini */}
			<div>
				<div className="flex items-start justify-between gap-2 mb-1">
					<div className="flex items-center gap-2">
						<span
							className="text-[14px] font-semibold text-slate-900"
							style={{ fontFamily: "'Fraunces', serif" }}
						>
							{capgemini.company}
						</span>
						<span className="text-[10px] font-semibold text-white bg-slate-500 px-1.5 py-0.5 rounded-sm uppercase tracking-wide">
							Stage
						</span>
					</div>
					<Period>{capgemini.period}</Period>
				</div>
				<p className="text-[11px] text-slate-500 mb-2">{capgemini.role}</p>
				<StackRow tags={capgemini.stack!} />
				<BulletList items={capgemini.bullets!} />
			</div>
		</div>
	);
}
