import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import NavigationItems from './NavigationItems/NavigationItems';

const navbar = (props) => (
    <div>
        <Navbar fixedTop fluid collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand >
                    <Link id='mainPage' to="/">
                            Knygų institucijų valdymas
                        </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavigationItems/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);

export default navbar;
