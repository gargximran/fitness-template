import React from 'react'
import "./SubPeopleChooseStyle.css"


function PeopleChooseCard({className,Image,title,content}) {
    return (
      <div className={className}>
        <div className="text-center">
          <Image className="w-12 h-12 lg:w-14 mx-auto fill-current text-primary"/>
          <h3 className="peopleChooseCard-title ">{title}</h3>
          <p className="peopleChooseCard-content">{content}</p>
        </div>
      </div>
    );
}

export default PeopleChooseCard
