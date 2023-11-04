import { HiOutlineArrowSmLeft, HiOutlineBell, HiOutlineUser } from 'react-icons/hi'

const Nav = () => {
    return (
        <div className="w-full shadow-sm shadow-gray-600 h-16">
            <div className="flex items-center justify-between h-full px-4">
                <div className="flex items-center space-x-4">
                    <HiOutlineArrowSmLeft className="text-2xl text-gray-600" />
                    <p className="text-2xl font-bold text-[#012E57]">View Patient</p>
                </div>
                <div className="flex items-center space-x-4 cursor-pointer">
                    <HiOutlineBell className="text-2xl text-gray-600" />
                    <HiOutlineUser className="text-2xl text-gray-600" />
                </div>
            </div>

        </div>
    )
}

export default Nav