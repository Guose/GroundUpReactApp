import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Gallery from './component/Gallery'
import UseReducer from './component/UseReducer'
import Composition from './component/Composition'
import Nav from './component/Nav'
import Error404 from './component/Error404'
import './css/styles.scss'

function App(){
    
    return  <>
                <Nav/>                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/reducer" element={<UseReducer />} />
                    <Route path="/composition" element={<Composition />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </>       
    
}

export default App