import React from 'react';
import { Icon, NavLinks } from './SidebarStyles';

const SidebarButton = ({ to, icon, title }) => {
    return (
        <li>
            <NavLinks
                strict="true"
                to={{
                    pathname: to
                }}
            >
                <Icon>{icon}</Icon>
                {title}
            </NavLinks>
        </li>
    )
}

export default SidebarButton