import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext
} from "@/components/ui/carousel"

const List_image_Slide = () => {

    const list_image = [
        {
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/21d38052-598b-44f6-a857-123c9f72b015/air-force-1-07-mens-shoes-jBrhbr.png'
        },
        {
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/air-force-1-07-womens-shoes-b19lqD.png'
        },
        {
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/00366317-b552-4167-96f5-824ce1a4ea74/air-force-1-07-lv8-mens-shoes-3Q0nlJ.png'
        },
        {
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d3671714-2255-4af3-8c79-c913567bbc79/air-force-1-07-lx-nbhd-mens-shoes-qnMX3r.png'
        },
        {
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c626a1ef-ebae-47b2-be6b-8706be6b95e5/air-force-1-low-evo-mens-shoes-mJW13X.png'
        },
        {
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0d9d86e4-11b5-43ae-8462-c7bd05096ec8/air-force-1-07-womens-shoes-PqdxJw.png'
        },
        {
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/60d2e87c-9eaa-46a0-b9aa-0f730291262b/air-force-1-07-mens-shoes-rXkGJX.png'
        },
        {
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6d118a1-7135-4537-81af-7622e24baead/air-force-1-shadow-womens-shoes-kTgn9J.png'
        }
    ]

    return (
        <main className=' w-full '>
            <section className=' max-w-7xl mx-auto'>
                <div>
                    <h1 className=' text-4xl font-semibold text-center'>
                        Popular Models
                    </h1>
                </div>
                <Carousel className="w-full max-w-full mt-8">
                    <CarouselContent className="-ml-1 gap-10">

                        {
                            list_image.map((item, index) => (
                                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/5 p-0">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-0">
                                            <img src={item.image} alt="" className=' h-full w-full object-cover' />
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-gray-900"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </CarouselNext>
                </Carousel>
            </section>

            <section className=' w-full h-[600px] mt-8 overflow-hidden'>
                <img className=' w-full h-full object-cover hover:scale-110 duration-200' src="https://cdn.shopify.com/s/files/1/1880/7069/files/1Nike-Spring-Colletiohn-banner_18771627-ba30-4e84-8043-e4b5ca242bb9.png?v=1708695092" alt="" />
            </section>
        </main>
    )
}

export default List_image_Slide