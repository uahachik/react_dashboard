import React from 'react';
import { useHistory } from 'react-router-dom';
import  PropTypes  from 'prop-types';
import { Row } from 'simple-flexbox';
import './LogoComponent.css';

import Logo from '../../assets/icon-logo';

const LogoComponent = React.memo(({setIsEspanded}) => {

    const history = useHistory();

    const onHandleClick = () => {
        setIsEspanded(false)
        history.push('/events/Events');
    }
    
    return (
            <div className="_300_container">
                <Row horizontal="center" vertical="center">
                    <span className="_300_motto">In God We Trust!</span>
                </Row>
                <div className="_300_separator"></div>
                <Row horizontal="center" vertical="center" className="_300_logo" onClick={onHandleClick}>
                    <Logo />
                    <span className="_300_title">RDWS</span>
                </Row>
                <Row horizontal="center" vertical="center" className="_300_name" style={{marginTop: 14}}>
                    react dashboard
                </Row>
                <Row horizontal="center" vertical="center" className="_300_name">
                    with sidebar
                </Row>
            </div>
    )
});

LogoComponent.propTypes = {
    setIsEspanded: PropTypes.func.isRequired
};

export default LogoComponent;