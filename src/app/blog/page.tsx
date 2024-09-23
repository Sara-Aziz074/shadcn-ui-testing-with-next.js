import Link from "next/link";
import Image from "next/image";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card";
  


const getBlogs = async () => {

    const res = await fetch("https://api.slingacademy.com/v1/sample-data/blog-posts"
    );

    if (!res.ok){
        throw new Error("Could not retrive blog posts")
    }

    return await res.json();
};


 async function Blog (){
    const blogs= await getBlogs ()
    return (
        <div className="p-10  ">
       {blogs.blogs.length>0 ?
        <div className="flex gap-5"> 
        
        {blogs.blogs.map((post:any)=>(
            <Link href={`${post.id}`} key={post.id} className="bg-blue-400">

<div className="border p-1" >

<div className="text-xl font-bold">
    {/* <Image src={`${}`}></Image> */}
    {post.title} </div>
     <p>{post.description}</p>

</div>
            </Link>
        ))}
        
         </div> : <div>Blogs not found </div>}
        </div>
    );
};

export default Blog;