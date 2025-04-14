import './App.css';


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newscom from './components/Newscom';

import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Newscom  key="general"  pageSize={9} country="us" category="general" />} />
        <Route exact path="/business" element={<Newscom  key="business" pageSize={5} country="us" category="business" />} />
        <Route exact path="/entertainment" element={<Newscom  key="entertainment" pageSize={5} country="us" category="entertainment" />} />
        <Route exact path="/health" element={<Newscom  key="health" pageSize={5} country="us" category="health" />} />
        <Route exact path="/science" element={<Newscom  key="science" pageSize={5} country="us" category="science" />} />
        <Route exact path="/sports" element={<Newscom  key="sports" pageSize={5} country="us" category="sports" />} />
        <Route exact path="/technology" element={<Newscom  key="technology" pageSize={5} country="us" category="technology" />} />

        </Routes>
        </Router>
      </div>
    )
  }
}




