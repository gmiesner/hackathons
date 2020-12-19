import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem , Button} from 'react-bootstrap'
import { GiWorld} from 'react-icons/gi'
import {Link} from 'react-router-dom'


export class NavBar extends React.Component {

    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-brand" style={{display: 'inline-block'}}> 
                        <h2 style={{marginLeft: '2%'}}><i>HealthX</i></h2> <GiWorld size={30} style={{display: 'inline-block'}}/>
                    </div>
                </nav>
            </div>
        );
    }
}
