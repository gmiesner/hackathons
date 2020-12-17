import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Notes from './Notes';
import WhiteBoardContainer from './WhiteBoardContainer';

const Discussion = () => {
    return <Row>
        <Col sm={12} md={8}>
            <WhiteBoardContainer />
        </Col>
        <Col sm={12} md={4}>
            <Notes />
        </Col>
    </Row>
}

export default Discussion
