import React, { PureComponent, PropTypes } from 'react'
import './styles.scss'
import Line from '../../containers/LineContainer'

class Plot extends PureComponent {
  constructor (...args) {
    super(...args)

    this.ref = this.ref.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.renderPoint = this.renderPoint.bind(this)
  }

  handleClick (event) {
    event.preventDefault()
    event.stopPropagation()

    const point = [
      event.clientX - this.plot.offsetLeft - this.plot.clientLeft,
      this.plot.clientHeight - event.clientY + this.plot.offsetTop
    ]

    this.props.addPoint(point)
  }

  ref (plot) {
    this.plot = plot
  }

  renderPoint ([x, y]) {
    const inlineStyle = { left: x, bottom: y }

    return <div className='point' style={inlineStyle} key={x} />
  }

  render () {
    return (
      <div className='plot' onClick={this.handleClick} ref={this.ref}>
        {this.props.points.map(this.renderPoint)}
        <Line />
      </div>
    )
  }
}

Plot.propTypes = {
  minX: PropTypes.number.isRequired,
  minY: PropTypes.number.isRequired,
  maxX: PropTypes.number.isRequired,
  maxY: PropTypes.number.isRequired,
  points: PropTypes.array,
  addPoint: PropTypes.func.isRequired
}

Plot.defaultProps = {
  minX: 0,
  minY: 0,
  maxX: 10,
  maxY: 10
}

export default Plot
