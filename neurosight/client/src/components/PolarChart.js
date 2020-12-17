import React, { Component } from 'react'
import { Radar } from 'react-chartjs-2'

class PolarChart extends Component  {
    constructor() {
        super()
        this.state = {
            chartData: {
                labels: ['Exam', 'Quiz', 'Homework', 'Attendance', 'Social'],
                datasets: [{
                    label: 'Overall Performance',
                    data: [70, 80, 90, 50, 100],
                    backgroundColor: 'rgb(102, 205, 170, 0.5)',
                    borderWidth: 0
                }],
            }
        }
    }

    render() {
        return <div className='chart' style={{ width: '100%' }}>
            <Radar
                data={this.state.chartData}
                options={{
                    scale: {
                        angleLines: {
                            display: false
                        },
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 100
                        }
                    }
                }} />
        </div>
    }
}

export default PolarChart
