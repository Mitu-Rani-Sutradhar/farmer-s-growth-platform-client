import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyPosts = () => {

  const {user} = use(AuthContext);
    console.log(user.email);

    const [posts, setPosts] =useState([]);

      useEffect(()=>{
           if(user?.email){
            
            fetch(`http://localhost:3000/getMyCrops?email=${user.email}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                setPosts(data)
            })
           }
       },[user?.email])



    return (
        <div>
            <h2 className='text-4xl font-bold py-8 text-center'>My posts: {posts.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Crop-Name:</th>
        <th>Owner-Name:</th>
        <th>quantity:</th>
        <th>Users-Message:</th>
        <th>Status:</th>
        <th>Action:</th>
      </tr>
    </thead>
    <tbody>
     
  
      {
      posts.map((post, index) =><tr key={post._id}>
        <th>
          {index+1}
          
        </th>
        <td>
             {post.name}
        </td>

        <td>
             {post.owner.ownerName}
        </td>

        <td>{post.quantity}</td>

        <td>{post.description}</td>
        
        <td>
              {post.status ="pending"}
                
                
        </td>
        <td>
          <td className="flex items-center gap-3">
          <button className="btn btn-ghost btn-xs bg-amber-200">Edit</button>
          <button className="btn btn-ghost btn-xs bg-amber-500">Delete</button>
        </td>
        </td>

      </tr>)
      }
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default MyPosts;