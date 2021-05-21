import './style.css'

const TopHeroSection = ({hero, title}) => {
    return (
        <div className="w-full overlayMaker relative">
            {/* eslint-disable-next-line */}
            <img src={hero} alt={'No image!'} className={'w-full'}/>
            <h2 className={'hero-title'}>{title}</h2>
        </div>
    )
}

export default TopHeroSection