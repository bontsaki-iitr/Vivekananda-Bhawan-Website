import { Mail, Phone } from "lucide-react";
import { resolvePublicUrl } from "../routes";

interface TeamCardProps {
  name: string;
  post: string;
  imageUrl: string;
  email: string;
  number: string;
}

const TeamCard = ({ name, post, imageUrl, email, number }: TeamCardProps) => {
  return (
    <div className="team-card w-full max-w-xs mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="aspect-[4/5] bg-slate-100 overflow-hidden">
        <img
          src={resolvePublicUrl(imageUrl)}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Details, always visible below the photo */}
      <div className="p-4 sm:p-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">{post}</p>
        <h3 className="mt-1 font-display text-xl font-bold text-brand-900 leading-tight">{name}</h3>

        <div className="mt-3 space-y-1.5 text-sm text-slate-600">
          <a
            href={`mailto:${email}`}
            className="flex items-center justify-center gap-2 hover:text-brand-700 transition-colors break-all"
          >
            <Mail className="w-4 h-4 shrink-0 text-brand-600" />
            {email}
          </a>
          <a
            href={`tel:${number.replace(/\s/g, "")}`}
            className="flex items-center justify-center gap-2 hover:text-brand-700 transition-colors"
          >
            <Phone className="w-4 h-4 shrink-0 text-brand-600" />
            {number}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
