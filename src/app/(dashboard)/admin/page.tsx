import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import ClassRoutine from "@/components/ClassRoutine";
import CombBread from "@/components/CombBread";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import FinanceExpense from "@/components/FinanceExpence";
import GreetingCard from "@/components/GreetingCard";
import LeaveRequestCard from "@/components/LeaveRequestCard";
import PerformanceCard from "@/components/PerformanceCard";
import QuickLinks from "@/components/QuickLinks";
import UserCard from "@/components/UserCard";
import Image from "next/image";

const AdminPage = () => {
  return (
    <div className="">
      <CombBread />
      <div className="p-4 gap-4 flex-col md:flex-row">
        <GreetingCard />
      </div>
      {/* USER CARDS */}
      <div className="flex gap-4 pr-4 pl-4 pb-4 justify-between flex-wrap">
        <UserCard type="student" />
        <UserCard type="teacher" />
        <UserCard type="parent" />
        <UserCard type="staff" />
      </div>
      <div className="grid grid-cols-3 grid-rows-4 gap-4 pr-4 pl-4">
        <div className="row-span-3">
          <EventCalendar />
        </div>
        <div className="row-span-3">
          <AttendanceChart />
        </div>
        <div >
          <QuickLinks />
        </div>
        <div className="col-span-2 col-start-1 row-start-4">
          <FinanceExpense />
        </div>
        <div className="col-start-3 row-start-2">
          <ClassRoutine />
        </div>
        <div className="col-start-3 row-start-3">
          <PerformanceCard />
        </div>
        <div className="col-start-3 row-start-4">
          <LeaveRequestCard />
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-5 gap-4 pr-4 pl-4 ">
        <div >1</div>
        <div >2</div>
        <div >3</div>
        <div >4</div>
      </div>
      <div className="grid grid-cols-3 grid-rows-6 gap-4 pr-4 pl-4">
        <div className="row-span-2">1</div>
        <div className="row-span-2 col-start-1 row-start-3">2</div>
        <div className="row-span-4 col-start-2 row-start-1">3</div>
        <div className="col-start-3 row-start-1">4</div>
        <div className="col-start-3 row-start-2">5</div>
        <div className="col-start-3 row-start-3">6</div>
        <div className="col-start-3 row-start-4">7</div>
        <div className="row-span-2 row-start-5">8</div>
        <div className="row-span-2 row-start-5">9</div>
        <div className="row-span-2 row-start-5">10</div>
      </div>
    </div>
  );
};

export default AdminPage;
