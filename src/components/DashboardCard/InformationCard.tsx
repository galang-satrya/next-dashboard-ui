import { School } from 'lucide-react';

type InfoRow = {
  label: string;
  value: string;
  valueClassName?: string;
};

const infoRows: InfoRow[] = [
  { label: 'NPSN', value: '00000000' },
  { label: 'Bentuk Pendidikan', value: 'SMK' },
  { label: 'Status', value: 'Swasta' },
  { label: 'Kecamatan', value: 'Kec. Example' },
  { label: 'Kabupaten', value: 'Kab. Example' },
  { label: 'Provinsi', value: 'Prov. Example' },
  { label: 'Kepala Sekolah', value: 'Full Name' },
  { label: 'Operator', value: 'Full Name' },
  { label: 'Username', value: 'user@example.com' },
  { label: 'Implementasi Kurikulum', value: 'Merdeka' },
  {
    label: 'Status BOSP',
    value: 'Bersedia Menerima BOSP',
    valueClassName: 'text-emerald-600 font-medium',
  },
  { label: 'Bendahara BOSP', value: 'Full Name' },
];

const InformationCard = () => {
  return (
    <div className="w-full h-full rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-gray-100 px-5 py-4">
        <School size={18} className="text-[#2F3646]" />
        <h2 className="text-sm font-semibold text-[#2F3646]">
          School Name Placeholder
        </h2>
      </div>

      {/* Body: two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
        {/* Left column: label/value rows */}
        <dl className="space-y-2">
          {infoRows.map((row) => (
            <div key={row.label} className="grid grid-cols-[140px_1fr] gap-2 text-sm">
              <dt className="text-gray-500">{row.label}</dt>
              <dd className={row.valueClassName ?? 'text-[#2F3646]'}>
                {row.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Right column: decorative panel */}
        <div className="relative flex items-center justify-center overflow-hidden rounded-xl bg-[#0F2A4A] h-[340px]">
          {/* Decorative wave shapes */}
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/5" />
          <div className="absolute top-10 right-0 h-32 w-32 rounded-full bg-white/5" />
          <div className="absolute bottom-0 left-0 h-24 w-full bg-white/5 rounded-t-full" />

          {/* Content */}
          <div className="relative flex flex-col items-center gap-3 text-center text-white">
            <div className="flex h- w-12 items-center justify-center rounded-xl bg-white">
              <span className="text-lg font-bold text-[#0F2A4A]">P</span>
            </div>
            <p className="text-sm font-semibold tracking-wide">
              PLACEHOLDER LOGO TEXT
            </p>
          </div>
        </div>
      </div>

      {/* Footer: action buttons */}
      <div className="flex items-center justify-end gap-2 border-t border-gray-100 px-5 py-3">
        <button className="rounded-lg bg-[#2F3646] px-4 py-2 text-sm font-medium text-white hover:bg-[#262c39] transition-colors">
          Primary Action
        </button>
        <button className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600 transition-colors">
          Secondary Action
        </button>
      </div>
    </div>
  );
};

export default InformationCard;