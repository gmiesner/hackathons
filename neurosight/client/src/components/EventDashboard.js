import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import axios from 'axios'
import Event from './Event';

const EventDashboard = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const { data } = await axios.get('http://localhost:5000/api/activities')
            setEvents(data)
        }
        fetchEvents()
    }, [])

    return <Container style={{ width: '1000px', height: '700px' }} className='event-dashboard'>
    <h1>Latest Events</h1>
    <Row>
        {events.map(event => (
            <Col key={event.id} sm={12} md={6} lg={4} xl={3}>
                <Event event={event} />
            </Col>
        ))}    
    </Row>   
</Container>
}

export default EventDashboard
