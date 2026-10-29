import { Mail, Phone, MapPin } from "lucide-react";
import { routes, routeHref } from "../routes";

interface FooterProps {
  email: string;
  phone: string;
  address: string;
}

const Footer = ({ email, phone, address }: FooterProps) => {
  return (
    <footer className="bg-brand-950 text-brand-100/80 px-4 sm:px-6 pt-12 pb-8">
      <div className="h-1 -mt-12 mb-12 -mx-4 sm:-mx-6 bg-gradient-to-r from-saffron-500 via-gold-400 to-saffron-500" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="Vivekananda Bhawan emblem"
              className="w-14 h-14 rounded-full ring-2 ring-gold-400/40"
            />
            <div>
              <p className="font-display text-xl font-bold text-white">Vivekananda Bhawan</p>
              <p className="text-xs uppercase tracking-[0.18em] text-saffron-400 font-semibold mt-0.5">IIT Roorkee</p>
            </div>
          </div>
          <p className="text-sm text-brand-100/70 mt-5 leading-relaxed">
            Building character, friendships and memories at IIT Roorkee.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white mb-4">Pages</p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {routes.map((r) => (
              <li key={r.id}>
                <a href={routeHref(r.id)} className="hover:text-white transition-colors">
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-white mb-4">Contact</p>
          <a href={`mailto:${email}`} className="flex items-start gap-3 hover:text-white transition-colors break-all">
            <Mail className="w-4 h-4 mt-0.5 shrink-0 text-saffron-400" />
            {email}
          </a>
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-start gap-3 hover:text-white transition-colors">
            <Phone className="w-4 h-4 mt-0.5 shrink-0 text-saffron-400" />
            {phone}
          </a>
          <p className="flex items-start gap-3">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-saffron-400" />
            {address}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-10 pt-6 text-center text-sm text-brand-100/60">
        <p>&copy; 2026 Vivekananda Bhawan, IIT Roorkee. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
