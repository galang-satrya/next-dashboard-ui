import Announcement from "@/components/Announcement"
import Calendar from "@/components/calendar"
import DashboardCard2 from "@/components/DashboardCard2"
import DashboardCards from "@/components/DashboradCard"
import Events from "@/components/Events"


const AdminPage = () => {
	return (
		<div className='flex'>
			{/* Left Card */}
			<div className="w-[75%]">
				<DashboardCards></DashboardCards>
				<DashboardCard2></DashboardCard2>
			</div>
			{/* Right Card */}
			<div className="w-[25%]">
				<Calendar></Calendar>
				<Events></Events>
				<Announcement></Announcement>
			</div>
		</div>
	)
}

export default AdminPage