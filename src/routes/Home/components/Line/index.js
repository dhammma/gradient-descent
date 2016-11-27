import React, { PropTypes } from 'react'

const Line = ({ teta0, teta1 }) => {
  const inlineStyle = {
    bottom: teta0,
    transform: `rotate(-${Math.atan(teta1)}rad)`
  }

  return <div className='line' style={inlineStyle} />
}

Line.propTypes = {
  teta0: PropTypes.number.isRequired,
  teta1: PropTypes.number.isRequired
}

export default Line
