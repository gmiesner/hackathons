import React from 'react'
import { Row, Col } from 'react-bootstrap';

const Report = ({ report, number }) => {
    return (
        <Row>
            <Col md={6}>
                {report && <video autoPlay id='video' controls >
                    <source src={`/images/reports/videos/${report.id}.mov`} id='source' type='video/mp4'/>
                </video>}
            </Col>
            <Col className='my-5' md={6}>
                {report && <p style={{ fontSize: '1.05rem' }}>{report.feedback}</p>}
            </Col>
        </Row>
    )
}

export default Report
