import AboutUs from "@/components/about-us/about-us";
import ContactUs from "@/components/contact-us/contact-us";
import { HeroSection } from "@/components/hero-section/hero-section";
import { Navbar } from "@/components/navbar/navbar";
import Service from "@/components/pg-service-section/service";
import RoomSection from "@/components/room-section/room-section";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="Home">
        <HeroSection />
      </div>
      <RoomSection />
      <Service />
      <AboutUs />
      <ContactUs />
    </div>
  );
}
