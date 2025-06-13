import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center relative p-4">
      {/* Logo */}
      <div className="absolute hidden md:block top-4 right-4 z-20">
        <Link href="/">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="WasteWise Logo"
            width={80}
            height={100}
            className="h-12 w-auto"
          />
        </Link>
      </div>

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg-image.png')",
        }}
      />

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-green-400/20" />

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
