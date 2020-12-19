import React from 'react'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import {NavBar} from './NavBar'
import { GiWorld} from 'react-icons/gi'

export class HomePage extends React.Component {

    render() {
        return (
            <div>
                <nav style={{display: 'flex', width: '50%'}} className="navbar navbar-dark bg-primary">

                    <div style={{marginLeft: '2%'}}>
                        <h2><i>HealthX</i></h2> 
                    </div>

                    <div style={{marginLeft: '1%', marginTop: '2%'}}>
                        <GiWorld size={30} />
                    </div>
                    
                    <div style={{marginLeft: '150%', marginTop: '3%'}}>
                        <Link to="/login" style={{backgroundColor: 'darkorange'}}>
                            <Button> Login </Button>
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}