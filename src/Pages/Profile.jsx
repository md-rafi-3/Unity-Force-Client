import React, { Suspense, useContext } from 'react';
import UserProfile from '../Components/UserProfile';
import MyPost from '../Components/MyPost';
import MyApplications from '../Components/MyApplications';
import { AuthContext } from '../Context/AuthConrext';
import { myPostsPromise } from '../Data/myPosts';
import { myApplicationsPromise } from '../Data/myApplicationsApi';
import Loading from '../Components/Loading';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Helmet>
        <title>Unity-Force || User-Profile</title>
      </Helmet>

      <UserProfile />

      {/* Tabs */}
      <div className="tabs tabs-lift mt-10">
        {/* Tab 1: My Posts */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="My Posts"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border border-gray-300/40 dark:border-gray-600/40 p-6">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Opportunity</th>
                  <th>Deadline</th>
                  <th>Status</th>
                  <th className="text-center">Volunteers Needed</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <Suspense
                fallback={
                  <tbody>
                    <tr>
                      <td colSpan="6" className="text-center py-10">
                        <Loading />
                      </td>
                    </tr>
                  </tbody>
                }
              >
                <MyPost myPostsPromise={myPostsPromise(user?.email, user?.accessToken)} />
              </Suspense>
            </table>
          </div>
        </div>

        {/* Tab 2: My Applications */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="My Requests"
        />
        <div className="tab-content bg-base-100 border border-gray-300/40 dark:border-gray-600/40 p-6">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Opportunity</th>
                  <th>Organizer</th>
                  <th>Deadline</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <Suspense
                fallback={
                  <tbody>
                    <tr>
                      <td colSpan="6" className="text-center py-10">
                        <Loading />
                      </td>
                    </tr>
                  </tbody>
                }
              >
                <MyApplications myApplicationsPromise={myApplicationsPromise(user?.email, user?.accessToken)} />
              </Suspense>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
