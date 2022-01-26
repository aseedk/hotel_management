import Image from "next/image";
import {SearchIcon, GlobeAltIcon, UserCircleIcon, UsersIcon, MenuIcon} from "@heroicons/react/solid";

function Header() {
    return(
        <header className={'sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 '}>
        {/*Left */}
            <div className={'relative flex items-center h-10 cursor-pointer my-auto'}>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image src={'https://links.papareact.com/qd3'}
                       layout={'fill'}
                       objectFit={'contain'}
                       objectPosition={'left'}
                />
            </div>
        {/*Middle*/}
            <div className={'flex items-center md:border-2 rounded-full py-2 md:shadow-lg text-sm text-gray-400'}>
                <input type={'text'}
                       placeholder={"Start your search"}
                       className={"pl-5 bg-transparent outline-none flex-grow"}

                />
                <SearchIcon className={'hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'}/>
            </div>
        {/*Right*/}
            <div className={'flex items-center space-x-4 justify-end text-gray-500'}>
                <p className={'hidden md:inline cursor-pointer'}>Become a host</p>
                <GlobeAltIcon className={"h-6 cursor-pointer"}/>
                <div className={'flex items-center space-x-2 border-2 p-2 rounded-full'}>
                    <MenuIcon className={'h-6'}/>
                    <UserCircleIcon className={'h-6'}/>
                </div>
            </div>
        </header>
    )
}

export default Header;
