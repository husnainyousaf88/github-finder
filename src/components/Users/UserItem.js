import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const UserItem = ({user: {login, avatar_url, html_url, score}})     => {

    return (

            

<div class="col-lg-4 col-md-6 mb-4">
<div class="card h-70">
  <a href={`/user/${login}`}><img class="card-img-top" src={avatar_url} alt="" /></a>
  <div class="card-body">
    <h4 class="card-title">{login}</h4>
    <p class="card-text">Score: {score}</p>
    <a href={`/user/${login}`} class="btn btn-danger">See Profile</a>
  </div>
  </div>




</div>


        );
    };

    const scoreStyle = {
        marginTop:'0px',
        fontSize: '15px',
        textAlign: 'left'
    }
    
    const readoMoreStyle = {
        fontSize: '15px',
        textAlign: 'right'
    }


    const pStyle = {
        fontSize: '12px',
        textAlign: 'center'
      };


UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem;



{/* //   
// <div class="card-body">
//     <h2 className="card-title" style={pStyle}>
//       <h2>{login}</h2>
//     </h2>
//     <h3 class="card-text" style={scoreStyle}><strong>Score: </strong>{score}</h3>

//     <a href= {`/user/${login}`} className='btn btn-secondarys' style={readoMoreStyle}> Read More... </a>              

//   </div>
// </div> */}
