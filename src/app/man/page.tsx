import React from 'react'
import Hero_Section_Man from './components/Hero_Section_Man'
import List_Shoes_Mans from './components/List_Shoes_Mans'

const page = () => {
  return (
    <main className=' w-full pb-20'>
        <section>
            <Hero_Section_Man />
        </section>
        <section className=' pt-20'>
            <List_Shoes_Mans />
        </section>
    </main>
  )
}

export default page