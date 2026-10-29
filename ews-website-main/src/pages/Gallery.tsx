import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import appContent from "../assets/data/appContent.json";
import PageHeader from "../components/PageHeader";
import Modal from "../components/Modal";
import { resolvePublicUrl } from "../routes";

const photos = appContent.events.map((e) => ({ ...e, src: resolvePublicUrl(e.imageUrl) }));

// Group photos by event title, keeping the order events first appear in appContent.json
const groups = photos.reduce<{ title: string; indexes: number[] }[]>((acc, photo, i) => {
  const group = acc.find((g) => g.title === photo.title);
  if (group) group.indexes.push(i);
  else acc.push({ title: photo.title, indexes: [i] });
  return acc;
}, []);

const Gallery = () => {
  const [open, setOpen] = useState<number | null>(null);

  const step = useCallback(
    (dir: number) => setOpen((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    []
  );
  const onKey = useCallback(
    (key: string) => {
      if (key === "ArrowRight") step(1);
      if (key === "ArrowLeft") step(-1);
    },
    [step]
  );
  const close = useCallback(() => setOpen(null), []);

  return (
    <>
      <PageHeader title="Gallery" subtitle="Moments from festivals, celebrations and events in the Bhawan." />

      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto space-y-12">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">{g.title}</h2>
              <div className="w-12 h-1 bg-saffron-500 mt-3 mb-6" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {g.indexes.map((i) => (
                  <button
                    key={i}
                    onClick={() => setOpen(i)}
                    className="group block rounded-2xl overflow-hidden aspect-[4/3] shadow-md"
                    aria-label={`Open photo: ${photos[i].title}`}
                  >
                    <img
                      src={photos[i].src}
                      alt={photos[i].title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {open !== null && (
        <Modal onClose={close} onKey={onKey} dark>
          <figure className="flex flex-col items-center">
            <img src={photos[open].src} alt={photos[open].title} className="max-h-[80vh] max-w-[92vw] rounded-xl object-contain" />
            <figcaption className="mt-3 text-white text-center">
              {photos[open].title} <span className="text-slate-400">· {open + 1} / {photos.length}</span>
            </figcaption>
          </figure>
          {photos.length > 1 && (
            <>
              <button
                onClick={() => step(-1)}
                className="fixed left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
              <button
                onClick={() => step(1)}
                className="fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </>
          )}
        </Modal>
      )}
    </>
  );
};

export default Gallery;
