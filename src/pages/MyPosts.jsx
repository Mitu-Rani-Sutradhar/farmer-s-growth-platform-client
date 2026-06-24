import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyPosts = () => {

  const { user } = use(AuthContext);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://farmer-s-growth-platform-server.vercel.app/getMyCrops?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setPosts(data);
        });
    }
  }, [user?.email]);

  return (
    <div className='px-3 sm:px-6 md:px-10'>
      <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold py-6 md:py-8 text-center'>
        My posts: {posts.length}
      </h2>

      {/* Mobile Card View - shown below md */}
      <div className='md:hidden flex flex-col gap-4'>
        {posts.map((post, index) => (
          <div key={post._id} className='border rounded-xl p-4 shadow-sm bg-base-100'>
            <div className='flex justify-between items-center mb-2'>
              <span className='font-bold text-sm'>#{index + 1}</span>
              <span className='badge badge-outline'>{post.status}</span>
            </div>

            <div className='grid grid-cols-2 gap-y-1 text-sm'>
              <span className='font-semibold'>Crop Name:</span>
              <span>{post.name}</span>

              <span className='font-semibold'>Owner Name:</span>
              <span>{post?.owner?.ownerName}</span>

              <span className='font-semibold'>Quantity:</span>
              <span>{post.quantity}</span>

              <span className='font-semibold'>Description:</span>
              <span className='break-words'>{post.description}</span>
            </div>

            <div className='flex items-center gap-3 mt-3'>
              <button className="btn btn-ghost btn-xs bg-amber-200">Edit</button>
              <button className="btn btn-ghost btn-xs bg-amber-500">Delete</button>
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
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={post._id}>
                <th>{index + 1}</th>
                <td>{post.name}</td>
                <td>{post?.owner?.ownerName}</td>
                <td>{post.quantity}</td>
                <td>{post.description}</td>
                <td>{post.status}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <button className="btn btn-ghost btn-xs bg-amber-200">Edit</button>
                    <button className="btn btn-ghost btn-xs bg-amber-500">Delete</button>
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

export default MyPosts;