import React from 'react';
import ReactDOM from 'react-dom';
import { Column } from 'simple-flexbox';
import './ProfileModal.css';

const modalRoot = document.getElementById('modal-root')

const ProfileModal = ({onClose}) => {
    return ReactDOM.createPortal(
      <div className="_1000_mainContainer" onClick={onClose}>
        <div className="_1000_container" onClick={e => e.stopPropagation()}>

            <h3 style={{pointerEvents: 'none'}}>Greetings!</h3>
            <hr />

            <div className="_1000_content">

                <Column className="_1000_form" >
                
                    <span>Login:_____________________</span> 
            
                    <span>Password:_____________________</span>

                </Column>

            </div>
                
            <button className="_1000_button" onClick={onClose}>Submit</button>
        </div>
      </div>,
      modalRoot,
    )
}

export default ProfileModal