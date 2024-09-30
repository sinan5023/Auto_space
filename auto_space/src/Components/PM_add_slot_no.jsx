import React from 'react'

const PM_add_slot_no = () => {
  return (
  <>
  <form id="form1" name="form1" method="post" action="">
  <table width="200" border="1">
    <tr>
      <td>SLOT NO </td>
      <td><label>
        <input type="text" name="textfield" />
      </label></td>
    </tr>
    <tr>
      <td>FLOOR</td>
      <td><input type="text" name="textfield2" /></td>
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

export default PM_add_slot_no