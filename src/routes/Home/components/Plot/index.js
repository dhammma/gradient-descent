import React, { PureComponent, PropTypes } from 'react'
import uniqBy from 'lodash/uniqBy'
import first from 'lodash/first'
import last from 'lodash/last'
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
    this.addPoint = this.addPoint.bind(this)
    this.movePoint = this.movePoint.bind(this)
    this.removePoint = this.removePoint.bind(this)
  }

  handleClick (event) {
    event.preventDefault()
    event.stopPropagation()

    const { points } = this.state
    const point = [
      event.clientX - this.plot.offsetLeft,
      event.clientY - this.plot.offsetTop
    ]

    const exists = points.find(item => first(item) === first(point))

    if (exists) {
      const same = last(exists) === last(point)

      if (same) {
        this.removePoint(exists)
      } else {
        this.movePoint(exists, point)
      }
    } else {
      this.addPoint(point)
    }
  }

  addPoint (point) {
    this.setState({
      points: [...this.state.points, point]
    })
  }

  movePoint (oldPoint, newPoint) {
    const points = [...this.state.points]

    points.splice(points.indexOf(oldPoint), 1, newPoint)

    this.setState({ points })
  }

  removePoint (point) {
    const points = [...this.state.points]

    points.splice(points.indexOf(point), 1)

    this.setState({ points })
  }

  ref (plot) {
    this.plot = plot
  }

  renderPoint ([x, y]) {
    const inlineStyle = { left: x, top: y }

    return <div className='point' style={inlineStyle} key={x} />
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
