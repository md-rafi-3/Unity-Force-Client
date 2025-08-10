import axios from 'axios';
import React, { use, useState } from 'react';
import { FaEllipsisV, FaEye } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import Lottie from 'lottie-react';
import noDataLottie from '../assets/No-Data.json';

const MyApplications = ({ myApplicationsPromise }) => {
  const myApplicationsData = use(myApplicationsPromise);
  const [applications, setApplications] = useState(myApplicationsData);

  const handleDelete = (id, postId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action will cancel your volunteer request!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://unity-force-server-nine.vercel.app/applications/${id}`, {
          data: { postId }
        }).then(res => {
          // console.log(res.data)
          if (res.data?.updatePost?.modifiedCount) {
            Swal.fire({
              title: "Cancelled!",
              text: "Your volunteer request has been cancelled successfully.",
              icon: "success"
            });
            const remainingApplications = applications.filter(app => app._id !== id);
            setApplications(remainingApplications);
          }
        }).catch(error => {
          Swal.fire({
            title: "Not Deleted!",
            text: error.message,
            icon: "error"
          });
        });
      }
    });
  };

  return (
    <tbody>
      {applications.length === 0 ? (
        <tr>
          <td colSpan="6">
            <div className="flex justify-center items-center flex-col py-10">
              <div className="w-60">
                <Lottie animationData={noDataLottie} loop={true} />
              </div>
              <p className="text-center text-gray-500 mt-2 text-lg font-semibold">
                No Applications Found
              </p>
            </div>
          </td>
        </tr>
      ) : (
        applications.map((application, index) => (
          <tr key={application._id}>
            <td>{index + 1}</td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={application.thumbnail}
                      alt={application.title}
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{application.title}</div>
                  <div className="text-sm opacity-50">{application.location}</div>
                </div>
              </div>
            </td>
            <td>
              {application.organizerName}
              <br />
              <span>{application.organizerEmail}</span>
            </td>
            <td>
              {new Date(application.deadline).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </td>
            <td>
              <button
                className={`badge badge-soft ${
                  application.status === "approved"
                    ? "badge-success"
                    : application.status === "pending"
                    ? "badge-warning"
                    : "badge-error"
                }`}
              >
                {application.status === "approved"
                  ? "Approved"
                  : application.status === "pending"
                  ? "Pending"
                  : "Rejected"}
              </button>
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
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
        >
          <li>
            <Link
              to={`/postDetails/${application._id}`}
              className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded"
            >
              <FaEye /> <span>View</span>
            </Link>
          </li>

          <li>
            <button
              onClick={() =>
                handleDelete(application._id, application.postId)
              }
              className="w-full text-left flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded"
            >
              <MdCancel /> <span>Cancel</span>
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

export default MyApplications;
