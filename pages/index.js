import Head from 'next/head'
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import {useRouter} from "next/router";

function Home({exploreData, cardsData}) {
    const router = useRouter();
    return (
        <div className={""}>
            <Head>
                <title>Hotel Management</title>
                <link rel={"icon"} href={"/favicon.ico"}/>
            </Head>
            <Header />
            {/*<Banner />*/}
            <main className={'max-w-7xl mx-auto px-8 sm:px-16'}>
                <div className={'fixed bottom-5 left-1/2 z-50 mx-auto items-center rounded-full py-2 px-4 bg-black cursor-pointer hover:scale-105'}
                     onClick={()=> router.push('/map')}
                >
                    <h1 className={'text-center text-white'}>Show Map</h1>
                </div>
                {/*<section className={"pt-6"}>
                    <h2 className={"text-4xl font-semibold pb-5"}>Explore Nearby</h2>
                    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}>
                        {exploreData?.map((item,index) => (
                            // eslint-disable-next-line react/jsx-key
                            <SmallCard
                                key = {index}
                                img={item.img}
                                distance={item.distance}
                                location={item.location}  />
                        ))}
                    </div>
                </section>*/}
                <section>
                    <h2 className={'text-4xl mx-auto font-semibold py-8'}>Discover our locations</h2>
                    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}>
                        {exploreData?.map((item, index) =>(
                            <MediumCard
                                key = {index}
                                img={item.img}
                                distance={item.distance}
                                location={item.location}
                            />
                        ))}
                    </div>
                </section>
                <LargeCard
                    img={'https://links.papareact.com/4cj'}
                    title={"The Greatest Outdoors"}
                    description={"Wishlists curated by Techdev."}
                    buttonText={"Get Inspired"}
                />
            </main>
            <Footer />
        </div>
    )
}
export async function getStaticProps(){
    const exploreData = await fetch('https://links.papareact.com/pyp')
        .then((res) => res.json());
    const cardsData = await fetch('http://links.papareact.com/zp1')
        .then(res => res.json())
    return{
        props:{
            exploreData,
            cardsData
        }
    }
}
export default Home;
