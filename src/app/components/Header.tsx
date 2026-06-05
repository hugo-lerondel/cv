import profilePic from "../../data/cv.jpeg";
import { profile } from "../../data/cv-data";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Header() {
	return (
		<header className="bg-slate-900 text-white px-10 pt-9 pb-8">
			<div className="flex items-start gap-9">
				{/* Avatar */}
				<div className="shrink-0">
					<div
						className="w-[148px] h-[148px] rounded-full bg-blue-600 ring-4 ring-blue-500/30 flex items-center justify-center text-white text-[30px] select-none overflow-hidden"
						style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
						role="img"
						aria-label={`Photo de profil — ${profile.firstName} ${profile.lastName}`}
					>
						<ImageWithFallback
							src={profilePic}
							alt={`Photo de profil — ${profile.firstName} ${profile.lastName}`}
							className="w-full h-full object-cover"
						/>
					</div>
				</div>

				{/* Identity + intro */}
				<div className="flex-1 min-w-0 pt-2">
					<div className="flex items-baseline gap-3 flex-wrap">
						<h1
							className="text-[28px] font-semibold text-white leading-tight"
							style={{ fontFamily: "'Fraunces', serif" }}
						>
							{profile.firstName} <span>{profile.lastName}</span>
						</h1>
						<span className="text-[16px] font-bold uppercase tracking-[0.16em] text-blue-400/80">
							{profile.title}
						</span>
					</div>

					<p className="text-[12.5px] text-slate-300 leading-relaxed mt-3 max-w-[600px]">
						{profile.intro}
					</p>

					<ul className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
						{profile.contacts.map(({ icon: Icon, label, href }) => (
							<li key={label} className="flex items-center gap-1.5">
								<Icon size={11} className="text-blue-400 shrink-0" />
								{href ? (
									<a
										href={href}
										className="text-[11px] text-slate-300 hover:text-blue-400 transition-colors"
									>
										{label}
									</a>
								) : (
									<span className="text-[11px] text-slate-300">{label}</span>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</header>
	);
}
