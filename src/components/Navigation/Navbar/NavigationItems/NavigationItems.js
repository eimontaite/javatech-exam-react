import React from 'react';
import './NavigationItems.css';
import RouteNavItem from './RouteNavItem/RouteNavItem';

const navigationItems = (props) => (
    <div>
        <ul id='navigationItems' className="NavigationItems">
                <RouteNavItem id='institutionList' to="/institutions">Institucijos</RouteNavItem>
                <RouteNavItem id='bookList' to="/books">Knygos</RouteNavItem>
        </ul>
    </div>

);

export default navigationItems;
