import { connect } from 'react-redux'
import { findSolution } from 'redux/modules/gradient'
import Controls from '../components/Controls'

const mapStateToProps = () => ({})

const mapDispatchToProps = { findSolution }

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
