import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import { makeStyles } from '@material-ui/core/styles';
function Reports() {
  return (

    <div className='home'>
      <form noValidate autoComplete="off">
      {/* <TextField required id="standard-required" label="Required" defaultValue="User name" />
      <TextField required id="standard-required" label="Required" defaultValue="Surname" />
      <TextField required id="standard-required" label="Required" defaultValue="Last name" /> */}
      <h2>Student Registration</h2>
      <TextField
          id="outlined-full-width"
          label="Label"
          style={{ margin: 6 }}
          placeholder="Name"
          // helperText="Full width!"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          
        />
        <TextField
          id="outlined-full-width"
          label="Surname"
          style={{ margin: 6 }}
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}  
        />
        <TextField
          id="outlined-full-width"
          label="Last name"
          style={{ margin: 6 }}       
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}  
        />
        <TextField
          id="outlined-full-width"
          label="Mobile No"
          style={{ margin: 6 }}       
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}  
        />
        <TextField
          id="outlined-full-width"
          label="Adhar Number"
          style={{ margin: 6 }}       
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}  
        />
                <TextField
          id="outlined-full-width"
          label="Email Address"
          style={{ margin: 6 }}       
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}  
        />

          {/* <Input
            
          /> */}
        <button type="submit" >Submit</button>
        <button type="button"  >
          Clear Values
        </button>
      </form>
    </div>
  );


}

export default Reports;
