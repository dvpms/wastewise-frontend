// src/components/layout/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} WasteWise.com. All rights
            reserved.
          </p>
        </div>
        <div className="flex justify-center space-x-6 md:order-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500 font-semibold text-xs"
          >
            VIEW ON GITHUB
          </a>
        </div>
      </div>
    </footer>
  );
}
