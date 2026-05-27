import { version } from "../../package.json";
import { ExperienceSection } from "./components/ExperienceSection";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
	return (
		<div
			className="min-h-screen bg-[#E8E6E3] flex flex-col items-center justify-start py-10 print:py-0 print:bg-white print:min-h-0 print:block"
			style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
		>
			<p className="mb-2 text-[11px] text-slate-400 print:hidden select-none">
				v{version}
			</p>
			<div className="w-full max-w-[880px] bg-white shadow-2xl overflow-hidden print:shadow-none print:max-w-full print:w-full print:overflow-visible">
				<Header />

				<div className="flex flex-col md:flex-row print:flex-row">
					<ExperienceSection />

					{/* Divider */}
					<div className="hidden md:block print:block w-px bg-slate-100 my-8 shrink-0" />

					<Sidebar />
				</div>
			</div>

			<p className="mt-4 text-[11px] text-slate-400 text-center print:hidden select-none">
				Exporter en PDF via{" "}
				<kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[10px]">
					Ctrl+P
				</kbd>{" "}
				· Format A4, marges minimales, fond activé
			</p>
		</div>
	);
}
