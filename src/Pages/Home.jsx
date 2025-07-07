import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';
import PostsCard from '../Components/PostsCard';
import { FaArrowRight } from 'react-icons/fa';
import WhyVolunteer from '../Components/WhyVolunteer';
import VolunteerTestimonials from '../Components/VolunteerTestimonials';


const Home = () => {
    const postsAllData=useLoaderData()
    const postsData=postsAllData.slice(0, 6)
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-7xl  px-3  mx-auto mt-40'>
                <h1 className='text-4xl text-base-300 text-center font-bold'>Volunteer Needs Now</h1>
                <p className='text-lg font-bold text-gray-500 text-center '>These opportunities are available right now. Find one that inspires you!</p>
                <div className='grid mt-12 grid-cols-1 gap-5 md:grid-cols-3'>
                    {postsData.map(post=><PostsCard post={post}></PostsCard>)}
                </div>

              <div className='flex items-center justify-center mt-5'>
                  <button className='btn btn-outline  hover:bg-secondary  shadow-2xl hover:text-white'>See All Opportunities <FaArrowRight /> </button>
              </div>
            </div>


            <WhyVolunteer></WhyVolunteer>


            <VolunteerTestimonials></VolunteerTestimonials>
        </div>
    );
};

export default Home;