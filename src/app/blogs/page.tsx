import BlogList from "@/components/blogs/blog-lists";


async function extractAllBlogs() {
    const res = await fetch(`https://raf-blog.vercel.app/api/blog-post/get-all-post`, {
      method: "GET",
      cache: "no-store",
    });
  
    const data = await res.json();
  
    if (data.success) return data.data;
  }

export default async function Blogs(){
    const blogPostsList = await extractAllBlogs();
    

    return(
        <div>
           <BlogList lists={blogPostsList}/>
        </div>
    )
}
