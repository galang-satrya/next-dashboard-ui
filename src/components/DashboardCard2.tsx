import InformationCard from "./DashboardCard/InformationCard"

const DashboardCard2 = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-2 p-2 gap-4 h-[500px]">
      <div className="col-span-3 row-span-2 bg-white rounded-2xl ">
        <InformationCard></InformationCard>
      </div>
      <div className="col-span-2 bg-white rounded-2xl">

      </div>
      <div className="col-span-2 bg-white rounded-2xl">

      </div>
    </div>
  )
}

export default DashboardCard2