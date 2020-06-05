import { Platform } from 'react-native'
import InfiniteScrollViewIOS from './InfiniteScrollViewIOS'
import InfiniteScrollViewAOS from './InfiniteScrollViewAOS'
// import propTypes from './propTypes'
// import defaultProps from './defaultProps'

const InfiniteScrollView = Platform.select({
  android: InfiniteScrollViewAOS,
  ios: InfiniteScrollViewIOS,
})

// DatePicker.defaultProps = defaultProps
// DatePicker.propTypes = propTypes

export default InfiniteScrollView