import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from "material-ui-search-bar";


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      // width: '25ch',
    },
  },
}));

function Home() {
  return(
    <SearchBar
    // value={this.state.value}
    // onChange={(newValue) => this.setState({ value: newValue })}
    // onRequestSearch={() => doSomethingWith(this.state.value)}
  />
  //   <div className='products'>
  //     <h1>RUDRAM Services</h1>

  //   </div>
  // )
  )
}

export default Home;
