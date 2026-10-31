
import scooterMain from "../assets/scooter-main.jpg";
import scooterDetail from "../assets/scooter-detail.jpg";
import scooterCity from "../assets/scooter-city.jpg";
import scooterRear from "../assets/scooter-rear.jpg";

const galleryImages = [
  {
    image: scooterMain,
    title: "Designed to Move",
    subtitle: "A new era of electric mobility",
    className: "md:col-span-2 md:row-span-2",
    number: "01",
  },
  {
    image: scooterDetail,
    title: "Every Detail Matters",
    subtitle: "Precision in every curve",
    className: "",
    number: "02",
  },
  {
    image: scooterCity,
    title: "Made for the City",
    subtitle: "Your streets, your journey",
    className: "",
    number: "03",
  },
  {
    image: scooterRear,
    title: "Powerful by Design",
    subtitle: "Style meets innovation",
    className: "md:col-span-2",
    number: "04",
  },
];

function GalleryPage() {
  return (
    <main className="overflow-hidden bg-[#f4faff] pt-28 text-[#101c3a]">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-12 md:px-10">
        {/* Gallery Heading */}
        <div className="gallery-heading mb-12 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-600">
            The EV-R Collection
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Innovation in{" "}
            <span className="text-cyan-500">Motion.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
            Discover the details, design, and spirit behind a new generation
            of electric mobility.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid auto-rows-[250px] gap-5 sm:grid-cols-2 md:auto-rows-[280px] md:grid-cols-3">
          {galleryImages.map((item, index) => (
            <article
              key={item.number}
              className={`gallery-card group relative overflow-hidden rounded-3xl bg-[#dceefa] shadow-sm ${item.className}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152f]/90 via-[#07152f]/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Cyan Hover Glow */}
              <div className="pointer-events-none absolute inset-0 border-2 border-transparent transition-colors duration-500 group-hover:border-cyan-300/60 group-hover:bg-cyan-400/5" />

              {/* Image Text */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  {item.number} / EV-R
                </p>

                <h2 className="translate-y-2 text-xl font-bold text-white transition-transform duration-500 group-hover:translate-y-0 md:text-2xl">
                  {item.title}
                </h2>

                <p className="mt-2 translate-y-2 text-sm text-slate-200 opacity-80 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="gallery-banner relative mt-16 overflow-hidden rounded-3xl bg-[#101c3a] px-6 py-14 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative z-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              The Future Is Electric
            </p>

            <h2 className="text-3xl font-black text-white sm:text-4xl">
              More than a ride.
              <span className="mt-2 block text-cyan-400">
                A whole new feeling.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">
              Thoughtful design. Modern aesthetics. A fresh perspective on
              everyday journeys.
            </p>

            <a
              href="/products"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-3.5 font-bold text-[#101c3a] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-cyan-400/20"
            >
              Explore EV-R
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GalleryPage;
