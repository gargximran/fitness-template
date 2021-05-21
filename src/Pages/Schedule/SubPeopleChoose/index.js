import React from "react";
import PeopleChooseCard from "./PeopleChooseCard";
import {cardContent} from "./cardContent";

function SubPeopleChoose() {
    return (
        <div className="p-10 lg:pr-20 lg:pl-20 bg-secondary">
            {/* title section */}

            <h3 className="subPeopleChoose-title">Why People choose us</h3>

            <p className="subPeopleChoose-subtitle">
                Our sport exports and latest sports equipment are the winning
                combination
            </p>

            {/* our class card  */}


            {/* cards section */}

            <div className="subPeopleChoose-cards-container">
                {cardContent.map((value, index) => {
                    return (
                        <div key={index}>
                            <PeopleChooseCard {...value} />
                        </div>

                    );
                })}
            </div>
        </div>
    );
}

export default SubPeopleChoose;
