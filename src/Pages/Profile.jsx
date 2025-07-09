import React, { Suspense, useContext } from 'react';
import UserProfile from '../Components/UserProfile';
import MyPost from '../Components/MyPost';
import { AuthContext } from '../Context/AuthConrext';
import { myPostsPromise } from '../Data/myPosts';
import Loading from '../Components/Loading';
// import { myPostsPromise } from '../Data/myPosts';

const Profile = () => {
    const {user}=useContext(AuthContext)
    console.log(user?.email)

    return (
        <div className='max-w-7xl mx-auto'>
            <UserProfile></UserProfile>

            {/* tab */}

      <div className="tabs tabs-lift">
  <input type="radio" name="my_tabs_3" className="tab" aria-label="Manage my posts" />
  <div className="tab-content bg-base-100 border border-gray-300/40 dark:border-gray-600/40 p-6">
   {/* table start */}
   <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Opportunity</th>
        
        <th>Deadline</th>
        <th>Status</th>
        <th className='text-center'>Progress</th>
        <th className='text-center'>Actions</th>
      </tr>
    </thead>
     <Suspense fallback={<Loading></Loading>}>
        <MyPost myPostsPromise={myPostsPromise(user?.email)}></MyPost>
    </Suspense>
   
    {/* foot */}
   
  </table>
</div>
{/* table end */}
  </div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 2" defaultChecked />
  <div className="tab-content bg-base-100 border border-gray-300/40 dark:border-gray-600/40 p-6">tab 2 contant</div>

  
</div>
            {/* tab end */}
            
        </div>
    );
};

export default Profile;