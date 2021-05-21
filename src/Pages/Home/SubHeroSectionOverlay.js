import './SubHeroSectionOverlay.css'

const SubHeroSectionOverlay = () => {
    return (
        <div className={'sub-hero-overlay-wrapper'}>
             <div>
                 <h1 className={'sub-hero-overlay-title-thin'}>Join Us Now</h1>
                 <h1 className={'sub-hero-overlay-title-bold'}>Join Us Now</h1>
                 <div className={'text-center mt-3'}>
                     <button className={'btn-outline-primary btn-medium md:btn-large'}>Read More</button>
                 </div>
             </div>
        </div>
    )
}


export default SubHeroSectionOverlay