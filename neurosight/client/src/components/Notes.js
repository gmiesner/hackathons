import React, { useState } from 'react'
import { Row } from 'react-bootstrap'

const Notes = () => {
    const [input, setInput] = useState('')

    return <>
        <Row className='mt-5'>
            <div className='notes-area'>
                <textarea className='notes' rows={15} value={input} onChange={e => setInput(e.target.value)} autoFocus/>
            </div>
        </Row>
    </>
}

export default Notes
