import React, { Suspense, useState } from 'react';
import { FaListUl, FaThLarge, FaSearch } from 'react-icons/fa';
import { allPostPromise } from '../Data/allPostApi';
import AllPostCard from '../Components/AllPostCard';
import Loading from '../Components/Loading';
import AllPostsTable from '../Components/AllPostsTable';
import { Helmet } from 'react-helmet-async';

const AllPost = () => {
    const [category, setCategory] = useState("")
 
    const [view, setView] = useState('grid');
    const [searchText, setSearchText] = useState("");
    
    console.log(category,searchText)


    return (
        <div className='max-w-7xl mx-auto px-3'>
             <Helmet>
                            <title>Unity-Force || All-Posts</title>
                        </Helmet>
            <div className='mt-4'>
                <h1 className='text-4xl text-center font-bold '>All Opportunities</h1>
                <p  className='text-gray-600 text-center mt-2'>Find the perfect way to contribute to your community.</p>
            </div>


        
   
                
                {/* new filter */}
                <div className="flex flex-wrap items-center border border-gray-300/40 dark:border-gray-600/40 gap-2 p-4 bg-base-200 shadow-sm rounded-lg mt-7 justify-center md:justify-start">
                    {/* Search Box */}
                    <div className="flex items-center w-full md:w-auto flex-grow">
                        <label className="input input-bordered flex items-center gap-2 w-full">
                            <FaSearch className="text-gray-400" />
                            <input
                                type="text"
                                className="grow"
                                placeholder="Search by title..."
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </label>
                    </div>

                    {/* Dropdown */}
                    <select
                        name="category"
                        className="select select-bordered w-full md:w-36"

                        onChange={(e) => setCategory(e.target.value)} value={category}

                        required
                    >
                        <option value="">Select a category</option>
                        <option value="">All</option>
                        <option>Education</option>
                        <option>Environment</option>
                        <option>Healthcare</option>
                        <option>Community</option>
                    </select>

                    {/* View Toggle Buttons */}
                    <div className="flex items-center bg-base-200 rounded-lg">
                        <button
                            onClick={() => setView('grid')}
                            className={`p-2 rounded-l-lg ${view === 'grid' ? 'bg-primary text-white' : 'text-gray-500'}`}
                        >
                            <FaThLarge />
                        </button>
                        <button
                            onClick={() => setView('list')}
                            className={`p-2 rounded-r-lg ${view === 'list' ? 'bg-primary text-white' : 'text-gray-500'}`}
                        >
                            <FaListUl />
                        </button>
                    </div>
                </div>

                {/*new filter end  */}
          






            {/* all card */}
            <div className={`mt-10 ${view==="list"?"hidden":"block"}`}>
                <Suspense fallback={<Loading></Loading>}>
                    <AllPostCard allPostPromise={allPostPromise(category,searchText)}></AllPostCard>
                </Suspense>


            </div>
           
           {/* post table */}
            <div className={`mt-10 ${view==="grid"?"hidden":"block"}`}>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>No.</th>
        <th>Opportunity</th>
        <th>Deadline</th>
        <th>Volunteers Needed</th>
        <th>Category</th>
        <th>Details</th>
      </tr>
    </thead>

    <Suspense  fallback={
                  <tbody>
                    <tr>
                      <td colSpan="6" className="text-center py-10">
                        <Loading />
                      </td>
                    </tr>
                  </tbody>
                }>
    <AllPostsTable allPostPromise={allPostPromise(category,searchText)}></AllPostsTable>
    </Suspense>
    
  </table>
</div>
              
            </div>
            {/* post table end*/}

        </div>
    );
};

export default AllPost;