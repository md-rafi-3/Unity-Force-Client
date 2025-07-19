import React from 'react';
import Banner from '../Components/Banner';
import { Link, useLoaderData } from 'react-router';
import PostsCard from '../Components/PostsCard';
import { FaArrowRight } from 'react-icons/fa';
import WhyVolunteer from '../Components/WhyVolunteer';
import VolunteerTestimonials from '../Components/VolunteerTestimonials';
import CountDown from '../Components/CountDown';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    const postsAllData=useLoaderData()
    const postsData=postsAllData.slice(0, 6)
    return (
        <div>
           <Helmet>
                          <title>Unity-Force || Home</title>
                      </Helmet>
            <Banner></Banner>
            <div data-aos="fade-up"
          data-aos-duration="800"
        data-aos-once="false"
        data-aos-delay={200} className='max-w-7xl  px-3  mx-auto mt-40'>
                <h1 className='text-4xl text-base-300 text-center font-bold'>Volunteer Needs Now</h1>
                <p className='text-lg  text-gray-500 text-center '>These opportunities are available right now. Find one that inspires you!</p>
                <div className='grid mt-12 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                    {postsData.map(post=><PostsCard post={post}></PostsCard>)}
                </div>

              <div className='flex items-center justify-center mt-5'>
                 <Link to="/allPosts"> <button className='btn btn-outline  hover:bg-secondary  shadow-2xl hover:text-white'>See All Opportunities <FaArrowRight /> </button></Link>
              </div>
            </div>


            <WhyVolunteer></WhyVolunteer>


            <VolunteerTestimonials></VolunteerTestimonials>

            <CountDown></CountDown>
        </div>
    );
};

export default Home;