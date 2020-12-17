import React from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-elastic-carousel'

const SlideShow = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 300, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 3 },
      ]

    return (
        <Container>
            <Carousel breakPoints={breakPoints}>
                <div className='mr-3'>
                    <video autoPlay id='video' controls >
                        <source src={`/images/reports/videos/1.mov`} id='source' type='video/mp4'/>
                    </video>
                </div>
                <div className='mr-3'>
                    <video autoPlay id='video' controls >
                        <source src={`/images/reports/videos/2.mov`} id='source' type='video/mp4'/>
                    </video>
                </div>
                <div className='mr-3'>
                    <video autoPlay id='video' controls >
                        <source src={`/images/reports/videos/3.mov`} id='source' type='video/mp4'/>
                    </video>
                </div>
                <div className='mr-3'>
                    <video autoPlay id='video' controls >
                        <source src={`/images/reports/videos/4.mov`} id='source' type='video/mp4'/>
                    </video>
                </div>
                <div className='mr-3'>
                    <video autoPlay id='video' controls >
                        <source src={`/images/reports/videos/5.mov`} id='source' type='video/mp4'/>
                    </video>
                </div>
                <div className='mr-3'>
                    <video autoPlay id='video' controls >
                        <source src={`/images/reports/videos/6.mov`} id='source' type='video/mp4'/>
                    </video>
                </div>
                <div className='mr-3'>
                    <video autoPlay id='video' controls >
                        <source src={`/images/reports/videos/7.mov`} id='source' type='video/mp4'/>
                    </video>
                </div>
                    
            </Carousel>
        </Container>
        
    )
}

export default SlideShow
