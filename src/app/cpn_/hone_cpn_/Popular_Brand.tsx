import React from 'react'

const Popular_Brand = () => {

    const brand_list = [
        {
            name: 'Nike',
            image: 'https://logowik.com/content/uploads/images/697_nike.jpg'
        },
        {
            name: 'Adidas',
            image: 'https://st2.depositphotos.com/3047529/47665/i/450/depositphotos_476656414-stock-photo-copenhagen-denmark-august-2020-adidas.jpg'
        },
        {
            name: 'Puma',
            image: 'https://staticg.sportskeeda.com/editor/2023/03/bda84-16779522739911-1920.jpg?w=640'
        },
        {
            name: 'Vans',
            image: 'https://cdn.dribbble.com/users/10325360/screenshots/17938820/vans1.jpg'
        }
    ]

    return (
        <main className=' w-full mx-auto'>
            <section className=' max-w-full mx-auto'>
                <div className=' flex flex-col space-y-3'>
                    <h1 className=' text-4xl font-semibold text-gray-900 text-center'> Popular Brand </h1>
                    <p className=' text-sm text-gray-500 md:w-[720px] text-center mx-auto'>
                        As per the shoes are concerned, there are many brands available in the market but with creative designs, popular styles and quality materials Nike tends to dominate the footwear sector as compared to other brands.
                    </p>
                </div>
                <div className="content grid md:grid-cols-2 gap-1 mt-8">
                    {
                        brand_list.map((brand, index) => (
                            <div key={index} className=' flex flex-col items-center justify-center space-y-2 h-[600px] pt-1 overflow-hidden'>
                                <img src={brand.image} alt="" className=' hover:scale-110 duration-200 h-full w-full object-cover' />
                            </div>
                        ))
                    }

                </div>
            </section>
        </main>
    )
}

export default Popular_Brand