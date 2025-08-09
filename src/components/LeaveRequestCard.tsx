import Image from "next/image"
import EventCalendar from "./EventCalendar"

const LeaveRequestCard = () => {
    return (
        <div className="flex-1 justify-between items-center bg-white rounded-lg p-4 h-full">
            <div className="flex justify-between">
                <h1 className="text-lg font-semibold">Leave Request</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <hr />
        </div>
    )
}

export default LeaveRequestCard