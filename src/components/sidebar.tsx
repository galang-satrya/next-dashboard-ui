import Clock from "./Sidebar/clock"
import NavLeft from "./Sidebar/NavLeft"
import Sidebarheader from "./Sidebar/Sidebarheader"
import SidebarMenu from "./Sidebar/SidebarMenu"


const Sidebar = () => {
  return (
    <div className='bg-[#2F3646] fixed w-[14%] md:w-[8%] lg:w-[16%] xl:w-[13%]'>
      <NavLeft></NavLeft>
      <Sidebarheader></Sidebarheader>
      <Clock></Clock>
      <SidebarMenu></SidebarMenu>
    </div>
  )
}

export default Sidebar