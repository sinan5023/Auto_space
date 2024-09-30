import React from 'react'

const Add_notification = () => {
  return (
   <>
   <form id="form1" name="form1" method="post" action="">
  <table width="200" border="1">
    <tr>
      <td>NOTIFICATION
        <label></label></td>
      <td><textarea name="textarea"></textarea></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td><label>
        <input type="submit" name="Submit" value="ADD" />
      </label></td>
    </tr>
  </table>
</form>
   </>
  )
}

export default Add_notification