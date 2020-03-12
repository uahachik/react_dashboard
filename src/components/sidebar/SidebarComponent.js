import React from 'react';
import { Column } from 'simple-flexbox';
import './SidebarComponent.css'

import LogoComponent from '../logo/LogoComponent';
import SidebarMenuItem from './SidebarMenuItem';
import IconBellNew from '../../assets/icon-bell-new';
import IconIdeas from '../../assets/icon-ideas.js';
import IconContacts from '../../assets/icon-contacts';
import IconAgents from '../../assets/icon-agents';
import IconSettings from '../../assets/icon-settings';
import IconSubscription from '../../assets/icon-subscription';
import IconCalendar from '../../assets/icon-calendar';

const SidebarComponent = ({sidebarProps: {isEspanded, setIsEspanded, toggleMenu}}) => {
    const topMenuList = [
        { route: 'events', title: "Events", icon: IconCalendar },
        { route: 'notifications', title: "Notifications", icon: IconBellNew },
        { route: 'ideas', title: "Ideas", icon: IconIdeas },
        { route: 'contacts', title: 'Contacts', icon: IconContacts },
        { route: 'agents', title: 'Agents', icon: IconAgents },
    ];

    const bottomMenuList = [
        { route: 'settings', title: 'Settings', icon: IconSettings },
        { title: 'Welcome', icon: IconSubscription }
    ];

    const isMobile = window.innerWidth <= 960;

    const showSidebar = !isEspanded ? '_200_hide' : '_200_show';

    const mainContainerMobile = isMobile && '_200_mainContainerMobile';
    const mainContainerClasses = `_200_mainContainer ${mainContainerMobile} ${showSidebar}`;

    const containerMobile = isMobile && '_200_containerMobile';
    const containerClasses = `_200_container ${containerMobile} ${showSidebar}`;

    return (
        <div style={{ position: 'relative' }}>
            <div className={mainContainerClasses}>
                <Column className={containerClasses}>
                    <LogoComponent setIsEspanded={setIsEspanded} />

                    <Column>
                        <div className="_200_separator" style={{margin: 0}}></div>
                        {topMenuList.map(({route, title, icon}) => 
                            <SidebarMenuItem
                                key={route}
                                route={route}
                                title={title} icon={icon}
                                onClick={() => setIsEspanded(false)}
                            />
                        )}

                        <div className="_200_separator"></div>

                        {bottomMenuList.map(({route, title, icon}) => 
                            <SidebarMenuItem
                                key={route || 1}
                                route={route && route}
                                title={title} icon={icon}
                                onClick={() => setIsEspanded(false)}
                            />
                        )}
                    </Column>

                </Column>
                {isEspanded && <div className="_200_outsideLayer" onClick={toggleMenu}></div>}
            </div>
        </div>
    );
};

export default SidebarComponent;