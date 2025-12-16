import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';



const MyInterests = () => {

    const {user} = use(AuthContext);

    const [interests, setInterests] =useState([]);
 


   useEffect(()=>{
       if(user?.email){
        fetch(`http://localhost:3000/interests?email=${user.email}`)
        .then(res=>res.json())
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
        <th>Status:
        </th>
      </tr>
    </thead>
    <tbody>
     
  
      {
      interests.map((interest, index) =><tr key={interest._id}>
        <th>
          {index+1}
        </th>
        <td>
        
        </td>

        <td>
        
        </td>

        <td>{interest.quantity}</td>

        <td>{interest.message}</td>
        
        <td>
               {interest.status=== 'pending'?
               <div className='badge badge-warning'>
                {interest.status}
                </div>: <div className='badge badge-success'>
                {interest.status}</div>
                
                }
        </td>
        <th>
          
        </th>

      </tr>)
      }
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default MyInterests;