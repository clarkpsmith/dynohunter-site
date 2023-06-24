"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { createClient } from 'contentful'
import Socials from '@/components/Socials'
import OnTour from '@/components/OnTour'
import Gallery from '@/components/Gallery'
import NotableLabelsPerformances from '@/components/NotableLabelsPerformances'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Epk({tourDates, showPhotos}: {tourDates: any, showPhotos: any}) {
  

  return (
    <main
      className={`${inter.className} flex justify-center`}
    >
      <div className="w-full lg:w-[1024px]">
      <div className="flex justify-center align-end">
      <div className="w-full h-[24vw] lg:w-[1024px] lg:h-[244px] bg-cover bg-no-repeat bg-[url('/images/dynohunter-image-11.jpg')]">
      </div>
      </div>
      <div className="flex p-10 justify-around items-end">
       <div className="mb-2">
       <div className="cursor-pointer">
        <Image width={350} height={350} alt="dynohunter logo"  src="/images/dynohunter-logo.png"/>
        </div>  
       </div>
        </div>
        <Socials/>
        <div>
          
        </div>
        <div className="p-5 pb-10">
        DYNOHUNTER is a tribal house and techno project created by DJ, Producer, Saxophonist and Impressions Records Label Boss Clark Smith. Smith layers tribal beats, ethereal textures, and searing synths over deep groovy basslines, using his Saxophone as the protagonist in the eclectic and exotic stories he shares. He’s been a mainstay in the vibrant Colorado music scene for the past decade and has toured the country playing clubs venues and music festivals including Electric Forest, Suwanee Hulaween, Fillmore Auditorium, Fox Theater, The Church & Club Vinyl. He’s had releases on international progressive house labels including Joof, Mistique, Clinique, and Deepersense along with stateside labels including Re:Sound, JourneyDeep, and Hood Politics. DYNOHUNTER has set himself apart by creating timeless music that speaks to true lovers of dance music. Always paying respect to the artists that have inspired him and paved the way, yet always striving to make music that is contemporary and progressive, a genuine expression of his own unique human experience and a reflection of the times.
        </div>
        <div className='px-5'>
        <iframe className="rounded-none" src="https://open.spotify.com/embed/artist/2gqNRmMqg0cqNPQ6mRcJEi?utm_source=generator&theme=0" width="100%" height="352" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

        </div>
        <NotableLabelsPerformances/>
<OnTour dates={tourDates.items} />
<div className="flex justify-center">
<iframe width="840" height="473" src="https://www.youtube.com/embed/U68MMrw70dk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
</div>

<Gallery epk photos={showPhotos.items}/>

<div className="w-full">
<Footer/>
</div>
        </div>
    </main>
  )
}


export async function getServerSideProps(context: any) {

  const client = createClient({
    space: String(process.env.CONTENTFUL_SPACE_ID),
    accessToken: String(process.env.CONTENTFUL_ACCESS_KEY),
  })

  const tourDates = await client.getEntries({
    content_type: 'tourDates',
    //@ts-ignore
    order: 'fields.date',
  })

  console.log({tourDates})
  const showPhotos = await client.getEntries({ content_type: 'showPhotos' })
  return { props: {
    showPhotos,
    tourDates,
  }
  
  }
}
