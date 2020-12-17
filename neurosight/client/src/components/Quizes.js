import React from 'react'
import Carousel from 'react-elastic-carousel'
import Quiz from './Quiz';

const Quizes = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 200, itemsToShow: 2 },
        { width: 500, itemsToShow: 3 },
        { width: 800, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 },
      ]

    return <>
        <h3 className='my-5'>Upcoming Deadlines</h3>
        <div>
            <Carousel breakPoints={breakPoints}>
                <Quiz date='Sept 15' quiz='Quiz 1' color='#ff9999'/>
                <Quiz date='Oct 12' quiz='HW 1' color='#ffb3b3' />
                <Quiz date='Oct 17'  quiz='Quiz 2' color='#ffcccc' />
                <Quiz date='Oct 25'  quiz='HW 2' color='#ffe6e6' />
                <Quiz date='Nov 1'  quiz='Exam 1' color='#ffffff' />
            </Carousel>
        </div>
    </>
}

export default Quizes
