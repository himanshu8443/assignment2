import Chart from "@/components/Chart";
import { BiSolidUserCircle } from "react-icons/bi";
import { BsTelephonePlusFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GiHeartOrgan } from "react-icons/gi";
import { GiJawbone } from "react-icons/gi";
import { MdOutlineLocalHospital } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";

export default function Home() {
  return (
    <div className="min-h-screen p-3 md:p-10">
      <div className=" flex items-center justify-between">
        <div className=" flex-col flex justify-center gap-1">
          <p className="text-xl font-semibold text-[#012E57]">
            Himanshu F/20/India
          </p>
          <p className="text-lg font-semibold text-[#012E57]">
            Patient Id : 123456789
          </p>
        </div>
        <BiSolidUserCircle
          size={50}
          className="text-4xl text-[#012E57] cursor-pointer"
        />
      </div>
      <Chart />

      <div className="flex flex-col gap-2 mt-10">
        <ul className="flex flex-col gap-2 max-w-2xl border border-gray-300 rounded-md p-4 shadow-sm shadow-gray-600">
          <li className="flex justify-start items-center gap-16 md:gap-72">
            <p className="text-lg font-semibold text-gray-600 w-16">Phone</p>
            <div className="flex items-center gap-2">
              <BsTelephonePlusFill size={20} className="text-[#012E57]" />
              <p className="text-sm font-semibold text-gray-700">123456789</p>
            </div>
          </li>
          <li className="flex justify-start  gap-16 items-center md:gap-72">
            <p className="text-lg font-semibold text-gray-600 w-16">Email</p>
            <div className="flex items-center gap-2">
              <AiOutlineMail size={20} className="text-[#012E57]" />
              <p className="md:text-sm text-xs  font-semibold text-gray-700 truncate md:w-full ">
                himanshu3@gmail.com
              </p>
            </div>
          </li>
          <li className="flex justify-start gap-16 items-center md:gap-72">
            <p className="text-lg font-semibold text-gray-600 w-16"> Side</p>
            <div className="flex items-center gap-2">
              <GiHeartOrgan size={20} className="text-[#ae5764]" />
              <p className="text-base font-semibold text-gray-700">Bilateral</p>
            </div>
          </li>
          <li className="flex justify-start gap-16 items-center md:gap-72">
            <p className="text-lg font-semibold text-gray-600 w-16">
              Condition
            </p>
            <div className="flex items-center gap-2">
              <GiJawbone size={20} className="text-[#012E57]" />
              <p className="text-base font-semibold text-gray-700">ortho</p>
            </div>
          </li>
          <li className="flex justify-start gap-16 items-center md:gap-72">
            <p className="text-lg font-semibold text-gray-600 w-16">
              Speciality
            </p>
            <div className="flex items-center gap-2">
              <MdOutlineLocalHospital size={20} className="text-[#012E57]" />
              <p className="text-base font-semibold text-gray-700">
                osteoarthritis
              </p>
            </div>
          </li>
        </ul>
      </div>
      <hr className="my-10 bg-slate-700 h-[2px]" />
      <div className="flex  justify-start items-center gap-7">
        <div className="flex gap-2 items-center">
          <TbReportSearch size={30} className="text-[#012E57]" />
          <p className="md:text-lg text-sm font-semibold text-gray-600 ">
            Medical History
          </p>
        </div>
        <p className="md:text-base text-sm font-semibold text-gray-700">
          HyperTension, DM, Hypothyroidism
        </p>
      </div>
      <hr className="my-10 bg-slate-700 h-[2px]" />
    </div>
  );
}
