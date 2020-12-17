import React from 'react'
import { Card } from 'react-bootstrap';

const Quiz = ({date, quiz, color }) => {
    return <Card className='my-3 p-3 rounded' style={{ width: '12rem', height:'7rem', backgroundColor: color }}>
        <Card.Body className='quiz-info'>
            <Card.Title as='h4'>
                {quiz}
            </Card.Title>
            <Card.Text as='div'>
                {date}
            </Card.Text>
        </Card.Body>
    </Card>
}

export default Quiz
