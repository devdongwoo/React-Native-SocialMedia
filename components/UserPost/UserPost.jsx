import React from 'react';
import {View, Text, Image} from 'react-native';

import PropTypes from 'prop-types';

import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';

import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart,
  faMessage,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';

export default function UserPost({
  name,
  location,
  image,
  likes,
  comments,
  bookmarks,
  profileImage,
}) {
  return (
    <View style={style.userPostContainer}>
      <View style={style.userPostWrap}>
        <View style={style.userContainer}>
          <UserProfileImage
            profileImage={profileImage}
            imageDimensions={horizontalScale(48)}
          />
          <View style={style.userPostText}>
            <Text style={style.userName}>{name}</Text>
            {location && <Text style={style.location}>{location}</Text>}
          </View>
        </View>
        <FontAwesomeIcon
          icon={faEllipsisH}
          size={scaleFontSize(24)}
          color={'#79869F'}
        />
      </View>
      <View style={style.postImage}>
        <Image source={image} />
      </View>
      <View style={style.otherContainer}>
        <View style={style.likes}>
          <FontAwesomeIcon icon={faHeart} color={'#79869F'} />
          <Text style={style.likesText}>{likes}</Text>
        </View>
        <View style={style.comments}>
          <FontAwesomeIcon icon={faMessage} color={'#79869F'} />
          <Text style={style.commentsText}>{comments}</Text>
        </View>
        <View style={style.bookmarks}>
          <FontAwesomeIcon icon={faBookmark} color={'#79869F'} />
          <Text style={style.bookmarksText}>{bookmarks}</Text>
        </View>
      </View>
    </View>
  );
}

UserPost.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
  profileImage: PropTypes.any.isRequired,
};
