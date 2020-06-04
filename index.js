import { Platform } from 'react-native'
import DatePickerIOS from './index.ios'
import DatePickerAndroid from './index.android'
import propTypes from './propTypes'
import defaultProps from './defaultProps'

const RNInfiniteScroll = Platform.select({
  android: DatePickerAndroid,
  ios: DatePickerIOS,
})

DatePicker.defaultProps = defaultProps
DatePicker.propTypes = propTypes

export default RNInfiniteScroll
