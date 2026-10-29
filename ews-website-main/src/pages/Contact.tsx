import { Mail, Phone, MapPin } from "lucide-react";
import appContent from "../assets/data/appContent.json";
import PageHeader from "../components/PageHeader";

const Contact = () => {
  const { email, phone, address, mapsUrl } = appContent.contact;

  const items = [
    { icon: Mail, label: "Email", value: email, href: `mailto:${email}` },
    { icon: Phone, label: "Phone", value: phone, href: `tel:${phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Address", value: address },
  ];

  return (
    <>
      <PageHeader title="Contact Us" subtitle="Reach the Bhawan office for any queries." />

      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          <div className="space-y-4">
            {items.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
                <div className="p-3 rounded-xl bg-brand-50 shrink-0">
                  <Icon className="w-6 h-6 text-brand-700" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-slate-500 uppercase tracking-wide mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="text-base sm:text-lg text-slate-900 hover:text-brand-700 transition-colors break-all">
                      {value}
                    </a>
                  ) : (
                    <p className="text-base sm:text-lg text-slate-900 leading-relaxed">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96 lg:h-full lg:min-h-[24rem]">
            <iframe
              src={mapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vivekananda Bhawan Location"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
