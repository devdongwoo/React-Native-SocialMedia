import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';

import PropTypes from 'prop-types';

import style from './style';
import DefaultPostImg from '../../assets/images/default_post.png';

const Tab1 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is tab1</Text>
    </View>
  );
};
export default function ProfileTabContent() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.profileTabContainer}>
      <View style={style.profileTabContent}>
        <Image
          resizeMode="contain"
          style={style.image}
          source={DefaultPostImg}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={DefaultPostImg}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={DefaultPostImg}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={DefaultPostImg}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={DefaultPostImg}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={DefaultPostImg}
        />
      </View>
    </ScrollView>
  );
}

ProfileTabContent.propTypes = {};
