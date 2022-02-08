import Head from 'next/head'
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import Image from "next/image";


function Details ({exploreData, cardsData,searchResults}) {
  return (
      <div className={""}>
          <Head>
              <title>Hotel Management</title>
              <link rel={"icon"} href={"/favicon.ico"}/>
          </Head>
          <Header />

          <main>
              <div>
                    <h2 className={"text-4xl font-semibold pb-5 ml-6 mt-5"}>
                        Stay Inn Hotel
                    </h2>
              </div>



        <section className={"relative py-16 cursor-pointer "}>
            <div className={'relative h-96 min-w-[300px] mx-10'}>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4ozZ1iImwQOiDICPfikneDVHxwHjBevIwB4Nd-_YEr-3_HhlTZENWUF-xeh0aayYVxg&usqp=CAU"}
                       layout={'fill'}
                       objectFit={'cover'}
                       className={'rounded-3xl'}
                />

            </div>
            </section>
            <div>
                    <h2 className={"text-2xl font-semibold pb-5 ml-12 mt-5"}>
                        Entire unit hosted by Mark Smith
                    </h2>
                    <h3 className={"text-lg font-normal pb-2 ml-12 mt-1"}>
                        6 Guests - 2 Bedrooms - 2 Beds - 2 Baths
                    </h3>
                    <h3 className={"text-lg font-normal pb-2 ml-12 mt-1"}>
                        Price: $ 12
                    </h3>

              </div> <hr/>

              <div>
              <h2 className={"text-3xl font-semibold pb-5 ml-12 mt-5"}>
                        About this space
                    </h2>
                    <h3 className={"text-2xl font-medium pb-2 ml-12 mt-1"}>The space </h3>
                    <p className={"text-lg font-normal pb-2 ml-12 mt-1"}>
                    This apartment located on Palm Jumeirah in Tiara complex.
                    TIARA RESIDENCES Located in a private area on the top right hand side of the trunk of the exclusive Palm Jumeirah, Tiara Residence offers pristine beachfront living with fabulous views of the Burj Al Arab, Burj Khalifa and the Dubai skyline.
                    All guests has access to five-star leisure and beach facilities, including a large infinity pool, a high tech gym, plus great restaurants. Lush tropical gardens frame the buildings, adding a touch of mystery.
                    </p>

                    <h3 className={"text-2xl font-medium pb-2 ml-12 mt-1"}>Guest access </h3>
                    <p className={"text-lg font-normal pb-2 ml-12 mt-1"}>
                    Master bathroom with king size bed and big bathroom <br/>
                    Second bedroom with 2 single beds and private bathroom <br/>
                    Living room with sofa <br/>
                    Guest toilet <br/>
                    Fully equipment kitchen ( fridge, washing machine, oven, microwave, coffee machine Nespresso, toaster etc)
                    </p>
              </div> <hr/>
              <div>
              <h2 className={"text-3xl font-semibold pb-5 ml-12 mt-5"}>
                        What this place offer
                    </h2>

                    <p className={"text-lg font-normal pb-2 ml-12 mt-1"}>
                    🚔 Free parking on premises <br/>
                    🍽️ Kitchen with all the appliances you need <br/>
                    🏠 Fully furnished house <br/>
                    🐱 Pets allowed

                    </p>

             </div>
             <br/>



            <Footer />
          </main>

        </div>



  )
  }

  export default Details;
