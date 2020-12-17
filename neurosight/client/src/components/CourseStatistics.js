import React from 'react'
import { Accordion, Card, Button, ListGroup, Row, Col } from 'react-bootstrap'

const CourseStatistics = ({ course }) => {
    return <Accordion defaultActiveKey="1">
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <h6>Weekly Summary</h6>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col sm={8}>Social</Col>
                            <Col sm={4}>73 %</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col sm={8}>Attendance</Col>
                            <Col sm={4}>82 %</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col sm={8}>HW Average</Col>
                            <Col sm={4}>90 %</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col sm={8}>Quiz Average</Col>
                            <Col sm={4}>85 %</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col sm={8}>Exam Average</Col>
                            <Col sm={4}>93 %</Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            </Accordion.Collapse>
        </Card>
    </Accordion>
}

export default CourseStatistics
