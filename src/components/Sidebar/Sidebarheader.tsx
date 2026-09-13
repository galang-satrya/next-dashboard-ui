const Sidebarheader = () => {
  return (
    <div className='flex items-center text-[12px] ml-2'>
      <img
        src="https://enjoyedp.com/wp-content/uploads/2025/09/sweet-cute-girl-pic-hd.jpg"
        alt=""
        style={{ width: '60px', height: '80px', margin: '5px'}}
      />
      <div className="flex flex-col justify-center ">
        <p className="text-[#9AA1A7] text-[11px]">jane Doe</p>
        <p className="text-[#88653A] text-[13px]">School Operator</p>
        <p className="text-[#9AA1A7] text-[11px]">sdn2cibunar.smi@gmail.com</p>
        <p className="text-[#62BF4C] text-[11px]">Account Verified</p>
      </div>
    </div>
  )
}

export default Sidebarheader