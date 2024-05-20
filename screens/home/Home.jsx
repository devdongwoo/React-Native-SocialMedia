import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

import Title from '../../components/Title/Title';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';

import style from './style';
import DefaultImg from '../../assets/images/default_profile.png';
import DefaultPostImg from '../../assets/images/default_post.png';
import {scaleFontSize} from '../../assets/styles/scaling';
import globalStyle from '../../assets/styles/globalStyle';

export default function Home() {
  const userStories = [
    {
      firstName: '유재석',
      id: 1,
      profileImage: DefaultImg,
    },
    {
      firstName: '장원영',
      id: 2,
      profileImage: DefaultImg,
    },
    {
      firstName: '나띠',
      id: 3,
      profileImage: DefaultImg,
    },
    {
      firstName: '테일러',
      id: 4,
      profileImage: DefaultImg,
    },
    {
      firstName: '권은비',
      id: 5,
      profileImage: DefaultImg,
    },
    {
      firstName: '설윤',
      id: 6,
      profileImage: DefaultImg,
    },
    {
      firstName: '강호동',
      id: 7,
      profileImage: DefaultImg,
    },
    {
      firstName: '양배추',
      id: 8,
      profileImage: DefaultImg,
    },
    {
      firstName: '장성규',
      id: 9,
      profileImage: DefaultImg,
    },
  ];

  const userPosts = [
    {
      name: '기안',
      location: 'Jamsil',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 1,
      image: DefaultPostImg,
      profileImage: DefaultImg,
    },
    {
      name: '박명수',
      location: 'gangnam',
      likes: 1301,
      comments: 25,
      bookmarks: 70,
      id: 2,
      image: DefaultPostImg,
      profileImage: DefaultImg,
    },
    {
      name: '하동훈',
      location: 'songdo',
      likes: 100,
      comments: 8,
      bookmarks: 3,
      id: 3,
      image: DefaultPostImg,
      profileImage: DefaultImg,
    },
    {
      name: '유연석',
      location: 'gangnam',
      likes: 200,
      comments: 16,
      bookmarks: 7,
      id: 4,
      image: DefaultPostImg,
      profileImage: DefaultImg,
    },
    {
      name: '츄',
      location: 'gangnam',
      likes: 2000,
      comments: 32,
      bookmarks: 12,
      id: 5,
      image: DefaultPostImg,
      profileImage: DefaultImg,
    },
  ];

  const userStoriesPageSize = 4;
  const [userStoriesFetchedCounter, setUserStoriesFetchedCounter] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurPage, setUserPostsCurPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);

  const pagination = (database, curPage, pageSize) => {
    const startIdx = (curPage - 1) * pageSize;
    const endIdx = startIdx + pageSize;
    if (startIdx >= database.length) {
      return [];
    }

    return database.slice(startIdx, endIdx);
  };

  useEffect(() => {
    setIsLoading(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoading(false);

    setIsLoadingPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingPosts(false);
  }, []);

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={style.header}>
                <Title title={"Let's Explore"} />
                <TouchableOpacity style={style.messageIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size={scaleFontSize(20)}
                    color={'#898DAE'}
                  />
                  <View style={style.messageNumberContainer}>
                    <Text style={style.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={style.userStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoading) return;
                    setIsLoading(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesFetchedCounter + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setUserStoriesFetchedCounter(
                        userStoriesFetchedCounter + 1,
                      );
                      setUserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }
                    setIsLoading(false);
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={userStoriesRenderedData}
                  renderItem={({item}) => (
                    <UserStory
                      key={'userStory' + item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingPosts) return;
            setIsLoadingPosts(true);
            const contentToAppend = pagination(
              userPosts,
              userPostsCurPage + 1,
              userPostsPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserPostsCurPage(userPostsCurPage + 1);
              setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingPosts(false);
          }}
          showsVerticalScrollIndicator={false}
          data={userPostsRenderedData}
          renderItem={items => {
            const {item} = items;
            return (
              <View style={style.userPostContainer}>
                <UserPost {...item} />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
