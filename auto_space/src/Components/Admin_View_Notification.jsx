import React from 'react'

const Admin_View_Notification = () => {
  return (
    <>
    <form id="form1" name="form1" method="post" action="">
  <table width="560" height="174" border="1">
    <tr>
      <td width="267"><label>DATE
        <input type="text" name="textfield" />
      </label></td>
      <td width="8"><label></label>
          <input type="submit" name="Submit3" value="GO" /></td>
      <td width="64"><label></label>      </td>
      <td width="193"><a href="#">ADD NEW NOTIFICATION</a></td>
    </tr>
    <tr>
      <td height="21">S NO </td>
      <td>NOTIFICATION </td>
      <td>DATE</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td><p><a href="#"></a><a href="#">DELETE</a></p>
          <p><a href="#"></a></p></td>
    </tr>
  </table>
</form>
    </>
  )
}

export default Admin_View_Notification