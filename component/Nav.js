import React from 'react'
import {Link} from 'react-router-dom'

function Nav(){
    
    return  <>
                <nav>
                    <div className='nav-div'>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/gallery'>Gallery</Link>
                        <Link to='/reducer'>Reducer</Link>
                        <Link to='/composition'>Composition</Link>
                    </div>
                </nav>
                <hr/>
            </>       
    
}

export default Nav