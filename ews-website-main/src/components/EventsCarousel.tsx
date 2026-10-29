import { useState, useRef } from 'react';

interface Event {
  title: string;
  description?: string;
  imageUrl: string;
}

interface EventsCarouselProps {
  events: Event[];
}

const EventsCarousel = ({ events }: EventsCarouselProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Triple events for seamless infinite scrolling
  const extendedEvents = [...events, ...events, ...events];

  const handleCardClick = (index: number) => {
    if (clickedIndex === index) {
      // Resume carousel
      setClickedIndex(null);
      setIsPaused(false);
    } else {
      // Pause carousel
      setClickedIndex(index);
      setIsPaused(true);

      cardRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  return (
    <div className="relative w-full overflow-hidden py-3 sm:py-6">
      <div className="carousel-container [--card-width:14rem] [--card-gap:0.75rem] sm:[--card-width:18rem] sm:[--card-gap:1.25rem] lg:[--card-width:20rem] lg:[--card-gap:1.5rem]">
        <div
          className="carousel-track flex gap-3 sm:gap-5 lg:gap-6 animate-scroll"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {extendedEvents.map((event, index) => (
            (() => {
              const normalizedImageUrl = event.imageUrl.startsWith('/public/')
                ? event.imageUrl.replace('/public/', '/')
                : event.imageUrl;
              const resolvedImageUrl =
                normalizedImageUrl.startsWith('/') &&
                !normalizedImageUrl.startsWith(import.meta.env.BASE_URL)
                  ? `${import.meta.env.BASE_URL}${normalizedImageUrl.slice(1)}`
                  : normalizedImageUrl;

              return (
            <div
              key={`${event.title}-${index}`}
              ref={(el) => {cardRefs.current[index] = el}}
              className="carousel-item relative flex-shrink-0 w-56 sm:w-72 lg:w-80 h-64 sm:h-[22rem] lg:h-96 rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => handleCardClick(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={resolvedImageUrl}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/50 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index || clickedIndex === index
                    ? 'opacity-100'
                    : 'opacity-0'
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                  <h3 className="text-lg sm:text-2xl font-bold mb-1.5 sm:mb-2">{event.title}</h3>
                  {event.description ? (
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {event.description}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
              );
            })()
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1 * (var(--card-width) + var(--card-gap)) * ${events.length}));
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          will-change: transform;
        }

        /* Desktop hover pause */
        @media (hover: hover) {
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
};

export default EventsCarousel;