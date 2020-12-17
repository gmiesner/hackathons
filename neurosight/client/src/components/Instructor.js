import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Instructor = ({ instructor }) => {
    return <Card className='my-3 p-2 rounded'>
    <Link to='/chat'>
        <Card.Img style={{ width: '100%', height: '100%' }} src={`/images/instructors/${instructor.image}.jpg`} variant='top'/>
    </Link>
    
    <Card.Body>
        <Card.Title as='div'>
            <strong>{instructor.name}</strong>
        </Card.Title>
    </Card.Body>
</Card>
}

export default Instructor
