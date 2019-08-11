import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import { Navbar, Nav , Button} from 'react-bootstrap';

import AlertContext from '../../context/alert/alertContext';
var FontAwesome = require('react-fontawesome');



const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'primary');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };        

  const onChange = e => setText(e.target.value);

  return (
    <div style={{marginTop: "80px"}}>
      <form onSubmit={onSubmit} className='form-inline md-form mr-auto mb-4' >

        <input 
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        
        <input  
          type='submit'
          value='Search'
          className='btn btn-primary btn-block my-3'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-primary btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;