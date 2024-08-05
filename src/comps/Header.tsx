import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaChrome } from "react-icons/fa";


const Header: React.FC = () => {
    return (
        <div className='flex flex-col  h-[auto] px-7 py-3  items-center gap-3 border-b-[1px] border-b-[#353535]'>
            <div className='flex justify-between w-full'>
                <div className='flex gap-7 items-center justify-start w-[100%] max-w-[600px]'>
                    <div className='font-extrabold text-xl cursor-pointer text-[#ecd093]'>
                        CARETIFY
                    </div>
                    <form
                        className='w-[100%] relative hidden md:flex'
                        action="">
                        <div className="icn">
                            <CiSearch />
                        </div>
                        <input
                            className='py-2 px-8 rounded-3xl outline-none w-full relative'
                            placeholder='Search something'
                            type="text" />
                    </form>
                </div>
                <div className='flex gap-3 items-center h-full'>
                    <div className='py-2 px-7 rounded-3xl hidden bg-[#353535]  items-center gap-3 lg:flex cursor-pointer hover:bg-[#686767]'>
                        <FaChrome />     Switch to Caretify!
                    </div>
                    <div className='py-3 px-7 rounded-3xl flex bg-[#353535]  items-center gap-3 lg:hidden cursor-pointer hover:bg-[#686767]'>
                        <FaChrome />
                    </div>
                    <div className='bg-[#353535] rounded-full p-3 cursor-pointer flex flex-col gap-[3px] hover:bg-[#686767]'>
                        <div className='w-[20px] h-[3px] bg-[#e7e7e7] rounded-md'></div>
                        <div className='w-[20px] h-[3px] bg-[#fff] rounded-md'></div>
                        <div className='w-[20px] h-[3px] bg-[#fff] rounded-md'></div>
                    </div>
                </div>
            </div>
            <form
                className='w-[100%] relative flex md:hidden'
                action="">
                <div className="icn">
                    <CiSearch />
                </div>
                <input
                    className='py-2 px-8 rounded-3xl outline-none w-full relative'
                    placeholder='Search something'
                    type="text" />
            </form>
        </div>
    )
}

export default Header
