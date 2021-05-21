import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

import "./style.css";

const BlogCard = ({className, image, date, author, title, text, link}) => {
    return (
        <>
            <div className={className}>
                {/* image of the card */}
                <div className="w-full relative">
                    {/*eslint-disable-next-line*/}
                    <img src={image} alt="no image found" className="w-full"/>
                    <span className={'blog-card-date-badge'}>{date}</span>
                </div>

        {/*  content section*/}
        <div className="w-full mt-1">
          <h2 className="blog-card-author">
            by <span className={"text-primary"}>{author}</span>
          </h2>
          <h2 className="blog-card-title">{title}</h2>
          <p className={"blog-card-text"}>{text}</p>

          <div className={"mt-5"}>
            <Link className={"blog-card-link"} to={link}>
              know more
              <span className={"flex ml-2 items-center"}>
                <AiOutlineArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
