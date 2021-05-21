import blogImage from "../../assets/images/blog/blog.jpg";
import {BlogCard} from "../../Components";

const SubBlogSection = () => {
    return (
        <div className={'bg-secondary pt-4'}>
            <h2 className={'font-bold uppercase text-center text-white py-5 text-sub-head-2 md:text-head-6'}>Latest Blog</h2>

            <div className={' grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 md:pr-20 md:pl-20'}>
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
        </div>

    )
}

export default SubBlogSection