import Accordion from "@/components/Accordion";
import NavBar from "@/components/common/NavBar";
import Comparisons from "@/components/Comparisons";
import Footer from "@/components/Footer";
import FullScreenSwiper from "@/components/FullScreenSwiper";
import Hero from "@/components/Hero";
import LineSwiper from "@/components/LineSwiper";
import OneSideOverflow from "@/components/OneSideOverflow";
import OppositeSideSwiper from "@/components/OppositeSideSwiper";
import OverflowSwipe from "@/components/OverflowSwipe";
import RoundCircle from "@/components/RoundCircle";
import Switch from "@/components/Switch";
import TezWealth from "@/components/TezWealth";
import Trust from "@/components/Trust";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Trust />
      <Comparisons />
      <Accordion />
      <RoundCircle />
      <TezWealth/>
      <Switch />
      <FullScreenSwiper/>
     <OverflowSwipe />
      <OppositeSideSwiper />
      <OneSideOverflow />
      <LineSwiper/>
      <Footer/>
   </div>
  );
}
