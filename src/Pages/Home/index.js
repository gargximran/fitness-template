import SubOurClassCardSection from "./SubOurClassCardSection";
import SubHeroSectionSlider from "./SubHeroSectionSlider";
import SubHeroSectionOverlay from "./SubHeroSectionOverlay";
import SubPhysicalBenifitSection from "./SubPhysicalBenifitSection"
import SubBlogSection from "./SubBlogSection";
import SubScheduleSection from "./SubScheduleSection";

const HomePage = () => {
    return (
        <div>
            <div className={'relative overflow-hidden'}>
                <SubHeroSectionSlider />
                <SubHeroSectionOverlay />

            </div>

            <div className={'block md:hidden'}>
                <SubPhysicalBenifitSection/>
            </div>

            <SubOurClassCardSection />

            <div className={'hidden md:block'}>
                <SubPhysicalBenifitSection/>
            </div>
            <SubScheduleSection />
            <SubBlogSection />

        </div>
    )
}


export default HomePage