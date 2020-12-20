import React from 'react'

import Circle from 'react-circle'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { FaArrowUp , FaArrowDown} from 'react-icons/fa'


export class StatPage extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div style={{backgroundColor: 'lightblue'}}>
                <div>
                    <div style={{textAlign: 'center'}}>
                        <p>Your overall health score is</p>
                    </div>
                
                    <div style={{textAlign: 'center'}}>
                        <Circle 
                         progress={76}
                         size={200}
                        />
                    </div>
                </div>
                
                <div style={{display: 'flex'}}>
                    <div style={{display: 'flex', marginLeft: '25%'}}>
                        <h2>23</h2>
                        <FaArrowUp size={24} style={{marginTop: '2.5%'}}/>
                        
                    </div>
                    <h5>
                        Below the maximum health score
                    </h5>

                    <div style={{display: 'flex', marginLeft: '20%'}}>
                        <h2>23</h2>
                        <FaArrowDown size={24} style={{marginTop: '2.5%'}}/>
                    </div>
                    <h5>
                        Above the averagge health score
                    </h5>
                    
                </div>


            </div>
        );
    }
}