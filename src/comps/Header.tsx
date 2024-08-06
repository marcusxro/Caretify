// import axios from 'axios';
import React from 'react';
// import { CiSearch } from "react-icons/ci";
import { FaChrome } from "react-icons/fa";
// import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    // const [stringVal, setStringVal] = useState<string>('');
    // const location = useLocation();
    
    // function searchTheWeb(e: FormEvent) {
    //     console.log("Preventing default behavior");
    //     e.preventDefault();
    //     if (stringVal === '') {
    //         alert("Please type something");
    //         return;
    //     }

    //     axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyA9ND_-eMexUUINOszh_Wy-HstikB6qlZM&cx=b3f81ea3f7409464f&q=${stringVal}`)
    //         .then((res) => {
    //             console.log(res);
    //         }).catch((err) => {
    //             console.log(err);
    //         });
    // }

    // const [boolRender, setBooleanRender] = useState<boolean>(false);

    // useEffect(() => {
    //     if (location.pathname.includes('/search')) {
    //         setBooleanRender(false);
    //     } else {
    //         setBooleanRender(true);
    //     }
    // }, [location.pathname]);


    
    return (
        <div className='flex flex-col h-[auto] px-7 py-3 items-center bg-[#242424] z-10 gap-3 border-b-[1px] border-b-[#353535] fixed left-0 top-0 w-full'>
            <div className='flex justify-between w-full'>
                <div className='flex gap-7 items-center justify-start w-[100%] max-w-[600px]'>
                    <div className='font-extrabold text-xl cursor-pointer text-[#ecd093]'>
                        CARETIFY
                    </div>
                    {/* {
                        boolRender &&
                        <form
                            onSubmit={searchTheWeb}
                            className='w-[100%] relative hidden md:flex'>
                            <div className="icn">
                                <CiSearch />
                            </div>
                            <input
                                value={stringVal}
                                onChange={(e) => setStringVal(e.target.value)}
                                className='py-2 px-8 rounded-3xl outline-none w-full relative'
                                placeholder='Search something'
                                type="text" />
                        </form>
                    } */}
                </div>
                <div className='flex gap-3 items-center h-full'>
                    <div  className='py-2 px-7 rounded-3xl hidden bg-[#353535] items-center gap-3 lg:flex cursor-pointer hover:bg-[#686767]'>
                        <FaChrome /> Switch to Caretify!
                    </div>
                    <div  className='py-3 px-7 rounded-3xl flex bg-[#353535] items-center gap-3 lg:hidden cursor-pointer hover:bg-[#686767]'>
                        <FaChrome />
                    </div>
                    <div className='bg-[#353535] rounded-full p-3 cursor-pointer flex flex-col gap-[3px] hover:bg-[#686767]'>
                        <div className='w-[20px] h-[3px] bg-[#e7e7e7] rounded-md'></div>
                        <div className='w-[20px] h-[3px] bg-[#fff] rounded-md'></div>
                        <div className='w-[20px] h-[3px] bg-[#fff] rounded-md'></div>
                    </div>
                </div>
            </div>
            {/* {
                boolRender &&
                <form
                    onSubmit={searchTheWeb}
                    className='w-[100%] flex  md:hidden'>
                    <div className="icn">
                        <CiSearch />
                    </div>
                    <input
                        value={stringVal}
                        onChange={(e) => setStringVal(e.target.value)}
                        className='py-2 px-8 rounded-3xl outline-none w-full relative'
                        placeholder='Search something'
                        type="text" />
                </form>
            } */}
        </div>
    );
}

export default Header;
