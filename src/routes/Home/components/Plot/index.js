import React, { PureComponent, PropTypes } from 'react'
import './styles.scss'

class Plot extends PureComponent {
  constructor (...args) {
    super(...args)

    this.state = {
      points: []
    }

    this.ref = this.ref.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.renderPoint = this.renderPoint.bind(this)
  }

  handleClick (event) {
    event.preventDefault()
    event.stopPropagation()

    this.setState({
      points: [...this.state.points, [
        event.clientX - this.plot.offsetLeft,
        event.clientY - this.plot.offsetTop
      ]]
    })
  }

  ref (plot) {
    this.plot = plot
  }

  renderPoint ([x, y], index) {
    const inlineStyle = { left: x, top: y }

    return <div className='point' style={inlineStyle} key={index} />
  }

  render () {
    return (
      <div className='plot' onClick={this.handleClick} ref={this.ref}>
        {this.state.points.map(this.renderPoint)}
      </div>
    )
  }
}

Plot.propTypes = {
  minX: PropTypes.number.isRequired,
  minY: PropTypes.number.isRequired,
  maxX: PropTypes.number.isRequired,
  maxY: PropTypes.number.isRequired
}

Plot.defaultProps = {
  minX: 0,
  minY: 0,
  maxX: 10,
  maxY: 10
}

export default Plot
