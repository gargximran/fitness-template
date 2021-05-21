import React from "react";
import {BlogCard} from "../../Components";
import blogImage from "../../assets/images/blog/blog.jpg";

import SubTopHeroSection from './SubTopHeroSection'

import './BlogStyle.css'


const Blog = () => {
    return (
        <>
            <SubTopHeroSection />
            <div className="blogs-container">
                <BlogCard
                    className="w-full"
                    date={"12/02/2021"}
                    image={blogImage}
                    text={
                        "This text for blog detail and I lovbsldjfs lfsdl  lsdfj lsdfjkls djlsdkfj lsdfj lsdfj lsdk jmlsd jlsdjlsd jlsdf jlsdfj lsdjlsdfj lsdkjflsd"
                    }
                    author={"Imran"}
                    link={"/"}
                    title={"Title of blog"}
                />

                <BlogCard
                    className="w-full"
                    date={"12/02/2021"}
                    image={blogImage}
                    text={
                        "This text for blog detail and I lovbsldjfs lfsdl  lsdfj lsdfjkls djlsdkfj lsdfj lsdfj lsdk jmlsd jlsdjlsd jlsdf jlsdfj lsdjlsdfj lsdkjflsd"
                    }
                    author={"Imran"}
                    link={"/"}
                    title={"Title of blog"}
                />

                <BlogCard
                    className="w-full"
                    date={"12/02/2021"}
                    image={blogImage}
                    text={
                        "This text for blog detail and I lovbsldjfs lfsdl  lsdfj lsdfjkls djlsdkfj lsdfj lsdfj lsdk jmlsd jlsdjlsd jlsdf jlsdfj lsdjlsdfj lsdkjflsd"
                    }
                    author={"Imran"}
                    link={"/"}
                    title={"Title of blog"}
                />

                <BlogCard
                    className="w-full"
                    date={"12/02/2021"}
                    image={blogImage}
                    text={
                        "This text for blog detail and I lovbsldjfs lfsdl  lsdfj lsdfjkls djlsdkfj lsdfj lsdfj lsdk jmlsd jlsdjlsd jlsdf jlsdfj lsdjlsdfj lsdkjflsd"
                    }
                    author={"Imran"}
                    link={"/"}
                    title={"Title of blog"}
                />

                <BlogCard
                    className="w-full"
                    date={"12/02/2021"}
                    image={blogImage}
                    text={
                        "This text for blog detail and I lovbsldjfs lfsdl  lsdfj lsdfjkls djlsdkfj lsdfj lsdfj lsdk jmlsd jlsdjlsd jlsdf jlsdfj lsdjlsdfj lsdkjflsd"
                    }
                    author={"Imran"}
                    link={"/"}
                    title={"Title of blog"}
                />

                <BlogCard
                    className="w-full"
                    date={"12/02/2021"}
                    image={blogImage}
                    text={
                        "This text for blog detail and I lovbsldjfs lfsdl  lsdfj lsdfjkls djlsdkfj lsdfj lsdfj lsdk jmlsd jlsdjlsd jlsdf jlsdfj lsdjlsdfj lsdkjflsd"
                    }
                    author={"Imran"}
                    link={"/"}
                    title={"Title of blog"}
                />

                <BlogCard
                    className="w-full"
                    date={"12/02/2021"}
                    image={blogImage}
                    text={
                        "This text for blog detail and I lovbsldjfs lfsdl  lsdfj lsdfjkls djlsdkfj lsdfj lsdfj lsdk jmlsd jlsdjlsd jlsdf jlsdfj lsdjlsdfj lsdkjflsd"
                    }
                    author={"Imran"}
                    link={"/"}
                    title={"Title of blog"}
                />

                <BlogCard
                    className="w-full"
                    date={"12/02/2021"}
                    image={blogImage}
                    text={
                        "This text for blog detail and I lovbsldjfs lfsdl  lsdfj lsdfjkls djlsdkfj lsdfj lsdfj lsdk jmlsd jlsdjlsd jlsdf jlsdfj lsdjlsdfj lsdkjflsd"
                    }
                    author={"Imran"}
                    link={"/"}
                    title={"Title of blog"}
                />
            </div>
        </>
    );
};

export default Blog;
