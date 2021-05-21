import { Link } from 'react-router-dom'
import './style.css'

const OurClassCard = ({background, title, text, to}) => {
    const style = {
        background : `linear-gradient(0deg, rgba(62 52 52), rgba(38, 31, 31, 0.56)), url(${background}) center`,
        backgroundSize: 'cover'
    }

    return (
        <div className={'our-class-card-wrapper'} style={style}>
            <div className={'pb-12 lg:pb-20 lg:pt-20 pt-14'}>
                <h1 className={'our-class-card-title'}>{title}</h1>
                <p className={'our-class-card-text'}>{text}</p>
                <div className={'text-center'}>
                    <button className="btn-outline-primary btn-small md:btn-medium">
                        <Link to={to}>Read More</Link>
                    </button>
                </div>
            </div>
            <div className="our-class-card-focus"></div>
        </div>
    )
}

export default OurClassCard