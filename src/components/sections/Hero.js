// src/components/sections/Hero.js
export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white/70">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 -z-10 "
        style={{
          backgroundImage: "url('/hero-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Optional: Dark overlay untuk readability text */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="px-6 pt-14 lg:px-8 min-h-screen flex">
        <div className=" max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <p className="text-lg font-semibold leading-8 text-white drop-shadow-lg">
              Small Steps, Big Impact
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
              Start Managing Waste Today with WasteWise
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 drop-shadow-md">
              Learn about different types of waste, explore effective waste
              management practices, and take action toward a cleaner, more
              sustainable world. Your choices make a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
