import Header from "../components/Header";
import Footer from "../components/Footer";
import Map from "../components/Map";

function MapView({searchResults}) {
    return(
        <div className={''}>
            <Header/>
            <main>
                <h2 className={'text-4xl font-semibold my-4 mx-2'}>Discover our locations on the map</h2>
                <div className='map px-2 w-full h-full'>
                    <Map searchResults={searchResults}/>
                </div>
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
export default MapView;
