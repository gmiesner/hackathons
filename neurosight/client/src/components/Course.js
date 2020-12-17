import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Course = ({ course }) => {
    return <Card className='my-3 p-2 rounded'>
        <Link to={`/course/${course.id}`}>
            <Card.Img src={course.image} variant='top'/>
        </Link>
        <Card.Body>
            <Link to={`/course/${course.id}`}>
                <Card.Title as='h6'>
                    <strong>{course.title}</strong>
                </Card.Title>
            </Link>
            <a href='https://www.mindmeister.com/99860186/calculus?fullscreen=1'>Concept Map</a>
        </Card.Body>
    </Card>
}

export default Course
