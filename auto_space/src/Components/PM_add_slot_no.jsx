
import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const PM_add_slot_no = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm(); 

  const onSub=(data)=>{

    axios({
      method: 'post',
      url: 'http://localhost:5000/login',
      
      data: data
    })
      .then((response) => {
          console.log(response)
        
        const res = response.data;
        console.log(res.status)
        alert(res.message)
        if(res.status)
          {
            if(res.type=="admin"){
              console.log("qwertyu")
              
              sessionStorage.setItem('uid', res.uid);
  window.location='/admin';
              }
              else{
                console.log("qwertyu")
                  sessionStorage.setItem('uid', res.uid);
      window.location='/Parking_Manager_Home';
  
              }
            }
          
       
        console.log(res);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  
  
  
  }


  return (
    <>
    <form id="form1" name="form1" method="post" action="" onSubmit={handleSubmit(onSub)}> 
  <table width="200" border="1">
  <tr>
       <td>SLOT NO </td>
      <td><label>
       <input type="text" name="textfield"  {...register("slot no", {required: "slot no is required"})}/>
     </label> {errors.slotno && (<small className= "text-danger">{errors.slotno.message} </small>)}</td>
    </tr>
    <tr>
      <td>FLOOR</td>
      <td><input type="text" name="textfield2" {...register("floor", {required: "slot no is required"})} />
      {errors.floor && (<small className= "text-danger">{errors.floor.message} </small>)}
      </td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td><label>
        <input type="submit" name="login" value="ADD" />
      </label></td>
    </tr>
  </table>
</form>
    </>
  )
}

export default PM_add_slot_no



