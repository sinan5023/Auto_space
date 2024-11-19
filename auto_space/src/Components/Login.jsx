import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Login = () => {
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
      <td>username</td>
      <td><label>
      <input type="text" name="textfield"  {...register("username", {required: "username is required"})} />
      </label>
      {errors.username && (<small className= "text-danger">{errors.username.message} </small>)}
      </td>
    </tr>
    <tr>
      <td>password</td>
      <td><label>
        <input type="text" name="textfield2"  {...register("password", {required: "password is required"})}/>
      </label>{errors.password && (<small className= "text-danger">{errors.password.message} </small>)}
      </td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td><label>
        <input type="submit" name="login" value="login" />
      </label></td>
    </tr>
  </table>
</form>
    </>
  )
}

export default Login