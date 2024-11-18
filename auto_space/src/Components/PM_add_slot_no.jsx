import React from 'react'
import { useForm } from 'react-hook-form';
const PM_add_slot_no = () => {
  return (
  <>
  <form id="form1" name="form1" method="post" action="">
  <table width="200" border="1">
    <tr>
      <td>SLOT NO </td>
      <td><label>
        <input type="text" name="textfield"  {...register("slot no", {required: "slot no is required"})}/>
      </label> {errors.slotno && (<small className= "text-danger">{errors.slotno.message} </small>)}</td>
    </tr>
    <tr>
      <td>FLOOR</td>
      <td><input type="text" name="textfield2" {...register("floor", {required: "slot no is required"})} />
      {errors.floor && (<small className= "text-danger">{errors.floor.message} </small>)}
      </td>
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