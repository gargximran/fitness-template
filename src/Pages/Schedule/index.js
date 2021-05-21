import React from 'react'
import SubPeopleChoose from './SubPeopleChoose'
import SubOurClassCardSection from "./SubOurClassCardSection"
import SubScheduleTableSection from "./SubScheduleTableSection";
import SubTopHeroSection from "./SubTopHeroSection";

function Schedule() {
    return (
        <div>
            <SubTopHeroSection />
            <SubScheduleTableSection />
            <SubOurClassCardSection/>
            <SubPeopleChoose/>
        </div>
    )
}

export default Schedule
