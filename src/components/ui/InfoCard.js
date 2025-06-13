// src/components/ui/InfoCard.js
export default function InfoCard({ icon, title, children }) {
  const IconComponent = icon; // Menyimpan komponen ikon dalam variabel
  return (
    <div className="flex flex-col items-start text-left">
      <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
        <IconComponent className="h-6 w-6 text-white" aria-hidden="true" />
      </div>
      <dt className="mt-4 font-semibold text-white">{title}</dt>
      <dd className="mt-2 leading-7 text-gray-200">{children}</dd>
    </div>
  );
}
