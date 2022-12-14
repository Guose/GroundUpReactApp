import React from 'react'
import '../css/styles.css'

const puppyPicture = new URL("../images/KOA_Nassau_2697x1517.jpg", import.meta.url)

function About(){
    
    return  <>
                <section className='main-container'>
                    <h1 className='greeting'>About</h1>
                    <div className='puppy-picture'>
                        <img id='puppy' src={puppyPicture}/>
                    </div>
                </section>
            </>       
    
}

export default About