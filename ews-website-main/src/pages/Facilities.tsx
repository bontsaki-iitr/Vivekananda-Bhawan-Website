import { useState } from "react";
import { CheckCircle2, ImageOff } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Modal from "../components/Modal";
import { facilities, type Facility } from "../data/facilities";

const FacilityImage = ({ facility, className }: { facility: Facility; className: string }) =>
  facility.imageUrl ? (
    <img src={facility.imageUrl} alt={facility.title} loading="lazy" className={`object-cover ${className}`} />
  ) : (
    <div className={`flex flex-col items-center justify-center gap-2 bg-slate-100 text-slate-400 ${className}`}>
      <ImageOff className="w-8 h-8" />
      <span className="text-sm">Photo coming soon</span>
    </div>
  );

const Highlights = ({ items, className = "" }: { items: string[]; className?: string }) => (
  <ul className={`space-y-2 ${className}`}>
    {items.map((h) => (
      <li key={h} className="flex items-start gap-2 text-sm text-slate-700">
        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-brand-600" />
        <span>{h}</span>
      </li>
    ))}
  </ul>
);

const Facilities = () => {
  const [selected, setSelected] = useState<Facility | null>(null);

  return (
    <>
      <PageHeader title="Facilities" subtitle="Everything you need for day-to-day life, right inside the Bhawan." />

      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {facilities.map((f) => (
            <button
              key={f.title}
              onClick={() => setSelected(f)}
              className="group text-left bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <FacilityImage facility={f} className="w-full h-full transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-brand-900 group-hover:text-brand-700 transition-colors">{f.title}</h2>
                <div className="w-10 h-1 bg-saffron-500 mt-2 mb-3" />
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{f.description}</p>
                {f.highlights && (
                  <>
                    <Highlights items={f.highlights.slice(0, 3)} className="mt-4" />
                    {f.highlights.length > 3 && (
                      <p className="mt-2 ml-6 text-xs text-slate-500">+{f.highlights.length - 3} more</p>
                    )}
                  </>
                )}
                <span className="mt-auto pt-4 text-sm font-semibold text-brand-700">Read more →</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selected && (
        <Modal onClose={() => setSelected(null)}>
          <div className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl">
            <FacilityImage facility={selected} className="w-full aspect-[16/10]" />
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">{selected.title}</h2>
              <div className="w-12 h-1 bg-saffron-500 mt-3 mb-4" />
              <p className="text-slate-700 leading-relaxed">{selected.description}</p>
              {selected.highlights && (
                <div className="mt-6 rounded-2xl bg-brand-50/70 border border-brand-100 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-700 mb-3">Key features</p>
                  <Highlights items={selected.highlights} />
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Facilities;
