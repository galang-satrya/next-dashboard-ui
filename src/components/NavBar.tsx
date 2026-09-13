import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <div className=' bg-[#434c5f] w-[100%] h-10 flex items-center'>
      <div className="ml-2 flex gap-2 text-[#9AA1A7]">
        <Menu />
        <p>SD Negeri 02 Cibunar - 2026-2027 (version 0.0.1)</p>
      </div>
    </div>
  )
}

export default Navbar