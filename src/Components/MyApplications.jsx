import axios from 'axios';
import React, { use, useState } from 'react';
import { FaEye } from 'react-icons/fa';
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
        axios.delete(`http://localhost:3000/applications/${id}`, {
          data: { postId }
        }).then(res => {
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
            <td>
              <div className="join">
                <Link to={`/postDetails/${application._id}`}>
                  <button className="btn btn-xs btn-primary join-item">
                    <FaEye /> View
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(application._id, application.postId)}
                  className="btn btn-xs join-item btn-secondary"
                >
                  <MdCancel /> Cancel
                </button>
              </div>
            </td>
          </tr>
        ))
      )}
    </tbody>
  );
};

export default MyApplications;
