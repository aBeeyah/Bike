
import scooterImage from "../assets/scooter.svg";

function ProductsPage() {
  const products = [
    {
      name: "FUTURE EV-R",
      type: "Urban Electric Scooter",
      description:
        "Designed for effortless city rides with a bold, futuristic look.",
      speed: "85 km/h",
      range: "120 km",
      price: "$1,299",
      tag: "BEST SELLER",
    },
    {
      name: "FREEDOM EV-S",
      type: "Smart City Scooter",
      description:
        "A clean, modern design made for everyday urban journeys.",
      speed: "75 km/h",
      range: "100 km",
      price: "$1,099",
      tag: "CITY EDITION",
    },
    {
      name: "ENERGY EV-X",
      type: "Performance Scooter",
      description:
        "A performance-inspired ride with a confident, sporty character.",
      speed: "100 km/h",
      range: "150 km",
      price: "$1,599",
      tag: "PERFORMANCE",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f8fb]">
      {/* Page Hero */}
      <section className="relative overflow-hidden px-5 pb-16 pt-36 sm:px-8 md:pb-24 md:pt-44 lg:px-12">
        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-cyan-600 sm:text-sm">
            The EV-R Collection
          </p>

          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#29294b] sm:text-5xl lg:text-7xl">
              Find Your
              <span className="block text-cyan-500">Next Ride.</span>
            </h1>

            <p className="max-w-lg text-sm leading-7 text-slate-500 sm:text-base md:justify-self-end">
              Explore a new generation of electric scooters, where modern
              design meets everyday comfort and a forward-looking vision.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <span className="h-px w-12 bg-cyan-500" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Designed for the journey ahead
            </p>
          </div>
        </div>
      </section>

      {/* Collection Heading */}
      <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-3 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">
                Made to Move
              </p>
              <h2 className="text-2xl font-bold text-[#29294b] sm:text-3xl">
                Explore the Collection
              </h2>
            </div>

            <p className="text-sm text-slate-400">
              03 thoughtfully designed models
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <article
                key={product.name}
                className="group flex flex-col border border-slate-200/80 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-2xl hover:shadow-slate-900/10"
                style={{
                  animation: "productReveal 700ms ease-out both",
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Image */}
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-[#e7f5fa] via-[#f4fafc] to-[#eaf1f8] p-7 sm:h-72">
                  <span className="absolute left-5 top-5 z-20 border border-cyan-200 bg-white/80 px-3 py-2 text-[9px] font-bold tracking-[0.15em] text-cyan-700">
                    {product.tag}
                  </span>

                  <span className="absolute right-5 top-5 text-sm font-bold text-slate-300">
                    0{index + 1}
                  </span>

                  <div className="absolute h-40 w-40 rounded-full bg-cyan-300/30 blur-3xl transition-transform duration-700 group-hover:scale-150" />

                  <img
                    src={scooterImage}
                    alt={product.name}
                    className="relative z-10 h-full w-full object-contain drop-shadow-xl transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-2"
                  />

                  <span className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Electric Collection
                  </span>
                </div>

                {/* Information */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">
                    {product.type}
                  </p>

                  <h3 className="text-2xl font-bold text-[#29294b] transition-colors duration-300 group-hover:text-cyan-600">
                    {product.name}
                  </h3>

                  <p className="mt-3 min-h-[3.5rem] text-sm leading-6 text-slate-500">
                    {product.description}
                  </p>

                  {/* Specifications */}
                  <div className="my-6 grid grid-cols-2 gap-4 border-y border-slate-100 py-5">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400">
                        Top Speed
                      </p>
                      <p className="mt-2 text-sm font-bold text-[#29294b]">
                        {product.speed}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400">
                        Range
                      </p>
                      <p className="mt-2 text-sm font-bold text-[#29294b]">
                        {product.range}
                      </p>
                    </div>
                  </div>

                  {/* Price and visual link */}
                  <div className="mt-auto flex items-center justify-between gap-3">
                    <div>
                      <p className="mb-1 text-xs text-slate-400">
                        Starting at
                      </p>
                      <p className="text-2xl font-bold text-[#29294b]">
                        {product.price}
                      </p>
                    </div>

                    <a
                      href="#collection"
                      className="inline-flex items-center gap-2 border border-[#29294b] px-4 py-3 text-[10px] font-bold tracking-wide text-[#29294b] transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white sm:px-5"
                    >
                      VIEW MODEL
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Banner */}
          <div
            id="collection"
            className="relative mt-16 overflow-hidden bg-[#29294b] px-7 py-10 sm:px-12 sm:py-14"
          >
            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -right-2 -top-12 h-48 w-48 rounded-full border border-white/10" />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                  Your Journey Starts Here
                </p>
                <h2 className="max-w-xl text-2xl font-bold leading-snug text-white sm:text-3xl">
                  A fresh perspective on electric mobility.
                </h2>
              </div>

              <span className="inline-flex w-fit items-center gap-3 border border-white/30 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white">
                The EV-R Experience
                <span className="text-cyan-300">↗</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Entrance Animation */}
      <style>{`
        @keyframes productReveal {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          article {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}

export default ProductsPage;
