import './style.css'

const TopHeroSection = ({hero, title}) => {
    return (
        <div className="w-full overlayMaker relative">
            <img src={hero} className={'w-full'}/>
            <h2 className={'hero-title'}>{title}</h2>
        </div>
    )
}

export default TopHeroSection