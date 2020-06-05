import { Platform } from 'react-native'
import DatePickerIOS from './index.ios'
import DatePickerAndroid from './index.android'
// import propTypes from './propTypes'
// import defaultProps from './defaultProps'

const RNInfiniteScroll = Platform.select({
  android: DatePickerAndroid,
  ios: DatePickerIOS,
})

// RNInfiniteScroll.defaultProps = defaultProps
// RNInfiniteScroll.propTypes = propTypes

export default RNInfiniteScroll
