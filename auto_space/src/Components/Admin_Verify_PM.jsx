import React from 'react'

const Admin_Verify_PM = () => {
  return (
   <>
   <form id="form1" name="form1" method="post" action="">
  <table width="437" border="1">
    <tr>
      <td width="40">name</td>
      <td width="192"><label>
        <input type="text" name="textfield" />
      </label></td>
      <td width="69"><label>
        <input type="submit" name="Go" value="Go" />
      </label></td>
      <td width="83">&nbsp;</td>
      <td width="19">&nbsp;</td>
    </tr>
    <tr>
      <td>S NO </td>
      <td>NAME</td>
      <td>ADDRES</td>
      <td>CONTACT INFO </td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td height="22">&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td><label></label></td>
      <td><p><a href="/Admin_View_Accepted_PM">Accept</a></p>
      <p><a href="">Reject</a></p></td>
    </tr>
  </table>
</form>
   </>
  )
}

export default Admin_Verify_PM