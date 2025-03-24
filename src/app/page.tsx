
import CompanyInfo from "@/components/CompanyInfo";
import HeroSection from "@/components/HeroSection";
import LeaderShip from "@/components/LeaderShip";
import StatsSection from "@/components/StatsSection";
import TeamCarousel from "@/components/TeamCarousel";
import Location from "@/components/Location";
import Projects from "@/components/Projects";
import InquirySection from "@/components/InquirySection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    
    <div>
     
   <HeroSection></HeroSection>
   <CompanyInfo></CompanyInfo>
   <StatsSection />
   <LeaderShip />
   <TeamCarousel />
   <Location></Location>
   <Projects></Projects>
   <InquirySection />
   <Footer />
    </div>
  );
}
