
import scooterImage from "../assets/scooter.svg";

function Gallery() {
  const galleryItems = [
    {
      number: "01",
      title: "Designed for the Future",
      subtitle: "Modern design. Smarter mobility.",
      layout: "large",
    },
    {
      number: "02",
      title: "Everyday Freedom",
      subtitle: "Make every journey count.",
      layout: "small",
    },
    {
      number: "03",
      title: "Power Meets Elegance",
      subtitle: "Electric performance, reimagined.",
      layout: "small",
    },
  ];

  return (
    <section
      id="gallery"
      className="overflow-hidden bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-600">
            The EV-R Experience
          </p>

          <h2 className="text-3xl font-bold text-[#29294b] sm:text-4xl lg:text-5xl">
            A Closer Look at
            <span className="block text-cyan-500">Electric Freedom.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Explore a new way to move through life with modern design,
            thoughtful details and everyday electric mobility.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {galleryItems.map((item, index) => (
            <article
              key={item.number}
              className={`group relative overflow-hidden border border-slate-200 bg-[#eef8fb] ${
                item.layout === "large"
                  ? "md:row-span-2 md:min-h-[580px]"
                  : "min-h-[280px] sm:min-h-[320px]"
              }`}
            >
              {/* Background Decoration */}
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-cyan-200/40 blur-3xl transition-transform duration-700 group-hover:scale-150" />

              {/* Image */}
              <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-10">
                <img
                  src={scooterImage}
                  alt={item.title}
                  className={`relative z-10 w-full object-contain drop-shadow-xl transition-transform duration-700 ease-out group-hover:scale-110 ${
                    item.layout === "large"
                      ? "max-h-[380px]"
                      : "max-h-[200px]"
                  }`}
                />
              </div>

              {/* Image Number */}
              <span className="absolute right-5 top-5 z-20 text-sm font-semibold tracking-widest text-slate-400">
                {item.number}
              </span>

              {/* Text */}
              <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#eaf7fb] via-[#eaf7fb]/95 to-transparent px-6 pb-6 pt-16 sm:px-8 sm:pb-8">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
                  {index === 0
                    ? "Innovation"
                    : index === 1
                      ? "Lifestyle"
                      : "Performance"}
                </p>

                <h3 className="text-xl font-bold text-[#29294b] sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {item.subtitle}
                </p>

                <span className="mt-4 inline-block h-0.5 w-10 bg-cyan-500 transition-all duration-300 group-hover:w-20" />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-slate-500">
            A smarter journey starts with one ride.
          </p>

          <a
            href="#products"
            className="group relative mt-2 pb-2 text-sm font-bold tracking-wider text-[#29294b] transition-colors duration-300 hover:text-cyan-600"
          >
            EXPLORE OUR SCOOTERS
            <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-cyan-500 transition-transform duration-300 group-hover:scale-x-50" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
