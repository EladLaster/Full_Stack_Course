import { useEffect, useState } from "react";
import "./Exercise2.css"

export function Exercise2(){
    const [posts,setPosts] = useState([]);
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(()=>{
        const fetchPosts = async ()=>{
            const response = await fetch("/mockData.json")
            const data = await response.json();
            setPosts(data.slice(0, 10));
        }
        fetchPosts();
    },[])

    useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600); 
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    return (
    <>
        <h3>Top Posts</h3>
        <div className={isMobile ? "posts_class_mobile" : "posts_class"}>
            {posts.map((post) => (
            <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            </div>
        ))}
        </div>
    </>
  );
}