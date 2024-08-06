import React, { FormEvent, useState } from 'react'
import Header from '../comps/Header'
import axios from 'axios';
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const SearchPage: React.FC = () => {
    const [stringVal, setStringVal] = useState<string>('')
    const nav= useNavigate()
    function searchTheWeb(e: FormEvent) {
        console.log("Preventing default behavior");
        e.preventDefault();
        if (stringVal === '') {
            alert("Please type something");
            return;
        }

        nav(`/search?q=${stringVal}`);
    }

    
    return (
        <div className='h-screen p-3 min-h-[800px]'>
            <Header />
            <div className='h-full flex items-center justify-center'>
                <form
                    className='w-full max-w-[800px] flex items-center justify-center gap-3 flex-col '
                    onSubmit={searchTheWeb}
                    action="submit">
                    <h1 className='text-[5rem] font-extrabold'>CARETIFY</h1>
                    <div className='w-full h-full relative flex'>
                        <div className="icn">
                            <CiSearch />
                        </div>
                        <input
                            placeholder='Search something in the web...'
                            className='bg-[#353535] w-full py-5 px-[2rem] radiusLeft outline-none relative'
                            value={stringVal}
                            onChange={(e) => { setStringVal(e.target.value) }}
                            type="text" />
                        <div className='h-[100%] w-[70px] bg-[#1b1b1b] py-6 cursor-pointer radiusRight hover:bg-[#464545]'>
                            <FaMicrophone />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchPage
