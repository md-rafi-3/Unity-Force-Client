import axios from 'axios';
import React, { use, useState } from 'react';
import { FaEdit, FaEllipsisV, FaEye, FaList } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import Lottie from 'lottie-react';
import noDataLottie from '../assets/No-Data.json';

const MyPost = ({ myPostsPromise }) => {
  const myPostsData = use(myPostsPromise);
  const [myPosts, setMyPosts] = useState(myPostsData);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This volunteer post will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://unity-force-server-nine.vercel.app/myPosts/${id}`)
          .then(res => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Volunteer post has been deleted successfully.",
                icon: "success"
              });
              const remainingPosts = myPosts.filter(post => post._id !== id);
              setMyPosts(remainingPosts);
            }
          })
          .catch(error => {
            Swal.fire({
              position: "center",
              icon: "error",
              title: error.message,
              showConfirmButton: false,
              timer: 1500
            });
          });
      }
    });
  };

  return (
    <tbody>
      {myPosts.length === 0 ? (
        <tr>
          <td colSpan="6">
            <div className="flex justify-center items-center flex-col py-10">
              <div className="w-60">
                <Lottie animationData={noDataLottie} loop={true} />
              </div>
              <p className="text-center text-gray-500 mt-2 text-lg font-semibold">
                No Volunteer Posts Found
              </p>
            </div>
          </td>
        </tr>
      ) : (
        myPosts.map((post, index) => (
          <tr key={post._id}>
            <td>{index + 1}</td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={post.image}
                      alt="Avatar"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{post.title}</div>
                  <div className="text-sm opacity-50">{post.location}</div>
                </div>
              </div>
            </td>
            <td>
              {new Date(post.deadline).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </td>
            <td>
              <button
                className={`badge badge-soft ${post.status === "active" ? "badge-success" : "badge-warning"}`}
              >
                {post.status === "active" ? "Active" : "Closed"}
              </button>
            </td>
            <td className="text-center">
              {post.volunteersNeeded}
            </td>
              <td align='center'>
      <div className="dropdown dropdown-end">
        {/* trigger */}
        <label tabIndex={0} className="btn btn-ghost btn-sm">
          <FaEllipsisV />
        </label>

        {/* dropdown content */}
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48"
        >
          <li>
            <Link
              to={`/updatePost/${post._id}`}
              className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded"
            >
              <FaEdit /> <span>Edit</span>
            </Link>
          </li>

          <li>
            <Link
              to={`/postDetails/${post._id}`}
              className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded"
            >
              <FaEye /> <span>View</span>
            </Link>
          </li>

          <li>
            <Link
              to={`/applications/${post._id}`}
              className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded"
            >
              <FaList /> <span>Applications</span>
            </Link>
          </li>

          <li>
            <button
              onClick={() => handleDelete(post._id)}
              className="w-full text-left flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded"
            >
              <MdDelete /> <span>Delete</span>
            </button>
          </li>
        </ul>
      </div>
    </td>
          </tr>
        ))
      )}
    </tbody>
  );
};

export default MyPost;
