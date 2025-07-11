import axios from 'axios';
import React, { use, useState } from 'react';
import { FaEdit, FaEye, FaList } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyPost = ({myPostsPromise}) => {
    const myPostsData=use(myPostsPromise)
    console.log(myPostsData)
    const [myPosts,setMyPosts]=useState(myPostsData)

    const handledelete=(id)=>{


    //   alert
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
       axios.delete(`http://localhost:3000/myPosts/${id}`).then(res=>{


            console.log(res.data)
            if(res.data.deletedCount){
            Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });

     const remminingPosts=myPosts.filter(post=>post._id !==id)
             setMyPosts(remminingPosts)
            }
        }).catch(error=>{
            console.log(error.message)
        })
  }
});



     
    }
    return (
        <tbody>
            {myPosts.map(post=>( <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={post.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{post.title}</div>
              <div className="text-sm opacity-50">{post.location}</div>
            </div>
          </div>
        </td>
       
        <td> {new Date(post.deadline).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}</td>
        <td>
          <button className={`badge badge-soft ${post.status==="active"?"badge-success":" badge-warning"}`}>{post.status==="active"?"Active":"Closed"}</button>
        </td>
         
         <td>
            4/6 volunteers
            
            <br />
            <progress className="progress progress-success w-56" value={1} max="100"></progress>
         </td>

        <td >
  <div className="join">
            
  <button className="btn btn-xs btn-primary join-item"><FaEdit /> Edit</button>
 <Link to={`/postDetails/${post._id}`}> <button className="btn btn-xs btn-secondary join-item"><FaEye />View</button></Link>
  <button className="btn btn-xs join-item btn-primary"><FaList />Applications</button>
  <button onClick={()=>handledelete(post._id)} className="btn btn-xs join-item btn-secondary"><MdDelete />
Delete</button>
  </div>

        </td>
      </tr>))}
        </tbody>
    );
};

export default MyPost;