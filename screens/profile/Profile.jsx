import React from 'react';
import {SafeAreaView, ScrollView, Image, View, Text} from 'react-native';

import DefaultProfile from '../../assets/images/default_profile.png';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import {ProfileTabsNavigation} from '../../navigation/MainNavigation';

export default function Profile({navigation}) {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={globalStyle.flexGrow}>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image source={DefaultProfile} style={style.profileImage} />
          </View>
        </View>
        <Text style={style.userName}>사용자</Text>
        <View style={style.statContainer}>
          <View>
            <Text style={style.statAmount}>45</Text>
            <Text style={style.statType}>Following</Text>
          </View>
          <View style={style.statBorder} />
          <View>
            <Text style={style.statAmount}>30M</Text>
            <Text style={style.statType}>Followers</Text>
          </View>
          <View style={style.statBorder} />
          <View>
            <Text style={style.statAmount}>100</Text>
            <Text style={style.statType}>Posts</Text>
          </View>
        </View>
        <View style={globalStyle.flex}>
          <ProfileTabsNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
