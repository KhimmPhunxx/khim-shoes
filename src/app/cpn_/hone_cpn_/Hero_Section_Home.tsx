'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"



const Hero_Section_Home = () => {

    const plugin = React.useRef(
        Autoplay({ delay: 1300, stopOnInteraction: true })
    )

    const list = [
        {
            image : 'https://i.pinimg.com/originals/fa/45/96/fa4596ad9a9d39901eeb455ed4f74e44.jpg'
        },
        {
            image : 'https://atmos-kl.com/pub/media/wysiwyg/JORDAN-BRAND-BANNER-01.jpg'
        },
        {
            image : 'https://cdn.denimandcloth.com.au/content/uploads/2014/11/18121834/adidas-banner.jpg'
        },
        {
            image: 'https://www.side-step.co.za/media/wysiwyg/PUMA-Brand-page-908x372px-2.jpg'
        }
    ]

    return (
        <main className=' w-full h-[640px]'>
            <section className=' w-full h-full'>
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full max-w-full"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent className=' h-[640px] '>
                        {
                            list.map((item, index) => (
                                <CarouselItem key={index} className=' h-[640px]'>
                                    <Card className=' h-[640px]'>
                                        <CardContent className=' h-full p-0'>
                                            <img src={item.image} alt="" className=' h-full w-full object-cover' />
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))
                        }
                        
                    </CarouselContent>
                </Carousel>

            </section>
        </main>
    )
}

export default Hero_Section_Home