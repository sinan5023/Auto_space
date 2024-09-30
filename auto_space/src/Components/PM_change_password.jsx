import React from 'react'

const PM_change_password = () => {
  return (
    <>
    <form id="form1" name="form1" method="post" action="">
  <table width="200" border="1">
    <tr>
      <td>CURRENT PASSWORD </td>
      <td><label>
        <input type="text" name="textfield" />
      </label></td>
    </tr>
    <tr>
      <td>NEW PASSWORD </td>
      <td><input type="text" name="textfield2" /></td>
    </tr>
    <tr>
      <td>CONFIRM PASSWORD </td>
      <td><input type="text" name="textfield3" /></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td><label>
        <input type="submit" name="Submit" value="Submit" />
      </label></td>
    </tr>
  </table>
</form>
    </>
  )
}

export default PM_change_password