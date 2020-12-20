import React from 'react'

export class Sections extends React.Component {

    render() {
        return(
            <div>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginRight: '10%', marginLeft: '10%'}}>

                    <div style={{borderColor: 'orange', fontSize: '120%'}}>
                        <div>
                            <h4>Water Intake</h4>
                        </div>
                        <div>
                            <h6>
                                Roswell Park - 10 Healthy Ways to increase
                                your fluid intake.
                            </h6>
                            <h6>
                                Healthline - 12 Simple ways to drink more water
                            </h6>
                        </div>
                    </div>

                    <div style={{fontSize: '120%'}}>
                        <div>
                            <h4>Miles Traveled</h4>
                        </div>
                        <div>
                            <h6>
                                Your daily Traveled is above average! Way to go!
                            </h6>
                        </div>
                    </div>

                    <div style={{fontSize: '120%'}}>
                        <div>
                            <h4>Blood Pressure</h4>
                        </div>
                        <div>
                            <h6>
                                Mayo Clinic - 10 ways to control blook presure without medication
                            </h6>
                            <h6>
                                Healthline - 17 ways to lower your blood pressure
                            </h6>
                        </div>
                    </div>

                    <div style={{fontSize: '120%'}}>
                        <div>
                            <h4>Step Count</h4>
                        </div>
                        <div>
                            <h6>
                                Your daily step count is above average. Way to go!
                            </h6>
                        </div>
                    </div>

                    <div style={{fontSize: '120%'}}>
                        <div>
                            <h4>Sleep</h4>
                        </div>
                        <div>
                            <h6>
                                Your daily hours of sleep is above average. Way to go!
                            </h6>
                        </div>
                    </div>

                    <div style={{fontSize: '120%'}}>
                        <div>
                            <h4>Heart Rate</h4>
                        </div>

                        <div>
                            <h6>
                                Harvard Health- increase in resting heart rate is a signal worth watching!
                            </h6>
                            <h6>
                                Hackensack Meridian Health - 6 proven ways to lower your resting heart rate
                            </h6>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}