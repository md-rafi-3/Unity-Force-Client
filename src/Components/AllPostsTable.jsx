import React, { use } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { TbListDetails } from "react-icons/tb";
import { Link } from 'react-router';

const AllPostsTable = ({allPostPromise}) => {
    const postsData=use(allPostPromise)
    return (
       <tbody>
      {/* row 1 */}
       {postsData.map((post,index)=>(<tr>
        <td>
          {index+1}
        </td>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={post.image}
                  alt={post.title} />
              </div>
            </div>
            <div>
              <div className="font-bold">{post.title}</div>
              <div className="text-sm opacity-50 flex items-center gap-1"> <FaMapMarkerAlt className="text-primary" />{post.location}</div>
            </div>
          </div>
        </td>
        <td className='flex items-center gap-1'>  <FaCalendarAlt className="text-primary" />
          {new Date(post.deadline).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
        
        </td>

        <td > <div className='flex items-center gap-1'><FaUsers className="text-primary"/>{post.volunteersNeeded}</div></td>

        <td><div className='badge badge-secondary text-white'>{post.category}</div></td>
        <th>
         <Link to={`/postDetails/${post._id}`}> <button className="btn  btn-xs btn-primary"><TbListDetails />Details</button></Link>
        </th>
      </tr>))}
      </tbody>
    );
};

export default AllPostsTable;