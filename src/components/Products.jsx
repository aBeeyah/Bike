
import scooterImage from "../assets/scooter.svg";
import { Link } from "react-router-dom";

function Products() {
  const products = [
    {
      name: "FUTURE EV-R",
      type: "Urban Electric Scooter",
      speed: "85 km/h",
      range: "120 km",
      charging: "3.5 hours",
      price: "$1,299",
      tag: "POPULAR",
    },
    {
      name: "FREEDOM EV-S",
      type: "Smart City Scooter",
      speed: "75 km/h",
      range: "100 km",
      charging: "3 hours",
      price: "$1,099",
      tag: "CITY RIDE",
    },
    {
      name: "ENERGY EV-X",
      type: "Performance Electric Scooter",
      speed: "100 km/h",
      range: "150 km",
      charging: "4 hours",
      price: "$1,599",
      tag: "PERFORMANCE",
    },
  ];

  return (
    <section
      id="products"
      className="overflow-hidden bg-[#f5f8fb] px-5 py-20 sm:px-8 md:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-600">
              Find Your Perfect Ride
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#29294b] sm:text-4xl lg:text-5xl">
              Explore Our
              <span className="block text-cyan-500">
                Electric Scooters.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-500 sm:text-base">
            Designed for modern living. Discover smart, efficient and stylish
            electric rides made for your everyday journeys.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <article
              key={product.name}
              className="group relative flex flex-col overflow-hidden border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-900/10"
            >
              {/* Product Image */}
              <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-[#eaf7fb] to-[#f8fbfd] p-7 sm:h-72">
                <span className="absolute left-5 top-5 border border-cyan-200 bg-white/80 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-cyan-700">
                  {product.tag}
                </span>

                <span className="absolute right-5 top-5 text-sm font-semibold text-slate-300">
                  0{index + 1}
                </span>

                <div className="absolute h-40 w-40 rounded-full bg-cyan-200/30 blur-3xl transition-transform duration-500 group-hover:scale-150" />

                <img
                  src={scooterImage}
                  alt={product.name}
                  className="relative z-10 h-full w-full object-contain drop-shadow-xl transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>

              {/* Product Information */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-600">
                  {product.type}
                </p>

                <h3 className="text-2xl font-bold text-[#29294b]">
                  {product.name}
                </h3>

                {/* Specifications */}
                <div className="my-6 grid grid-cols-3 border-y border-slate-100 py-5">
                  <div className="border-r border-slate-100 pr-2">
                    <p className="text-[10px] uppercase tracking-wide text-slate-400">
                      Top Speed
                    </p>
                    <p className="mt-2 text-sm font-bold text-slate-800">
                      {product.speed}
                    </p>
                  </div>

                  <div className="border-r border-slate-100 px-3">
                    <p className="text-[10px] uppercase tracking-wide text-slate-400">
                      Range
                    </p>
                    <p className="mt-2 text-sm font-bold text-slate-800">
                      {product.range}
                    </p>
                  </div>

                  <div className="pl-3">
                    <p className="text-[10px] uppercase tracking-wide text-slate-400">
                      Charging
                    </p>
                    <p className="mt-2 text-sm font-bold text-slate-800">
                      {product.charging}
                    </p>
                  </div>
                </div>

                {/* Price and Explore Button */}
                <div className="mt-auto flex items-center justify-between gap-3">
                  <div>
                    <p className="mb-1 text-xs text-slate-400">
                      Starting at
                    </p>
                    <p className="text-xl font-bold text-[#29294b]">
                      {product.price}
                    </p>
                  </div>

                  <Link
                    to={`/products/${product.name
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                    className="group/btn inline-flex items-center gap-2 border border-[#29294b] px-4 py-3 text-xs font-bold text-[#29294b] transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white sm:px-5"
                  >
                    EXPLORE
                    <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/products"
            className="group relative pb-2 text-sm font-bold tracking-wide text-[#29294b] transition-colors duration-300 hover:text-cyan-600"
          >
            DISCOVER ALL MODELS
            <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-100 bg-cyan-500 transition-transform duration-300 group-hover:scale-x-50" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Products;
