import React from 'react'

const Parking_Manager = () => {
  return (
    <>
    <form id="form1" name="form1" method="post" action="">
  <table width="200" border="1">
    <tr>
      <td>NAME</td>
      <td><label>
        <input type="text" name="textfield" />
      </label></td>
    </tr>
    <tr>
      <td>EMAIL</td>
      <td><input type="text" name="textfield2" /></td>
    </tr>
    <tr>
      <td>PHONE</td>
      <td><input type="text" name="textfield3" /></td>
    </tr>
    <tr>
      <td>PLACE</td>
      <td><input type="text" name="textfield4" /></td>
    </tr>
    <tr>
      <td>POST</td>
      <td><input type="text" name="textfield5" /></td>
    </tr>
    <tr>
      <td>PINCODE</td>
      <td><input type="text" name="textfield6" /></td>
    </tr>
    <tr>
      <td>PHOTO</td>
      <td>IMG</td>
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