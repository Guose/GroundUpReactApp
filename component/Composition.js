import React from 'react'
import '../css/boxStyle.scss'
import Box from './Box'

function Composition() {
  return <>
            <Box>
                <h1>Top Box</h1>
                <p>Some text in top box</p>
            </Box>
            <Box>
                <h1>Bottom Box</h1>                        
                <p>Some text in bottom box</p>
                <button>Click Me!</button>
            </Box>
        </>
}

export default Composition