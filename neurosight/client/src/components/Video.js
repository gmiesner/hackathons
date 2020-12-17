import React from 'react'
import ReactPlayer from 'react-player'

const Video = () => {
    return <>
        <h3 className='mb-5'>Weekly Dose of Internet</h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ReactPlayer controls width='1000px' height='700px' url='https://www.youtube.com/watch?v=b4f8mkRroa0' />
        </div>
    </>
}

export default Video
