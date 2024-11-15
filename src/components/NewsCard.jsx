import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaRegBookmark, FaRegEye, FaShareAlt } from 'react-icons/fa';

const NewsCard = (props = {}) => {
    const { news } = props || {} ;
    console.log(news)
    return (
        <div className=' p-4 bg-white rounded-lg shadow-md mb-5'>
            <div className='flex items-center mb-4'>
                <img src={news.author.img} alt={news.author.name} className='w-10 h-10 rounded-full mr-3' />

            
            <div>
                <p className='font-semibold'>{news.author.name}</p>
                <p className='text-sm text-gray-600'> {news.author.published_date} </p>
            </div>
            <div className='ml-auto flex gap-2'>
                <FaRegBookmark></FaRegBookmark>
                <FaShareAlt className='text-gray-600'></FaShareAlt>
            </div>
            </div>
            <h2 className='text-xl font-semibold mb-2'> {news.title} </h2>
        
            <img src={news.thumbnail_url} alt="thumbnail"
             className='w-full h-56 object-cover rounded-lg mb-4' srcset="" />

             <p className='text-gray-700 text-sm mb-4'>
                {news.details.slice(0, 160)}...{" "}
             </p>
             <span className='text-primary'>Read More</span>

             <div className='flex items-center justify-between text-gray-600'>
                <div className='flex items-center mb-4'>
                    {[...Array(5)].map((_, i) => (
                        <AiFillStar key={i} className={`text-yellow-500 ${
                            i < Math.round(news.rating.number) ? "" : "opacity-50"
                        }`}></AiFillStar>
                    ))}
                        <span className='ml-2 font-semibold '> {news.rating.number} </span>
                </div>

                <div className='flex items-center'>
                    <FaRegEye className='mr-1'></FaRegEye>
                    <span>{news.total_view}</span>

                </div>

             </div>
          
        </div>
    );
};

export default NewsCard;