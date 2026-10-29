import heroImage from "../assets/images/main.jpeg";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

// Banner at the top of every inner page, using the Bhawan photo behind an ochre overlay
const PageHeader = ({ title, subtitle }: PageHeaderProps) => (
  <section
    className="relative px-4 sm:px-6 py-14 sm:py-20 text-center"
    style={{
      backgroundImage: `linear-gradient(180deg, rgba(46, 22, 8, 0.78), rgba(46, 22, 8, 0.88)), url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <img
      src={`${import.meta.env.BASE_URL}images/logo.png`}
      alt=""
      className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full ring-4 ring-white/15 shadow-xl"
    />
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{title}</h1>
    <div className="w-14 h-1 bg-saffron-500 mx-auto mt-4" />
    {subtitle && <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">{subtitle}</p>}
  </section>
);

export default PageHeader;
