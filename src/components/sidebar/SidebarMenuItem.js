import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row } from 'simple-flexbox';
import './SidebarMenuItem.css';

const SidebarMenuItem = ({ icon, title, route, ...onClick }) => {
    const isEventsActive = React.useRef(null)
    let active;

    let { pathname } = useLocation();
    pathname = pathname.split('/');

    if (pathname[1] === route) {
        isEventsActive.current = true;
        active = isEventsActive.current;
    }

    const Icon = icon;
    const activeContainer = active && '_210_activeContainer';
    const activeTitle = active && '_210_activeTitle';

    return (
        <Link to={route ? `/${route}/${title}` : '/'}>
            <Row className={`_210_container ${activeContainer}`} vertical="center" {...onClick}>

                {active && <div className="_210_activeBar"></div>}  
                <Icon fill={active && "#dde2ff"} opacity={!active ? '0.6' : '0.8'} />
                <span className={`_210_title ${activeTitle}`}>{title}</span>
            </Row>
        </Link>
    );
}

SidebarMenuItem.defaultProps = {
    route: ''
  };

SidebarMenuItem.propTypes = {
    icon: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    route: PropTypes.string
};

export default SidebarMenuItem;