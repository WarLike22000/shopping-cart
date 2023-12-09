"use client";

import Image from "next/image";

import { urlFor } from "../lib/sanity";
import { useState } from "react";

interface ImageGalleryProps {
    images: any;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
    images
}) => {

    const [bigImage, setBigImage] = useState(images[0]);
    
    const clickImage = (image: any) => {
        setBigImage(image);
    };
    
  return (
    <div className="grid gap-4 lg:grid-cols-5">
        <div className="order-last flex gap-4 lg:order-none lg:flex-col">
            {images?.map((image: any, index: any) => (
                <div
                    key={index}
                    className="overflow-hidden h-fit rounded-lg bg-gray-100"
                >
                    <Image
                        src={urlFor(image).url()}
                        alt="photo"
                        width={200}
                        height={200}
                        className={`object-cover object-center cursor-pointer
                            ${bigImage == image && "border-2 p-1 transition-all rounded-lg border-primary"}
                        `}
                        onClick={() => clickImage(image)}
                    />
                </div>
            ))}
        </div>

        <div className="bg-gray-100 lg:col-span-4 overflow-hidden h-fit w-fit relative rounded-lg">
            <Image
                src={urlFor(bigImage).url()}
                alt="Photo"
                width={500}
                height={500}
                className="object-cover object-center"
            />
        </div>
    </div>
  )
}

export default ImageGallery
