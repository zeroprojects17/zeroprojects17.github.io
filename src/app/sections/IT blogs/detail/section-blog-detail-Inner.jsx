import SectionBlogSingle from "./section-blog-single";
import SectionLatestBlogs from "./section-latest-blogs";
import SectionBlogComments from "./section-comments";

function SectionBlogDetailInner() {
    return (
        <>
            <SectionBlogSingle />
            <SectionLatestBlogs />
            <SectionBlogComments />
        </>
    )
}

export default SectionBlogDetailInner;