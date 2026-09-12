import Sidebarheader from "./Sidebar/Sidebarheader"
import SidebarMenu from "./Sidebar/SidebarMenu"


const Sidebar = () => {
  return (
    <div className='bg-[#2F3646]'>
      <Sidebarheader></Sidebarheader>
      <SidebarMenu></SidebarMenu>
    </div>
  )
}

export default Sidebar