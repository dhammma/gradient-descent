import { connect } from 'react-redux'
import Line from '../components/Line'

export default connect(({ gradient }) => ({
  teta0: gradient.teta0,
  teta1: gradient.teta1
}))(Line)
