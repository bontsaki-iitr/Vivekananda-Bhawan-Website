import { ArrowRight, Quote } from "lucide-react";
import appContent from "../assets/data/appContent.json";
import Hero from "../components/Hero";
import EventsCarousel from "../components/EventsCarousel";
import { facilities } from "../data/facilities";
import { routeHref, resolvePublicUrl } from "../routes";
import visitingImage from "../assets/images/visiting.jpg";
import bhawanImage from "../assets/images/main.jpeg";

const quickLinks = [
  {
    href: routeHref("authority"),
    title: "Bhawan Authority",
    text: "Meet the wardens, secretaries and office staff.",
    image: resolvePublicUrl("/public/images/bhawan-day-2.jpg"),
  },
  {
    href: routeHref("gallery"),
    title: "Gallery",
    text: "Photos from festivals and events in the Bhawan.",
    image: resolvePublicUrl("/public/images/garba-1.jpg"),
  },
  {
    href: routeHref("contact"),
    title: "Contact Us",
    text: "Office email, phone number and how to find us.",
    image: bhawanImage,
  },
];

const SectionTitle = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div>
    <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-saffron-600">{eyebrow}</p>
    <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-brand-900">{title}</h2>
  </div>
);

const Home = () => {
  const { hero, events, about } = appContent;
  const featured = facilities.filter((f) => f.imageUrl).slice(0, 6);
  // Only events marked "featured" slide on the home page; the Gallery shows all of them
  const featuredEvents = events.filter((e) => "featured" in e && e.featured);

  return (
    <>
      <Hero title={hero.title} subtitle={hero.subtitle} imageUrl={hero.imageUrl} />

      {/* Welcome */}
      <section className="px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionTitle eyebrow="About the Bhawan" title="Welcome to Vivekananda Bhawan" />
            <div className="w-14 h-1 bg-saffron-500 mt-5 mb-6" />
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">{about.content}</p>
            <figure className="mt-8 flex gap-4 items-start border-l-4 border-gold-400 bg-white/70 rounded-r-2xl p-5">
              <Quote className="w-6 h-6 shrink-0 text-gold-500" />
              <div>
                <blockquote className="font-display text-lg sm:text-xl text-brand-800 italic">
                  Arise, awake, and stop not till the goal is reached.
                </blockquote>
                <figcaption className="mt-1 text-sm text-slate-500">Swami Vivekananda</figcaption>
              </div>
            </figure>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 sm:-inset-4 translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5 rounded-3xl bg-saffron-300/40" />
            <img
              src={visitingImage}
              alt="Visiting area of Vivekananda Bhawan"
              className="relative w-full rounded-3xl shadow-xl object-cover aspect-[16/10]"
            />
          </div>
        </div>
      </section>

      {/* Facilities preview */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <SectionTitle eyebrow="Life in the Bhawan" title="Facilities" />
            <a href={routeHref("facilities")} className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:gap-3 transition-all">
              See all facilities <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
            {featured.map((f) => (
              <a
                key={f.title}
                href={routeHref("facilities")}
                className="group relative block rounded-2xl overflow-hidden aspect-[4/3] shadow-md"
              >
                <img
                  src={f.imageUrl}
                  alt={f.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/15 to-transparent" />
                <p className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 text-white font-display font-bold text-base sm:text-2xl">
                  {f.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Latest events */}
      <section className="px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <SectionTitle eyebrow="Moments" title="Latest Events" />
            <a href={routeHref("gallery")} className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:gap-3 transition-all">
              View photo gallery <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <EventsCarousel events={featuredEvents} />
        </div>
      </section>

      {/* Quick links */}
      <section className="px-4 sm:px-6 pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {quickLinks.map(({ href, title, text, image }) => (
            <a
              key={title}
              href={href}
              className="group relative block rounded-3xl overflow-hidden h-56 sm:h-64 shadow-lg"
            >
              <img
                src={image}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/50 to-brand-950/10" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl font-bold text-white">{title}</h3>
                <p className="mt-1 text-white/80">{text}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-saffron-300 font-semibold group-hover:gap-3 transition-all">
                  Open <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
