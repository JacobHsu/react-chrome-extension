import React from 'react';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import PostAddIcon from '@material-ui/icons/PostAdd';
import AddBoxIcon from '@material-ui/icons/AddBox';

const todoAdder = (props)=>{
  return (
    <div id="myDIV" className="header">

      <h2>My To Do List</h2>
      <Paper>
        <IconButton aria-label="menu">
          <PostAddIcon />
        </IconButton>
        <InputBase
          onChange={props.change}
          autoFocus
          placeholder="Todo Name"
          inputProps={{ 'aria-label': 'Todo Name' }}
        />
        <IconButton color="primary"  type="submit" aria-label="directions">
          <AddBoxIcon onClick={props.click}/>
        </IconButton>
      </Paper>
    </div>
  );
}

export default todoAdder;