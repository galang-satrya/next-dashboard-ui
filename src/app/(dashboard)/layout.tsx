import Sidebar from "@/components/sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( <div className="h-screen flex">
    {/* LEFT */}
    <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[12%] bg-red-200">
    <Sidebar></Sidebar>
    </div>
    {/* Right */}
    <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[88%] bg-blue-200"></div>
  </div>
  );
}