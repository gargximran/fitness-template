import {OurClassCard} from "../../Components";
import ourClassImage1 from "../../assets/images/ourClass/ourClassImage1.webp";
import ourClassImage2 from "../../assets/images/ourClass/ourClassImage2.webp";
import ourClassImage3 from "../../assets/images/ourClass/ourClassImage3.webp";




const SubOurClassCardSection = () => {
    const data = [
        {
            background: ourClassImage1,
            title: 'Group Classes',
            text: 'The Sopranos manages to address the biases and benefits of therapy',
            to: '/'
        },
        {
            background: ourClassImage2,
            title: 'Sports Nutrition',
            text: 'Strep throat is very common during the flu seasons and it can be preceded',
            to: '/'
        },
        {
            background: ourClassImage3,
            title: 'Personal training',
            text: 'A Human being\'s right to life implies his right to have the free and unrestricted',
            to: '/'
        },
    ]




    return (

        <section >
            <div className={'md:flex'}>
                {
                    data.map((d, index) => (
                        <div key={index} className="w-full md:w-1/3">
                            <OurClassCard  {...d}  />
                        </div>
                    ))
                }
            </div>


        </section>
    )
}


export default SubOurClassCardSection