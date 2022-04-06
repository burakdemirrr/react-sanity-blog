import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import client from "../client"
const Blog = () => {
  const [posts,setPosts]=useState([]);

  useEffect(()=>{

    client.fetch(
      `*[_type== "post"]{
        title,
        slug,
        body,
        mainImage{
          asset ->{
            _id,
            url
          },
          alt
        }
      }`
    ).then((data =>setPosts(data))).catch(console.error)

  },[])
  
  return (
    <>
      <section className='px-5'>
        <h1 className='font-bold text-4xl mt-5 mb-5 tracking-widest text-center'>Blog Page</h1>
        <h2 className='text-3xl  mb-5 text-center'>You are viewing {posts.length} blog posts</h2>

          <div className='px-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {posts.map((post)=>(
              <article key={post.slug.current}>
                <img className='object-contain h-108 w-106' src={post.mainImage.asset.url} alt={post.title} />
                <h4>{post.title}</h4>
                <button className="mt-5 mb-10">
                  <Link to={`/blog/${post.slug.current}`} className='py-2 px-6 rounded shadow text-white bg-black  hover:bg-transparent border-2 border-black transtion-all duration-500 hover:text-black font-bold'
                  >Read full article</Link>
                </button>
              </article>
            ))}

          </div>
      </section>
    </>
  )
}

export default Blog