import React from 'react'
import {
  Card,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Nike from './shoes/Nike'

const List_Shoes_Mans = () => {


  return (
    <main>
      <section className=' max-w-7xl mx-auto'>
        <h1 className=' text-4xl font-semibold text-gray-900 text-center'>Man's Shoes</h1>

        <Tabs defaultValue="nike" className="w-full mt-10 space-y-8 px-5 md:px-0">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="nike">Nike</TabsTrigger>
            <TabsTrigger value="adidas">Adidas</TabsTrigger>
            <TabsTrigger value="puma">Puma</TabsTrigger>
            <TabsTrigger value="vans">Vans</TabsTrigger>
          </TabsList>
          <TabsContent value="nike">
            <Card className=' border-0 shadow-none'>
              <Nike />
            </Card>
          </TabsContent>
          <TabsContent value="adidas">
            <Card>
              
            </Card>
          </TabsContent>
          <TabsContent value="puma">
            <Card>
              
            </Card>
          </TabsContent>
          <TabsContent value="vans">
            <Card>
              
            </Card>
          </TabsContent>
        </Tabs>
      </section>
      
    </main>
  )
}

export default List_Shoes_Mans