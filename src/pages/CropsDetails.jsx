import React, { use, useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

    const CropsDetails = () => {

// const [totalCount, setTotalCount] = useState(0);



    const cropsDelails =useLoaderData();
    // console.log(cropsDelails);


    const [interests, setInterests] = useState([])

    const interestModalRef = useRef(null);
    const { user } =use(AuthContext);

    
    useEffect(() =>{
       axios.get(`http://localhost:3000/crops/interests/${cropsDelails._id}`)
      .then(data=>{
        console.log('after axios get', data)
        setInterests(data.data)
      })
    },[cropsDelails._id])


    // useEffect(() =>{
    //     fetch(`http://localhost:3000/crops/interests/${cropsDelails._id}`)
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log('interests for this product', data)
    //        setInterests(data)
    //     })
    // },[cropsDelails._id])

    

    const handleInterestModalOpen = ()=>{
           interestModalRef.current.showModal();
    }
        // const [quantityError,setQuantityError]= useState("");
    
    const handleInterestSubmit =(e)=>{

        e.preventDefault();
       const name = e.target.name.value;
       const email = e.target.email.value;
       const quantity = e.target.quantity.value;
        //  if(quantity.length < 1){
        //     setQuantityError("quantity should be atlest 1");
        //     return;

        // }
        // else{
        //     setQuantityError("");
        // }
        

       const message = e.target.message.value;
       
    
       console.log(cropsDelails._id,name, email, quantity, message);

       const newInterest = {
        cropId: cropsDelails._id,
        userEmail: email,
        userName:  name,
        quantity: quantity,
        message: message,
        status: "pending",
        
    

       }
       fetch('http://localhost:3000/interests',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newInterest)
       })
       .then(res => res.json())
       .then(data =>{
           if(data.insertedId){
             interestModalRef.current.close();
             Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your interests has been saved",
      showConfirmButton: false,
      timer: 1500
          });
            
        //   added the new interest to the state
          newInterest._id = data.insertedId;
          
          const newInterests = [...interests, newInterest];
          newInterests.sort((a,b)=> b.quantity - a.quantity)
          setInterests(newInterests);

           }
       })

    }

    return (
        <div className='bg-indigo-100'>

             <h1 className='text-4xl font-bold pt-8 text-center'>Crops Details</h1>
           <div className='flex justify-between w-11/12 mx-auto pt-10'>
           
            
            <div className='left pl-4'>
             
             <img className='w-[600px] h-[300px] rounded-xl ' src={cropsDelails.image} alt="" />

             <h4 className='font-semibold text-2xl p-5'>{cropsDelails.name}</h4>

             <p className='pl-5'><span className='font-semibold text-lg'>Type : </span> {cropsDelails.type}</p>

             <p className='pl-5'><span id="price" className='font-semibold text-lg '>Price : </span>{cropsDelails.pricePerUnit}</p>

             <p className='pl-5'>Unit :<span className='font-semibold text-lg'> </span>{cropsDelails.unit}</p>

             <p className='pl-5'><span id="quantity" className='font-semibold text-lg'>Quantity : </span>{cropsDelails.quantity}</p>

             <p className='pl-5'><span className='font-semibold text-lg'>Description : </span>{cropsDelails.description}</p>
       
           </div>
           <div className='right mx-auto py-20'>

              <form>

                <fieldset className='fieldset w-[300px] mb-4'>
                    <label className="label text-xl font-bold">Quantity</label>
                <input type="number"  className="input" name="quantity" placeholder='Quantity' required />
                
                <label className="label py-4 pb-4 text-xl font-bold">Message</label>
                <input type="text" className="input" name="message" placeholder='Message' />
                 
                  
                </fieldset>
                <p className='mt-4 pb-4 text-xl font-bold'>Total Price : <span id="total">{}</span></p>

              </form>

             

              <button onClick={handleInterestModalOpen} className='btn btn-primary mt-5'>Interest</button>

<dialog ref={interestModalRef} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Give the best offer!</h3>
    <p className="py-4">Offer something owner can not resist</p>
     <form onSubmit={handleInterestSubmit}>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" name="name" readOnly defaultValue={user.displayName} />
          
          
          <label className="label">Email</label>
          <input type="Email" className="input" name="email" readOnly defaultValue={user.email} />
          
          <label className="label">Quantity</label>
          <input type="number" className="input" name="quantity" placeholder='Quantity' required />

          {/* {quantityError && <p className="text-sm text-error">{quantityError}</p>} */}

          <label className="label">Message</label>
          <input type="text" className="input" name="message" placeholder='Message' />
          
         
          
      

          <button className="btn btn-neutral mt-4">Place your Interest</button>
        </fieldset>
     </form>
   
   
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Cancel</button>
      </form>
    </div>
  </div>
</dialog>  
           
           </div>
           </div>

             <div className='px-10'>
              <h2 className='text-4xl font-bold py-8 text-center'>Interests for this crops:{interests.length}</h2>

              <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
            SL No.
        </th>
        <th>Buyer Name</th>
        <th>Quantity</th>
        <th>Message</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      {
        interests.map((interest, index) =>
             <tr>
        <th>
          {index + 1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              
            </div>
            <div>
              <div className="font-bold">{interest.userName}</div>
             
            </div>
          </div>
        </td>
        <td>
          {interest.quantity}
        </td>
        <td>{interest.message}</td>
        <td>{interest.status}</td>
        <td>{interest.Actions}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Accept</button>
          <button className="btn btn-ghost btn-xs">Reject</button>
        </th>
      </tr>
        )
      }
      
      
    </tbody>
    
  </table>
</div>
             </div>

        </div>
    );
};

export default CropsDetails;