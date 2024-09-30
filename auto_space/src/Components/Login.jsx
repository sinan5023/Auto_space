import React from 'react'

const Login = () => {
  return (
    <>
    <form id="form1" name="form1" method="post" action="">
  <table width="200" border="1">
    <tr>
      <td>username</td>
      <td><label>
      <input type="text" name="textfield" />
      </label></td>
    </tr>
    <tr>
      <td>password</td>
      <td><label>
        <input type="text" name="textfield2" />
      </label></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td><label>
        <input type="submit" name="login" value="login" />
      </label></td>
    </tr>
    <tr>
      <td><a href="Parking_Manager">PM Registration</a></td>
      <td>&nbsp;</td>
    </tr>
  </table>
</form>
    </>
  )
}

export default Login