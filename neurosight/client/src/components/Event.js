import React from 'react'
import { Card } from 'react-bootstrap'

const Event = ({ event }) => {
    return <Card className='my-3 p-3 rounded'>
        <Card.Img src={`/images/events/${event.image}`} variant='top'/>
        <Card.Body>
            <a href={event.url}>
                <Card.Title as='h5'>
                    <strong>{event.title}</strong>
                </Card.Title>
            </a>
            <Card.Text as='p'>${event.description}</Card.Text>
        </Card.Body>
    </Card>
}

export default Event
