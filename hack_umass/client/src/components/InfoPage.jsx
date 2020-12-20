import React from 'react'
import { RandomGraph } from './RandomGraph';


export class InfoPage extends React.Component {

    render() {
        return(
            <div>
                <div className="float-left" style={{fontSize: '70%', marginLeft: '20%', marginRight: '50%'}}>
                    <h2>
                    Compare your weekly health stats, with the world. See how your 
                    overall health is compared to the world and compared to people who share the same demographics as you.
                    </h2>
                </div>

                <div style={{width: '50%', marginLeft: '25%'}}>
                    <RandomGraph />
                </div>
                
                <div className="float-right" style={{fontSize: '70%', marginLeft: '50%', marginRight: '30%'}}>
                    <h2>
                        Compare individual health statistics with others and get recommendations on how you can improve your overall health and 
                        within certain areas. 
                    </h2>
                </div>
                
            </div>
            
        );
    }
}