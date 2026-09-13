import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( <div className="h-screen flex">
    {/* LEFT */}
    <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[13%] bg-[#2F3646]">
    <Sidebar></Sidebar>
    </div>
    {/* Right */}
    <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[87%] bg-blue-200">
      <Navbar></Navbar>
      {children}
    </div>
  </div>
  );
}