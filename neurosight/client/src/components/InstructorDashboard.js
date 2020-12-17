import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap';
import Instructor from './Instructor';

const InstructorDashboard = () => {
    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        const fetchsetInstructors = async () => {
            const { data } = await axios.get('http://localhost:5000/api/instructors');
            setInstructors(data)
        }
        fetchsetInstructors()
    }, [])

    return <>
        <h1>Meet Your Instructors</h1>
        <Row>
            {instructors.map(instructor => (
                <Col key={instructor.id} sm={12} md={6} lg={4} xl={3}>
                    <Instructor instructor={instructor} />
                </Col>
            ))}    
        </Row>   
    </>
}

export default InstructorDashboard
