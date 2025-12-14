import React, { use, useRef, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const CropsDetails = () => {

 

    const interestModalRef = useRef(null);
    const { user } =use(AuthContext);

    const cropsDelails =useLoaderData();
    console.log(cropsDelails);

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
        status: "pending"

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
        console.log('after placing interest', data)
       })

    }

    return (
        <div>
           <div className='left'>

           </div>
           <div className='right'>
              <button onClick={handleInterestModalOpen} className='btn btn-primary'>Interest</button>

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
          <input type="text" className="input" name="quantity" placeholder='Quantity' required />

          {/* {quantityError && <p className="text-sm text-error">{quantityError}</p>} */}

          <label className="label">Message</label>
          <input type="text" className="input" name="message" placeholder='Message' />
          
         
        
      

          <button className="btn btn-neutral mt-4">Place your Interest</button>
        </fieldset>
     </form>
   
   
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>  
           
           </div>
        </div>
    );
};

export default CropsDetails;