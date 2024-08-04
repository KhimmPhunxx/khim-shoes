import Image from "next/image";
import Hero_Section_Home from "./cpn_/hone_cpn_/Hero_Section_Home";
import News_Arrival from "./cpn_/hone_cpn_/News_Arrival";
import Popular_Brand from "./cpn_/hone_cpn_/Popular_Brand";
import List_image_Slide from "./cpn_/hone_cpn_/List_image_Slide";

export default function Home() {
  return (
    <main className=" w-full pb-20">
      <section>
        <Hero_Section_Home />
      </section>
      <section className=" py-20">
        <News_Arrival />
      </section>
      <section className="pb-20">
        <Popular_Brand />
      </section>
      <section>
        <List_image_Slide />
      </section>
    </main>
  );
}
