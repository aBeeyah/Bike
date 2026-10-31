
import scooterImage from "../assets/scooter.svg";

function ProductDetailsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f8fb]">

      {/* Hero Section */}
      <section className="px-5 pb-16 pt-32 sm:px-8 sm:pt-40 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-cyan-600">
            EV-R Collection / Product Details
          </p>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Product Image */}
            <div className="group relative flex min-h-[320px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#e2f4fa] via-[#f5fafc] to-[#e7eef7] p-8 sm:min-h-[450px] sm:p-12">
              <div className="absolute h-64 w-64 rounded-full bg-cyan-300/30 blur-3xl transition-transform duration-700 group-hover:scale-150" />

              <span className="absolute left-6 top-6 border border-cyan-200 bg-white/80 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-cyan-700">
                FUTURE SERIES
              </span>

              <span className="absolute right-6 top-6 text-sm font-bold text-slate-300">
                01 / 03
              </span>

              <img
                src={scooterImage}
                alt="EV-R electric scooter"
                className="relative z-10 max-h-[360px] w-full object-contain drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-110"
              />

              <p className="absolute bottom-6 left-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                Electric Mobility
              </p>
            </div>

            {/* Product Information */}
            <div className="py-4 lg:py-10">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
                  Urban Electric Scooter
                </p>
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#29294b] sm:text-5xl lg:text-6xl">
                FUTURE
                <span className="block text-cyan-500">EV-R.</span>
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
                A modern electric ride designed around contemporary style,
                everyday comfort and a forward-looking urban experience.
              </p>

              {/* Price */}
              <div className="mt-8 border-y border-slate-200 py-6">
                <p className="mb-2 text-xs font-medium uppercase tracking-widest text-slate-400">
                  Starting Price
                </p>

                <div className="flex flex-wrap items-end gap-3">
                  <span className="text-3xl font-bold text-[#29294b] sm:text-4xl">
                    $1,299
                  </span>
                  <span className="mb-1 text-xs text-slate-400">
                    FUTURE EV-R Edition
                  </span>
                </div>
              </div>

              {/* Specifications */}
              <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-5">
                <div className="border-l-2 border-cyan-400 pl-3 sm:pl-4">
                  <p className="text-[10px] uppercase tracking-wide text-slate-400">
                    Top Speed
                  </p>
                  <p className="mt-2 text-lg font-bold text-[#29294b] sm:text-xl">
                    85
                  </p>
                  <p className="text-xs text-slate-400">km/h</p>
                </div>

                <div className="border-l-2 border-cyan-400 pl-3 sm:pl-4">
                  <p className="text-[10px] uppercase tracking-wide text-slate-400">
                    Range
                  </p>
                  <p className="mt-2 text-lg font-bold text-[#29294b] sm:text-xl">
                    120
                  </p>
                  <p className="text-xs text-slate-400">km</p>
                </div>

                <div className="border-l-2 border-cyan-400 pl-3 sm:pl-4">
                  <p className="text-[10px] uppercase tracking-wide text-slate-400">
                    Charging
                  </p>
                  <p className="mt-2 text-lg font-bold text-[#29294b] sm:text-xl">
                    3.5
                  </p>
                  <p className="text-xs text-slate-400">hours</p>
                </div>
              </div>

              {/* Visual Buttons */}
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#features"
                  className="group inline-flex items-center justify-center gap-4 bg-[#29294b] px-6 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-600/20"
                >
                  Explore Features
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="/products"
                  className="inline-flex items-center justify-center border border-slate-300 px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#29294b] transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-700"
                >
                  All Models
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="border-t border-slate-200 bg-white px-5 py-16 sm:px-8 md:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-600">
            The Details Matter
          </p>

          <h2 className="text-3xl font-bold text-[#29294b] sm:text-4xl">
            Designed for Every Journey.
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                number: "01",
                title: "Modern Design",
                text: "A clean silhouette with a contemporary electric mobility aesthetic.",
              },
              {
                number: "02",
                title: "Everyday Comfort",
                text: "A design concept focused on making daily journeys feel effortless.",
              },
              {
                number: "03",
                title: "Electric Future",
                text: "A forward-looking style inspired by a new era of urban mobility.",
              },
            ].map((feature) => (
              <article
                key={feature.number}
                className="group border border-slate-200 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-900/5 sm:p-8"
              >
                <span className="text-sm font-bold text-cyan-500">
                  {feature.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[#29294b] transition-colors duration-300 group-hover:text-cyan-600">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {feature.text}
                </p>

                <div className="mt-6 h-0.5 w-10 bg-cyan-400 transition-all duration-300 group-hover:w-20" />
              </article>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}

export default ProductDetailsPage;
