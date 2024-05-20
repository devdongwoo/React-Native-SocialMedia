import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {horizontalScale} from '../../assets/styles/scaling';

export default function UserStory({firstName, profileImage}) {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage
        profileImage={profileImage}
        imageDimensions={horizontalScale(65)}
      />
      <Text style={style.firstName}>{firstName}</Text>
    </View>
  );
}

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
};
