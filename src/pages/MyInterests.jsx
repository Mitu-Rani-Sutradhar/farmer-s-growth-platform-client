import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyInterests = () => {
  const { user } = use(AuthContext);

  const [interests, setInterests] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://farmer-s-growth-platform-server.vercel.app/getByEmail?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setInterests(data);
        });
    }
  }, [user?.email]);

  return (
    <div className='px-3 sm:px-6 md:px-10'>
      <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold py-6 md:py-8 text-center'>
        My interests: {interests.length}
      </h2>

      {/* Mobile Card View - shown below md */}
      <div className='md:hidden flex flex-col gap-4'>
        {interests.map((interest, index) => (
          <div key={interest._id} className='border rounded-xl p-4 shadow-sm bg-base-100'>
            <div className='flex justify-between items-center mb-2'>
              <span className='font-bold text-sm'>#{index + 1}</span>
              <span className='badge badge-outline'>{interest.interests?.[0]?.status}</span>
            </div>

            <div className='grid grid-cols-2 gap-y-1 text-sm'>
              <span className='font-semibold'>Crop Name:</span>
              <span>{interest.name}</span>

              <span className='font-semibold'>Owner Name:</span>
              <span>{interest?.Owner?.ownerName}</span>

              <span className='font-semibold'>Quantity:</span>
              <span>{interest?.interests?.[0]?.quantity}</span>

              <span className='font-semibold'>Message:</span>
              <span className='break-words'>{interest?.interests?.[0]?.message}</span>
            </div>

            <div className='flex items-center gap-3 mt-3'>
              <button className="btn btn-ghost btn-xs bg-amber-200">Accept</button>
              <button className="btn btn-ghost btn-xs bg-amber-500">Reject</button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop/Tablet Table View - shown from md upward */}
      <div className="overflow-x-auto hidden md:block">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Crop Name</th>
              <th>Owner Name</th>
              <th>Quantity</th>
              <th>User's Message</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {interests.map((interest, index) => (
              <tr key={interest._id}>
                <th>{index + 1}</th>
                <td>{interest.name}</td>
                <td>{interest?.Owner?.ownerName}</td>
                <td>{interest?.interests?.[0]?.quantity}</td>
                <td>{interest?.interests?.[0]?.message}</td>
                <td>{interest.interests?.[0]?.status}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <button className="btn btn-ghost btn-xs bg-amber-200">Accept</button>
                    <button className="btn btn-ghost btn-xs bg-amber-500">Reject</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyInterests;