import Image from "next/image";
function Banner() {
    return(
        <div className={'relative h-[300px] sm:h-[400px] lg:h-[500px] '}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4ozZ1iImwQOiDICPfikneDVHxwHjBevIwB4Nd-_YEr-3_HhlTZENWUF-xeh0aayYVxg&usqp=CAU"}
                   layout={"fill"}
                   objectFit={'cover'}
            />
            <div className={"absolute top-1/2 w-full text-center"}>
                <p className={"text-sm sm:text-lg font-medium text-white"}>Not sure where to go? Perfect.</p>
                <button className={'text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    I'm flexible
                </button>
            </div>
        </div>
    )
}
export default Banner;
