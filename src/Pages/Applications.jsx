import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import Lottie from 'lottie-react';
import noDataLottie from '../assets/No-Data.json';

const Applications = () => {
  const applicantsData = useLoaderData();

  const handleStatusUpdate = (e, applicantId) => {
    e.preventDefault();
    const status = e.target.value;

    axios.patch(`http://localhost:3000/applications/status/${applicantId}`, { status })
      .then(res => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Status updated successfully!",
            showConfirmButton: false,
            timer: 1500
          });
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
  };

  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className='text-4xl text-center font-bold mt-4 text-primary'>
        Post <span className='text-secondary'>Applications</span>
      </h1>

      <div className="overflow-x-auto mt-10">
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Requested Post</th>
              <th>Request Date</th>
              <th>Status</th>
              <th>Update Status</th>
            </tr>
          </thead>

          <tbody>
            {applicantsData.length === 0 ? (
              <tr>
                <td colSpan="6">
                  <div className="flex flex-col justify-center items-center py-10">
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
              applicantsData.map((applicant, index) => (
                <tr key={applicant._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={applicant?.volunteerPhotoURl} alt={applicant.title} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{applicant.volunteerName}</div>
                        <div className="text-sm opacity-50">{applicant.volunteerEmail}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {applicant.title}
                    <br />
                    <span>{applicant.location}</span>
                  </td>
                  <td>
                    {new Date(applicant.requestDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </td>
                  <td>
                    <button
                      className={`badge badge-soft ${
                        applicant.status === "approved"
                          ? "badge-success"
                          : applicant.status === "pending"
                          ? "badge-warning"
                          : "badge-error"
                      }`}
                    >
                      {applicant.status === "approved"
                        ? "Approved"
                        : applicant.status === "pending"
                        ? "Pending"
                        : "Rejected"}
                    </button>
                  </td>
                  <td>
                    <select
                      onChange={(e) => handleStatusUpdate(e, applicant._id)}
                      name="status"
                      className="select select-bordered w-full"
                      defaultValue={applicant.status}
                      required
                    >
                      <option value="">Update status</option>
                      <option value="pending">Pending</option>
                      <option value="approved">Approve</option>
                      <option value="rejected">Reject</option>
                    </select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;
