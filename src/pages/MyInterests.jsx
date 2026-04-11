import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';



const MyInterests = () => {

    const {user} = use(AuthContext);
    console.log(user.email);

    const [interests, setInterests] =useState([]);
    
   useEffect(()=>{
       if(user?.email){
        
        fetch(`http://localhost:3000/getByEmail?email=${user.email}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setInterests(data)
        })
       }
   },[user?.email])

    return (
        <div>
            <h2 className='text-4xl font-bold py-8 text-center'>My interests: {interests.length}</h2>
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
      interests.map((interest, index) =><tr key={interest._id}>
        <th>
          {index+1}
          
        </th>
        <td>
             {interest.name}
        </td>

        <td>
             {interest?.Owner?.ownerName}
        </td>

        <td>{interest?.interests?.[0].quantity}</td>

        <td>{interest?.interests?.[0]?.message}</td>
        
        <td>
            
                {interest.interests?.[0]?.status}
               
                
                
        </td>
        <td>
          <td className="flex items-center gap-3">
          <button className="btn btn-ghost btn-xs bg-amber-200">Accept</button>
          <button className="btn btn-ghost btn-xs bg-amber-500">Reject</button>
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

export default MyInterests;