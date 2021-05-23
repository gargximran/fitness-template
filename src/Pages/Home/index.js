import SubOurClassCardSection from "./SubOurClassCardSection";
import SubHeroSectionSlider from "./SubHeroSectionSlider";
import SubHeroSectionOverlay from "./SubHeroSectionOverlay";
import SubPhysicalBenifitSection from "./SubPhysicalBenifitSection";
import SubBlogSection from "./SubBlogSection";
import SubScheduleSection from "./SubScheduleSection";
import SubPricingSection from "./SubPricingSection";
import SubServicesSection from "./SubServicesSection";

const HomePage = () => {
  return (
    <div>
      <div className={"relative overflow-hidden"}>
        <SubHeroSectionSlider />
        <SubHeroSectionOverlay />
      </div>

      <div className={"block md:hidden"}>
        <SubPhysicalBenifitSection />
      </div>

      <SubOurClassCardSection />

      <div className={"hidden md:block"}>
        <SubPhysicalBenifitSection />
      </div>
      <SubServicesSection />
      <SubPricingSection />
      <SubScheduleSection />
      <SubBlogSection />
    </div>
  );
};

export default HomePage;
