// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

//create Box component
// function Box({children, ...props}) {
//   return (
//     <div className="box" style={{fontStyle: 'italic'}} {...props}>
//       {children}
//     </div>
//   )
// }

function Box({style, className = '', ...props}) {
  return (
    <div
      className={`box ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...props}
    />
  )
}

function App() {
  return (
    <React.Fragment>
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box className="box--large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </React.Fragment>
  )
}

export default App
