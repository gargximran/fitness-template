import './style.css'

const TopHeroSection = ({heroImage, title}) => {
    return (
        <div className="w-full overlayMaker relative">
            {/* eslint-disable-next-line */}
            <img src={heroImage} className={'w-full'}/>
            <h2 className={'hero-title'}>{title}</h2>
        </div>
    )
}

export default TopHeroSection