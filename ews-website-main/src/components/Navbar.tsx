import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { routes, routeHref, type Route } from "../routes";

interface NavbarProps {
  active: Route;
}

const Navbar = ({ active }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the page changes
  useEffect(() => setOpen(false), [active]);

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
        <a href={routeHref("home")} className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt="Vivekananda Bhawan emblem"
            className="w-11 h-11 rounded-full ring-1 ring-brand-100"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg sm:text-xl font-bold text-brand-800">Vivekananda Bhawan</span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-saffron-600 font-semibold">IIT Roorkee</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {routes.map((r) => (
            <li key={r.id}>
              <a
                href={routeHref(r.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === r.id
                    ? "bg-brand-700 text-white"
                    : "text-slate-700 hover:bg-slate-100 hover:text-brand-700"
                }`}
              >
                {r.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-slate-900 hover:bg-slate-100"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile links */}
      {open && (
        <ul className="md:hidden border-t border-slate-200 bg-white px-4 py-2">
          {routes.map((r) => (
            <li key={r.id}>
              <a
                href={routeHref(r.id)}
                className={`block px-3 py-3 rounded-lg text-base font-medium ${
                  active === r.id ? "bg-brand-700 text-white" : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {r.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
