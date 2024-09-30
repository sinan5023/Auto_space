import React from 'react'

const PM_manage_parking_slot = () => {
  return (
 <>
 <form id="form1" name="form1" method="post" action="">
  <table width="200" border="1">
    <tr>
      <td>SL NO
        <label></label></td>
      <td><input type="text" name="textfield" /></td>
      <td><label>
        <input type="submit" name="Submit" value="GO" />
      </label></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>S NO </td>
      <td>SLOT NUMBER </td>
      <td>FLOOR</td>
      <td><a href="#">ADD NEW</a></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td><label>
        <input type="submit" name="Submit2" value="DELETE" />
      </label></td>
    </tr>
  </table>
</form>
 </>
  )
}

export default PM_manage_parking_slot