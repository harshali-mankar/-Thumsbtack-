import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import InfoSection from "../components/InfoSection";
import Products from "../components/Products";
import { raceInfo } from "../data/raceInfo";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* Race Infomation component mapped */}
      {raceInfo.map((item, index) => (
        <InfoSection
          key={index}
          title={item.title}
          highlight={item.highlight}
          image={item.image}
          reverse={item.reverse}
        />
      ))}
      <Products />
    </>
  );
}
