import React from 'react'

const Admin_Verify_User = () => {
  return (
   <>
   <form id="form1" name="form1" method="post" action="">
  <table width="896" height="174" border="1">
    <tr>
      <td width="267"><label> name
        <input type="text" name="textfield" />
      </label></td>
      <td width="8"><label></label>
        <input type="submit" name="Submit3" value="GO" /></td>
      <td width="64"><label></label>      </td>
      <td width="193">&nbsp;</td>
      <td width="193">&nbsp;</td>
    </tr>
    <tr>
      <td height="21">S NO </td>
      <td>NAME</td>
      <td>ADDRESS</td>
      <td>CONTACT INFO </td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td><p><a href="#">BLOCK</a></p>
          <p><a href="#">UNBLOCK</a></p></td>
    </tr>
  </table>
</form>
   </>
)
}

export default Admin_Verify_User