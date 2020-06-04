import { Platform } from 'react-native'
import DatePickerIOS from './DatePickerIOS'
import DatePickerAndroid from './DatePickerAndroid'
import propTypes from './propTypes'
import defaultProps from './defaultProps'

const RNInfiniteScroll = Platform.select({
  android: DatePickerAndroid,
  ios: DatePickerIOS,
})

DatePicker.defaultProps = defaultProps
DatePicker.propTypes = propTypes

export default RNInfiniteScroll
