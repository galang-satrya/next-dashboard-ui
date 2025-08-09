const CombBread = () => {
    return (
        <div className=''>
            <div className="flex justify-between pr-4 pl-4">
                <div className="flex-row">
                    <div className="">
                        <span className=" font-bold">Admin Dashboard</span>
                    </div>
                    <div className=" text-sm text-">
                        <span className=" text-gray-500">Dashboard / </span>
                        <span>Admin</span>
                    </div>
                </div>
                <div className="">
                    <button type="button" className="text-white bg-lamaPurple font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Add Student</button>
                    <button type="button" className="text-white bg-lamaYellow font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Report</button>
                </div>
            </div>
        </div>
    )
}

export default CombBread