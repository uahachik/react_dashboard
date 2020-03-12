import React, { useState } from 'react';
import  PropTypes  from 'prop-types';
import { Row} from 'simple-flexbox';
import './HeaderComponent.css';

import ProfileModal from '../modal/ProfileModal';

const HeaderComponent = ({isEspanded}) => {
    
    const [isOpenProfile, setIsOpenProfile] = useState(false);
    
    const mobileWindow = window.innerWidth < 960;    

    const openProfileModal = () =>  setIsOpenProfile(true);

    const closeProfileModal = () => setIsOpenProfile(false);

    const imageStyling = {borderRadius: 0, transition: '300ms cubic-bezier(0.001, 1, 1, 1)'};
    return (
        <div>
            <Row className="_400_container" vertical="center" horizontal="space-between">
                {mobileWindow && <Row className="_400_mobileTitle">ЕРКП</Row>}
                <span />
                <button className="_400_profileButton" onClick={openProfileModal} style={isEspanded ? {opacity: 0.8} : null}>
                    <Row vertical="center" className="_400_profile">
                        {!mobileWindow && <span className="_400_name">Roman Kotenko</span>}          
                        <img
                            src="https://scontent.fiev25-1.fna.fbcdn.net/v/t1.0-9/51257331_1872271722895445_7074017101668679680_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=0k3RSxW7vZ4AX-bDsRs&_nc_ht=scontent.fiev25-1.fna&oh=5363b260a965cc05df87622e983ca7e8&oe=5E9007EA"
                            alt="avatar"
                            className="_400_avatar"
                            style={isEspanded ? imageStyling : null}
                        />
                    </Row>
                </button>
            </Row>

            {isOpenProfile && <ProfileModal onClose={closeProfileModal} />}
        </div>
    );
}

HeaderComponent.propTypes = {
    isEspanded: PropTypes.bool.isRequired
};

export default HeaderComponent;