import React, { FormEvent, useState } from 'react'
import Header from '../comps/Header'
import { FaChrome } from "react-icons/fa";
import axios from 'axios';


const Homepage: React.FC = () => {
    const [stringVal, setStringVal] = useState<string>('')

    function searchTheWeb(e: FormEvent) {
        console.log("Preventing default behavior");
        e.preventDefault();
        if (stringVal === '') {
            alert("Please type something");
            return;
        }

        axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyA9ND_-eMexUUINOszh_Wy-HstikB6qlZM&cx=b3f81ea3f7409464f&q=${stringVal}`)
            .then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <Header />
            <div className='p- w-full max-w-[1200px] mx-auto mt-[5rem] px-5'>
                <div className='w-full flex flex-col items-center justify-center text-center gap-3'>
                    <div className='text-[2.2rem] font-extrabold w-full txthdr md:text-[4vw] text-[#ecd093]'>
                        SEARCH FOR A  <br />
                        BETTER TOMMOROW
                    </div>
                    <p className='w-full text-[#888] text-[14px] max-w-[700px] md:text-[20px]'>
                        Every search you make helps
                        generate funds for donations through ad revenue. Search to support meaningful causes and make a difference today!
                    </p>
                    <div className='py-2 mt-3 px-7 rounded-3xl flex bg-[#353535]  items-center gap-3 lg:flex cursor-pointer hover:bg-[#686767]'>
                        <FaChrome />     Switch to Caretify!
                    </div>
                </div>

            </div>

            <div>
                <form
                    onSubmit={searchTheWeb}
                    action="submit">
                    <input
                    value={stringVal}
                    onChange={(e) => {setStringVal(e.target.value)}}
                     type="text" />
                </form>
            </div>
        </div>
    )
}

export default Homepage
