import Head from 'next/head'
import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'



export default function Home({exploreData, cardsData}) {
  
  return (
    <div className="">
      <Head>
        <title>Airbnb: Vacation Rentals, Cabins, Beach Houses, Unique Homes & experiences  </title>
        <link rel="icon" href="/bnb-logo.png" className='rounded-2xl' />
      </Head>
      

      {/* Header */}
      <Header/>

      {/* Banner */}
      <Banner/>

      <main className='max-w-full mx-auto px-16'>
        <section className='pt-10'>
          <h2 className='text-4xl font-semibold pb-5'>
            Inspiration for your next trip
          </h2>

          {/* pull data from server - API endpoints - server side rendering */} 
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
           {exploreData?.map(({img, distance, location}) => (
            <SmallCard 
              key={img}
              img={img}
              distance={distance} 
              location={location}/>
           ))}
           </div>
        </section>
        <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
        <div className='flex space-x-3 2xl:grid 2xl:grid-cols-4 overflow-scroll scrollbar-hide '>
          {cardsData?.map(({img, title}) => (
            <MediumCard key={img} img={img} title={title}/>
          ))}
        </div >
        <div className='items-center '>
        <LargeCard 
          img='/large-card.png' 
          title='The Greatest Outdoors' 
          description='Wishlists curated by Airbnb.'
          buttonText='Get Inspired'
        />
        </div>

      </main>

      <Footer />
      
    </div>
  );
}


// error
export async function getStaticProps() {
  const exploreData = await fetch('https://jsonkeeper.com/b/YKVG').then((response) => response.json());

  const cardsData = await fetch('https://jsonkeeper.com/b/F0P0').then((response => response.json()));

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}