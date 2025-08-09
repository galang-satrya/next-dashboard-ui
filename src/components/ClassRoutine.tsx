import Image from "next/image"

const ClassRoutine = () => {
    return (
        <div className="flex-1 h-full justify-between items-center bg-white rounded-lg p-4">
            <div className="flex justify-between">
                <h1 className="text-lg font-semibold">Class Routine</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <hr />
        </div>
    )
}

export default ClassRoutine