import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {scaleFontSize} from '../../assets/styles/scaling';

const Style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('NotoSansKR', '700'),
    fontSize: scaleFontSize(24),
    includeFontPadding: false,
  },
});

export default Style;
