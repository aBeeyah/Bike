
import { useState, useRef } from "react";
import scooterImage from "../assets/scooter.svg";

const scooters = [
  {
    title: "FUTURE",
    model: "EV-R",
    image: scooterImage,
    speed: "50 km/hr",
    range: "80km",
    charging: "3.5hr",
  },
  {
    title: "FREEDOM",
    model: "EV-S",
    image: scooterImage,
    speed: "55 km/hr",
    range: "90km",
    charging: "3hr",
  },
  {
    title: "ENERGY",
    model: "EV-X",
    image: scooterImage,
    speed: "60 km/hr",
    range: "100km",
    charging: "3hr",
  },
  {
    title: "BEYOND",
    model: "EV-Z",
    image: scooterImage,
    speed: "65 km/hr",
    range: "110km",
    charging: "2.5hr",
  },
];

function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scooterRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!scooterRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    scooterRef.current.style.transform = `
      perspective(800px)
      translate(${x * 14}px, ${y * 10}px)
      rotateY(${x * 8}deg)
      rotateX(${-y * 6}deg)
    `;
  };

  const handleMouseLeave = () => {
    if (!scooterRef.current) return;

    scooterRef.current.style.transform =
      "perspective(800px) translate(0, 0) rotateY(0deg) rotateX(0deg)";
  };

  const scooter = scooters[activeIndex];

  const nextSlide = () => {
    handleMouseLeave();
    setActiveIndex((current) => (current + 1) % scooters.length);
  };

  const previousSlide = () => {
    handleMouseLeave();
    setActiveIndex(
      (current) => (current - 1 + scooters.length) % scooters.length
    );
  };

  const goToSlide = (index) => {
    handleMouseLeave();
    setActiveIndex(index);
  };

  return (
    <section
      id="home"
      className="relative min-h-[650px] overflow-hidden bg-gradient-to-br from-[#f5f8f8] via-[#dceef4] to-[#8ddbd0] md:min-h-screen"
    >
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute -left-16 top-28 h-32 w-32 rounded-full bg-[#72d0c4]/50 blur-sm" />
      <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#9bd8e8]/60" />
      <div className="pointer-events-none absolute left-[42%] top-0 h-[85%] w-[48%] rounded-b-[48%] bg-white/35" />

      {/* Model label */}
      <div className="absolute right-0 top-24 z-10 hidden h-[48%] w-10 items-center justify-around bg-gradient-to-b from-[#73d5ca] to-[#80bfe0] py-5 text-[8px] font-bold tracking-[5px] text-white [writing-mode:vertical-rl] md:flex">
        <span>THE CONCEPT</span>
        <span>ELECTRIC · B</span>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid min-h-[650px] max-w-7xl grid-cols-1 items-center px-6 pb-24 pt-28 md:min-h-screen md:grid-cols-2 md:px-12 md:pb-28">
        <div className="relative z-20 mt-4 md:mt-0">
          <p className="mb-3 text-xs font-medium tracking-[7px] text-[#202b30]">
            LET’S RIDE THE
          </p>

          <h1
            key={scooter.title}
            className="animate-[fadeIn_.5s_ease] text-5xl font-black tracking-tight text-[#080d10] sm:text-6xl lg:text-7xl"
          >
            {scooter.title}
          </h1>

          <p className="mt-5 whitespace-pre-line text-xs leading-6 text-[#38464b]">
            {scooter.description}
          </p>

          <button className="mt-7 rounded-md bg-[#69d2c2] px-6 py-3 text-[10px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#40bcae] hover:shadow-lg">
            PRE-ORDER
          </button>
        </div>

        {/* Scooter and model */}
        <div className="relative mt-8 flex min-w-0 flex-col items-center justify-center md:mt-0">
          <div className="pointer-events-none absolute left-1/2 top-[15%] -translate-x-1/2 select-none text-7xl font-black tracking-tighter text-white/90 sm:text-8xl lg:text-9xl">
            {scooter.model}
          </div>

          <img
            ref={scooterRef}
            key={scooter.model}
            src={scooter.image}
            alt={`${scooter.model} electric scooter`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative z-10 h-64 w-full cursor-pointer object-contain drop-shadow-2xl transition-transform duration-200 ease-out sm:h-80 md:h-[360px] lg:h-[410px]"
            style={{ transformStyle: "preserve-3d" }}
          />

          <div className="relative z-10 mt-3 grid w-full max-w-md grid-cols-3 divide-x divide-[#9ccbd4]/60 rounded-xl border border-[#a5d8df]/60 bg-[#a8dce8]/40 px-2 py-4 backdrop-blur-sm">
            {[
              [scooter.speed, "speed"],
              [scooter.range, "battery range"],
              [scooter.charging, "charging time"],
            ].map(([value, label]) => (
              <div key={label} className="px-1 text-center">
                <p className="text-[10px] font-semibold text-[#26363b]">
                  {value}
                </p>
                <p className="mt-1 text-[9px] text-[#45585e]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-5 left-6 right-6 z-20 flex items-center justify-between md:bottom-7 md:left-10 md:right-10">
        <button
          onClick={previousSlide}
          className="text-xs text-[#26363b] transition-colors duration-300 hover:text-[#35adab]"
          aria-label="Previous scooter"
        >
          <span className="text-lg">‹</span> Prev
        </button>

        <div className="flex items-center gap-2">
          {scooters.map((item, index) => (
            <button
              key={item.model}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-5 bg-[#64cdbf]"
                  : "w-2 bg-[#9ccbd4] hover:bg-[#64cdbf]"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="text-xs text-[#26363b] transition-colors duration-300 hover:text-[#35adab]"
          aria-label="Next scooter"
        >
          Next <span className="text-lg">›</span>
        </button>
      </div>
    </section>
  );
}

export default HeroSlider;
