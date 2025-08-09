const GreetingCard = () => {
    return (
         <div className="bg-lamaPurple rounded-xl h-[75px] p-4">
            <div className="flex justify-between">
                <div className="flex-row">
                    <div className="">
                        <span className=" font-bold">Welcome Back, Mr. Admin</span>
                    </div>
                    <div className=" text-sm ">
                        <span className=" text-gray-500">have a Good day at work</span>
                    </div>
                </div>
                <div className="items-center my-auto text-sm">
                    <span>Updated Recently 8 August 2025</span>
                </div>
            </div>
        </div>
    )
}

export default GreetingCard