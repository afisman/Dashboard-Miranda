import React from 'react';
import { Icon, NavLinks } from './SidebarStyles';

interface SidebarButtonProps {
    to: string
    icon: JSX.Element
    title: string
    id: string

}

const SidebarButton: React.FC<SidebarButtonProps> = ({ to, icon, title, id }) => {
    return (
        <li id={id}>
            <NavLinks
                // strict="true"
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