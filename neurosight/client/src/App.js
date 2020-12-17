import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import CourseDetails from './components/CourseDetails';
import Login from './components/Login';
import InstructorDashboard from './components/InstructorDashboard';
import InstructorDetails from './components/InstructorDetails';
import Discussion from './components/Discussion';
import EventDashboard from './components/EventDashboard';
import Video from './components/Video';
import Calender from './components/Calender';
import Personal from './components/Personal';
import Chat from './components/Chat';

const App = () => {
    return <Router>
        <Header />
        <main className='py-5'>
            <Container>
                <Route path='/' component={Dashboard} exact />
                <Route path='/course/:id' component={CourseDetails} />
                <Route path='/instructor' component={InstructorDashboard} exact/>
                <Route path='/instructor/:id' component={InstructorDetails} />
                <Route path='/discussion' component={Discussion} />
                <Route path='/login' component={Login} />
                <Route path='/event' component={EventDashboard} />
                <Route path='/video' component={Video} />
                <Route path='/calender' component={Calender} />
                <Route path='/personal' component={Personal} />
                <Route path='/chat' component={Chat} />
            </Container>
        </main>
        <Footer />
    </Router> 
}

export default App
