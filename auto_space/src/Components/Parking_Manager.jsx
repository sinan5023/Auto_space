import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Parking_Manager = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm(); 

  const onSub=(data)=>{
 
  axios({
    method: 'post',
    url: 'http://localhost:5000/Parking_Manager',
    data: data
  })
    .then((response) => {
        console.log(response)
      
      const res = response.data;
      console.log(res.status)
      alert(res.message)})

      
      console.log(data)

    }

  return (
    <>
    <form onSubmit={handleSubmit(onSub)}>
  <table width="200" border="1">
    <tr>
      <td>NAME</td>
      <td><label>
        <input type="text" name="textfield"   {...register("name", {
              required: "Name is required",
            })}/>
      </label>
      {errors.name && (<small className="text-danger">{errors.name.message}</small>)}
      </td>
    </tr>
    <tr>
      <td>EMAIL</td>
      <td><input type="text" name="textfield2" {...register("username", {
              required: "username is required",
            })}/>
             {errors.username && (<small className="text-danger">{errors.username.message}</small>)}
            </td>
    </tr>
    <tr>
      <td>PASSWORD</td> 
      <td><label>
        <input type="password" name="textfield" {...register("password", {required: "password is required"})} />
      </label>
      {errors.password && (<small className= "text-danger">{errors.password.message} </small>)}
      </td>
    </tr>
    <tr>
      <td>PHONE</td>
      <td><input type="text" name="textfield3" {...register("phone", {required: "phone number is required"})}/>
      {errors.phone && (<small className= "text-danger">{errors.phone.message} </small>)}
      </td>
    </tr>
    <tr>
      <td>PLACE</td>
      <td><input type="text" name="textfield4"  {...register("place", {required: "place is required"})}/>
      {errors.place  && (<small className= "text-danger">{errors.place.message} </small>)}
      </td>
    </tr>
    <tr>
      <td>POST</td>
      <td><input type="text" name="textfield5" {...register("post", {required: "post is required"})} />
      {errors.post && (<small className= "text-danger">{errors.post.message} </small>)}
      </td>
    </tr>
    <tr>
      <td>PINCODE</td>
      <td><input type="text" name="textfield6" {...register("pincode", {required: "pincode  is required"})} />
      {errors.pincode && (<small className= "text-danger">{errors.pincode.message} </small>)}
      </td>
    </tr>
    <tr>
      <td>PHOTO</td>
      <td><input type='file' {...register("image", {required: "image is required",
            })} ></input>
    {errors.cnumber && (<small className="text-danger">{errors.cnumber.message}</small>)}
      </td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td><label>
        <input type="submit" name="Submit" value="ADD" />
      </label></td>
    </tr>
  </table>
</form></>
  )
}

export default Parking_Manager