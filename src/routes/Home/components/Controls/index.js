import React, { PropTypes } from 'react'
import './styles.scss'

const Controls = ({ findSolution }) => (
  <div className='controls'>
    <button onClick={findSolution}>Start</button>
  </div>
)

Controls.propTypes = {
  findSolution: PropTypes.func.isRequired
}

export default Controls
