import React,{Fragment} from 'react';
import spinner from './Spinner.gif';

const Spinner = () => 
<Fragment>
<img src={spinner} alt="Loading" sytle= {{ width: '200px' , margin: 'auto', display: 'block'}} />
</Fragment>

export default Spinner
