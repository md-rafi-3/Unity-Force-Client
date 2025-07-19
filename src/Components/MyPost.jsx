import axios from 'axios';
import React, { use, useState } from 'react';
import { FaEdit, FaEye, FaList } from 'react-icons/fa';
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
        axios.delete(`http://localhost:3000/myPosts/${id}`)
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
            <td>
              <div className="join">
                <Link to={`/updatePost/${post._id}`}>
                  <button className="btn btn-xs btn-primary join-item">
                    <FaEdit /> Edit
                  </button>
                </Link>
                <Link to={`/postDetails/${post._id}`}>
                  <button className="btn btn-xs btn-secondary join-item">
                    <FaEye /> View
                  </button>
                </Link>
                <Link to={`/applications/${post._id}`}>
                  <button className="btn btn-xs join-item btn-primary">
                    <FaList /> Applications
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(post._id)}
                  className="btn btn-xs join-item btn-secondary"
                >
                  <MdDelete /> Delete
                </button>
              </div>
            </td>
          </tr>
        ))
      )}
    </tbody>
  );
};

export default MyPost;
