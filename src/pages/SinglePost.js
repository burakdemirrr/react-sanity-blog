import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import client from '../client'
import BlockContent from "@sanity/block-content-to-react"
const SinglePost = () => {
  const [singlePost,setSinglePost]=useState([]);

  const [isLoading,setIsLoading]=useState(true);

  const {slug} =useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setSinglePost(data[0]))
    setIsLoading(false)
  }, [slug])
 

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) :(
        <section className=' flex p-24 flex-col items-center justify-center  h-screen'>
          <h1>{singlePost?.title}</h1>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img src={singlePost.mainImage.asset.url} className="w-64" alt="" />
          )}

          <p>By Burak Demir</p>
          <div className="block__content">
            <BlockContent
              blocks={singlePost.body}
              projectId="2hp9gld0"
              dataset="production"
            />
          </div>


          <button>
            <Link to="/blog"  className='py-2 my-8 px-6 rounded shadow text-white bg-black  hover:bg-transparent border-2 border-black transtion-all duration-500 hover:text-black font-bold'>Read more articles</Link>
          </button>

        </section>
        )
      }
    </>
    )
}

export default SinglePost