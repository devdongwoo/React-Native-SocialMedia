import {Dimensions} from 'react-native';

import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

// this figure is iphone 6 ~ 8 cell phone width size
const isSmall = width <= 375 && !DeviceInfo.hasNotch();

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};

const horizontalScale = size => {
  return (width / guidelineBaseWidth()) * size;
};

const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const verticalScale = size => {
  return (height / guidelineBaseHeight()) * size;
};

const guidelineBaseFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

const scaleFontSize = size => {
  return Math.round((width / guidelineBaseFonts()) * size);
};

export {horizontalScale, verticalScale, scaleFontSize};
