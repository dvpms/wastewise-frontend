// src/components/sections/Hero.js
export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      {/* Efek gradien di latar belakang */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#90ee90] to-[#3cb371] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <p className="text-lg font-semibold leading-8 text-gray-600">
            Small Steps, Big Impact
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Start Managing Waste Today with WasteWise
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Learn about different types of waste, explore effective waste
            management practices, and take action toward a cleaner, more
            sustainable world. Your choices make a difference.
          </p>
        </div>
      </div>
    </div>
  );
}
