import React from 'react'

import {Line} from 'react-chartjs-2'
import {MDBContainer} from 'mdbreact'

export class RandomGraph extends React.Component{

    state={
        dataLine: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            datasets: [
                {
                    label: "7 Day Global Heartrate Average",
                    fill: true,
                    lineTension: 0.4,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(205, 130,1 58)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [77, 79, 80, 81, 70, 69, 70]
                }
            ]
        }
    }

    render() {

        return(
            <div>
                <MDBContainer>
                    <Line data={this.state.dataLine} options={{responsive: true}} />
                </MDBContainer>
            </div>
        );
    }
}