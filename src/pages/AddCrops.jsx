import axios from 'axios';
import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const AddCrops = () => {


    const handleAddCrops =(e)=>{
     e.preventDefault();
     const name = e.target.name.value;
     const image = e.target.image.value;
     const type = e.target.type.value;
     const pricePerUnit = e.target.pricePerUnit.value;
     const unit = e.target.unit.value;
     const quantity = e.target.quantity.value;
     const description = e.target.description.value;
     const location = e.target.location.value;
     
     console.log(name,image,type,pricePerUnit,unit,quantity,description,location);
      
     const newCrop = {name,image,type,pricePerUnit,unit,quantity,description,location}
     
     axios.post('http://localhost:3000/crops',newCrop)
     .then(data =>{
        console.log(data.data)
        if(data.data.insertedId){
            Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your crop has been saved",
                  showConfirmButton: false,
                  timer: 1500
                      });
        }
     })

    }
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-4xl font-bold py-8 text-center'>Add Crops</h1>
             <form className='' onSubmit={handleAddCrops}>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" name="name"  />

          <label className="label">Image Url</label>
          <input type="text" className="input" name="image"  />
          
          
          <label className="label">Type</label>
          <input type="text" className="input" name="type"  />
          
          <label className="label">Price per unit</label>
          <input type="number" name="pricePerUnit" className="input"  />

          <label className="label">Unit</label>
          <input type="text" className="input" name="unit"  />

          <label className="label">Estimated Quantity</label>
          <input type="number" className="input" name="quantity"  />

          <label className="label">Description</label>
          <input type="text" className="input" name="description"  />

          <label className="label">Location</label>
          <input type="text" className="input" name="location"  />

          <button className='btn btn-primary w-[300px]'>Add Crops</button>
          
         
        </fieldset>
     </form>
        </div>
    );
};

export default AddCrops;