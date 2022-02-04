import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import logo from '../assets/images/logo.png'
import { DateRangePicker,DateRange } from 'react-date-range';
import Image from "next/image";
import {SearchIcon, GlobeAltIcon, UserCircleIcon, UsersIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import {useState} from "react";
import {useRouter} from "next/router";

function Header({placeholder}) {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const [showSearch, setShowSearch] = useState(false);
    const [showCross, setShowCross] = useState(false);
    const router = useRouter();
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    const selectionRange = {
        startDate: startDate ,
        endDate: endDate,
        key: 'selection'
    }
    const resetInput = () => {
        setSearchInput('');
        setNoOfGuests(1);
        setEndDate(new Date());
    }
    const handleSearch = () => {
      router.push({
          pathname: '/search',
          query: {
              location: searchInput,
              startDate: startDate.toISOString(),
              endDate: endDate.toISOString(),
              noOfGuests: noOfGuests
          }
      });
    }
    return(
        <header className={'sticky top-0 z-50 flex md:grid md:grid-cols-3 items-center justify-between bg-[#f7f7f7] shadow-md p-5 md:px-10 w-[100%] '}>
        {/*Left */}
            <div className={'md:hidden'}>
                <div onClick={()=>{
                    setShowSearch(!showSearch);
                }}>
                    <SearchIcon className={'h-10 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'}/>
                </div>

            </div>
            <div style={{display: showSearch && 'none'}}
                 className={'relative flex items-center h-10 cursor-pointer my-auto'}
                 onClick={()=> router.push("/")}
            >
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                {/*https://links.papareact.com/qd3*/}
                <Image src={logo}
                       objectFit={'contain'}
                       objectPosition={'left'}
                       width="80" height="80"
                />
                <h1 className={'text-2xl ml-2 font-semibold family-Roboto'}>Techdev</h1>
            </div>
            <div className={'md:hidden'}>
                <MenuIcon className={'h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'}/>
            </div>
        {/*Middle*/}
            <div style={{display: showSearch && 'flex'}}
                 className={'flex hidden absolute h-3/5 w-4/5 md:h-full shadow-lg border-1 md:relative bg-white w-full  md:inline-flex items-center md:border-2 rounded-full py-2 lg:shadow-lg text-sm text-gray-900'}>
                { showCross && (
                    <div onClick={()=>{
                        setShowSearch(false);
                        setShowCross(false);
                        resetInput();
                    }}>
                        <XIcon className={'inline-flex h-8 bg-white text-black rounded-full p-2 cursor-pointer mx-2'}/>
                    </div>
                )
                }

                <input type={'text'}
                       placeholder={placeholder || "Start your search"}
                       className={"pl-5 w-3/4 bg-transparent outline-none flex-grow"}
                       value={searchInput}
                       onChange={(event => {
                           setSearchInput(event.target.value);
                           if (event.target.value === ""){
                               setShowCross(false);
                           }else {
                               setShowCross(true);
                           }
                       })}
                />
                <SearchIcon className={'inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2'}/>
            </div>
        {/*Right*/}
            <div className={'flex hidden md:inline-flex items-center space-x-4 justify-end text-gray-500'}>
                <p className={'md:inline-flex cursor-pointer'}
                   onClick={() => {router.push({
                       pathname: '/map',
                   });}}
                >
                    Show Map
                </p>
                <GlobeAltIcon className={"h-6 cursor-pointer"}/>
                <div className={'flex items-center space-x-2 border-2 p-2 rounded-full bg-white'}>
                    <MenuIcon className={'h-6'}/>
                    <UserCircleIcon className={'h-6'}/>
                </div>
            </div>
            {searchInput && (
                <div className={'absolute  md:w-fit bottom-0 translate-y-full lg:translate-y-0 bg-white md:relative md:flex md:flex-col md:col-span-3 mx-auto mt-5 px-4 py-8'}>
                    <div className={'hidden md:inline-flex'}>
                        <DateRangePicker
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            rangeColors={['#FD5B61']}
                            onChange={handleSelect}
                        />
                    </div>
                    <div className={'inline-flex md:hidden'}>
                        <DateRange
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            rangeColors={['#FD5B61']}
                            onChange={handleSelect}
                        />
                    </div>
                    <div className={'flex flex items-center border-b mb-4'}>
                        <h2 className={'text-2xl flex-grow font-semibold'}>Number of Guests</h2>
                        <UsersIcon className={"h-5"} />
                        <input type={'number'}
                               className={'w-12 pl-2 text-lg outline-none text-red-400'}
                               value={noOfGuests}
                               min={1}
                               onChange={event => setNoOfGuests(event.target.value)}
                        />
                    </div>
                    <div className={'flex'}>
                        <button className={'flex-grow text-gray-500'}
                                onClick={resetInput}
                        >
                            Cancel
                        </button>
                        <button className={'flex-grow text-red-400'}
                                onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header;
