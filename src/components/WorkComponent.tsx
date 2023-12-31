/* eslint-disable @next/next/no-img-element */
"use client"
import {useState} from "react"
import Image from "next/image"
import { downloadImage } from "@/utilities/functions"

const WorkComponent = ({ imageUrl, epk }: { imageUrl: string, epk: boolean }) => {
  const [showDownloadIcon, setShowDownloadIcon] = useState<boolean>(false)

// async function downloadImage(imageUrl: string) {


// const urlArray = imageUrl.split("/")
// const imageName = urlArray[urlArray.length - 1]
// const image = await fetch(imageUrl)
// const imageBlog = await image.blob()
// const imageURL = URL.createObjectURL(imageBlog)

// const link = document.createElement('a')
// link.href = imageURL
// link.download = imageName
// document.body.appendChild(link)
// link.click()
// document.body.removeChild(link)

//   }

  return (
    <div onMouseEnter={() => setShowDownloadIcon(true)}
    onMouseLeave={() => setShowDownloadIcon(false)}
    className="w-full md:w-[50%] relative">
      {showDownloadIcon && epk &&
        <div onClick={() => downloadImage(`https:${imageUrl}`)} className='absolute right-[10px] top-[10px] cursor-pointer transition duration-700 ease-in-out'>
          <div className="p-2">
          <Image alt="download image" width={20} height={20} src="/images/download-icon.svg"/>
          </div>
        </div>
        // </a>
        }
     {imageUrl && <img alt="image" src={`https:${imageUrl}`} />}
    </div>
  )
}

export default WorkComponent
