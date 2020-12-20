import React from 'react'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import {NavBar} from './NavBar'
import { GiWorld} from 'react-icons/gi'
import {StatPage} from './StatPage'


import './HomePage.css'
import { RandomGraph } from './RandomGraph';
import { InfoPage } from './InfoPage';
import { Sections } from './Sections';

export class HomePage extends React.Component {

    render() {
        return (
            <div>
                <nav style={{display: 'flex', backgroundColor: 'lightgreen'}} className="navbar navbar-dark bg-primary">

                    <div style={{marginLeft: '2%'}}>
                        <h2><i>HealthX</i></h2> 
                    </div>

                    <div style={{marginLeft: '0.3%', marginTop: '1.5%'}}>
                        <GiWorld size={30} />
                    </div>
                    
                    <div style={{marginLeft: '80%', marginTop: '1.2%'}}>
                        <Link to="/login">
                            <Button className="square_btn"> Login </Button>
                        </Link>
                    </div>
                </nav>

                <div>
                    <StatPage />
                </div>

                <div>
                    <InfoPage />
                </div>

                <div>
                    <Sections />
                </div>
            </div>
        );
    }
}