import Header from "../components/Header";
import Footer from "../components/Footer";
import {useRouter} from "next/router";
import {format} from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({searchResults}) {
    const router = useRouter();
    const {location, startDate, endDate, noOfGuests} = router.query;
    const formattedStartDate = format(new Date(startDate.toString()), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate.toString()), "dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`;
    return(
        <div className={''}>
            <Header placeholder={`${location} | ${range} ${noOfGuests} guests`}/>
            <main className={'flex'}>
                <section className={'flex-grow pt-14 px-6'}>
                    <p className={'text-xs'}>300+ Stays - {range} -  for {noOfGuests} number of guests</p>
                    <h1 className={'text-3xl font-semibold mt-2 mb-6'}>Stays in {location}</h1>
                    <div className={'hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'}>
                        <p className={'button'}>Cancellation Flexibility</p>
                        <p className={'button'}>Type of Place</p>
                        <p className={'button'}>Price</p>
                        <p className={'button'}>Rooms and Beds</p>
                        <p className={'button'}>More filters</p>
                    </div>
                    <div className={'flex flex-col'}
                         onClick={()=> router.push({
                             pathname: 'detail',
                             query: {id:'123'}
                         })}
                    >
                        {searchResults?.map((item, index)=>(
                            <InfoCard
                                key={index}
                                img={item.img}
                                location={item.location}
                                title={item.title}
                                description={item.description}
                                star={item.star}
                                price={item.price}
                                total={item.total}
                            />
                        ))}
                    </div>
                </section>
                <section className={'hidden lg:inline-flex lg:min-w-[600px]'}>
                    <Map searchResults={searchResults}/>
                </section>
            </main>
            <Footer />
        </div>
    )
}
export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz")
        .then(res => res.json());
    return{
        props:{
            searchResults: searchResults
        }
    }
}

export default Search;
