import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('NotoSansKR', '500'),
    fontSize: scaleFontSize(16),
    includeFontPadding: false,
    padding: horizontalScale(15),
  },
  titleNotFocused: {
    color: '#79869F',
    fontFamily: getFontFamily('NotoSansKR', '400'),
    includeFontPadding: false,
  },
});
export default style;
