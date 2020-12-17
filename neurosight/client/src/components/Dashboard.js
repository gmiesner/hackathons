import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap';
import Course from './Course';

const Dashboard = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        const fetchCourses = async () => {
            const { data } = await axios.get('http://localhost:5000/api/courses');
            setCourses(data)
        }
        fetchCourses()
    }, [])

    return <>
        <h1>Course Dashboard</h1>
        <Row>
            {courses.map(course => (
                <Col key={course.id} sm={12} md={6} lg={4} xl={3}>
                    <Course course={course} />
                </Col>
            ))}    
        </Row>   
    </>
}

export default Dashboard
