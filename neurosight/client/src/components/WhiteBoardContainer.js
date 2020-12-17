import React, { Component } from 'react'
import WhiteBoard from './WhiteBoard';

class WhiteBoardContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: '#000000',
            size: '5'
        }
    }

    changeColor(params) {
        this.setState({
            color: params.target.value
        })
    }

    changeSize(params) {
        this.setState({
            size: params.target.value
        })
    }

    render() {
        return <>
            <h3 className='mb-3'>Solve Problems With Your Friends</h3>
            <div className='whiteboard'>
                <div className='tools-section'>
                    <div className='color-picker-container'>
                        Pick color : &nbsp;
                        <input className='mt-1' type='color' value={this.state.color} onChange={this.changeColor.bind(this)}/>
                    </div>
                    <div className='brushsize-container'>
                        Pick size : &nbsp;
                        <select value={this.state.size} onChange={this.changeSize.bind(this)}>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                            <option>25</option>
                            <option>30</option>
                        </select>
                    </div>
                </div>
                
                <div className='board-container'>
                    <WhiteBoard color={this.state.color} size={this.state.size}></WhiteBoard>
                </div>
            </div>
        </>
    }
}

export default WhiteBoardContainer
