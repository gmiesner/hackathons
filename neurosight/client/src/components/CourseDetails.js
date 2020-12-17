import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, ListGroup, Row, Card, Button } from 'react-bootstrap'
import axios from 'axios'
import CourseStatistics from './CourseStatistics';
import Quizes from './Quizes';
import PolarChart from './PolarChart';
import Tracker from './Tracker';
import Report from './Report';

const CourseDetails = ({ match }) => {
    const [course, setCourse] = useState({})
    const [index, setIndex] = useState(0)
    const [reports, setReports] = useState([])
    const [report, setReport] = useState(null)

    useEffect(() => {
        const fetchCourse = async () => {
            const { data } = await axios.get(`http://localhost:5000/api/courses/${match.params.id}`)
            setCourse(data)
        }
        fetchCourse()

        const fetchReports = async () => {
            const { data } = await axios.get(`http://localhost:5000/api/charts`)
            setReports(data)
        }

        fetchReports()
    }, [match.params.id])

    const handleSelectReport = async () => {
        if (index < reports.length) {
            const report = reports.filter(x => x.id === index + 1)[0]
            setReport(report)
            setIndex(index + 1)
        } else {
            setIndex((index) % reports.length)
        }
    }

    return <>
        <Link to='/'>
            <Button className='btn mb-5' variant='outline-dark' type='button' >
                Go Back
            </Button>
        </Link>
        <Row>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h4>{course.title}</h4>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: {course.description}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Textbook: <a href={'https://www.amazon.ca/Calculus-Complete-Course-Robert-Adams/dp/0321781074/ref=pd_sbs_14_3/147-4223358-4828727?_encoding=UTF8&pd_rd_i=0321781074&pd_rd_r=e350d625-e5b9-4eac-8d48-47508e8d60e0&pd_rd_w=49NOE&pd_rd_wg=2urIC&pf_rd_p=3885b243-7797-4c4b-b0ae-97ca9ec36283&pf_rd_r=AQTF55W20TRCFDM0KMQA&psc=1&refRID=AQTF55W20TRCFDM0KMQA'}>Calculus: A Complete Course</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Instructor: Jane Doe
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={6}>
                <PolarChart />
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <CourseStatistics course={course} />
                    </ListGroup>
                </Card>
            </Col>
        </Row>
        <Row className='my-5'>
            <h3 className='mt-5'>Weekly Reports</h3>
            {
                reports.map((x, i) => (
                    <Col key={i} sm={12} md={12} lg={12}>
                        <Report report={x} />
                    </Col>
                ))
            }
            {/* <SlideShow /> */}
            {/* <Col md={10}>
                <Button className='btn mb-3 mr-2' variant='outline-dark' type='button' onClick={() => handleSelectReport()}>
                    Click to View Weekly Reports
                </Button>
                <Button className='btn mb-3' variant='info' type='div'>
                    {index} of {reports.length}
                </Button>
            </Col> */}
        </Row>
        {/* <Row>
            {index !== 0 && <Report report={report}/>}
        </Row> */}
        <Row>
            <Col md={12}>
                <Quizes />
            </Col>
        </Row>
        <Row>
            <Tracker />
        </Row>
    </>
}

export default CourseDetails
