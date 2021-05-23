import React from 'react'
import {PhysicalBenifitCard} from '../../Components'
import { ReactComponent as DumbleLogo } from "../../assets/images/whyPeople/dumble.svg";
import { ReactComponent as FemaleLogo } from "../../assets/images/whyPeople/female.svg";
import { ReactComponent as MuscleLogo } from "../../assets/images/whyPeople/muscle.svg";

const cardContent = [
  {
    Logo: DumbleLogo,
    title: "Fat Loss",
    text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum esse ipsa magnam veniam? Quaerat, quae? ipsa magnam veniam? Quaerat, quae?",
  },
  {
    Logo: FemaleLogo,
    title: "Female Fat Loss",
    text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum esse ipsa magnam veniam? Quaerat, quae? ipsa magnam veniam? Quaerat, quae?",
  },
  {
    Logo: MuscleLogo,
    title: "Muscle Building",
    text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum esse ipsa magnam veniam? Quaerat, quae? ipsa magnam veniam? Quaerat, quae?",
  },
];

const SubPhysicalBenifitSection = () => (
    <div className="grid md:grid-cols-3 gap-7 bg-chocolate p-10">
        {
            cardContent.map((value, index) => (
                <div key={index} className={'px-7'}>
                    <PhysicalBenifitCard {...value} />
                </div>
            ))
        }
    </div>
)


export default SubPhysicalBenifitSection;
