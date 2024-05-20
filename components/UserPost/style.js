import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  userPostContainer: {
    marginTop: verticalScale(35),
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: '#EFF2F6',
  },
  userPostWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userContainer: {
    flexDirection: 'row',
  },
  userPostText: {
    justifyContent: 'center',
    marginLeft: horizontalScale(10),
  },
  userName: {
    color: '#000',
    fontFamily: getFontFamily('NotoSansKR', 600),
    fontSize: scaleFontSize(16),
    includeFontPadding: false,
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('NotoSansKR', 400),
    fontSize: scaleFontSize(12),
    includeFontPadding: false,
  },
  postImage: {
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  otherContainer: {
    flexDirection: 'row',
    marginLeft: horizontalScale(10),
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesText: {
    marginLeft: horizontalScale(3),
    color: '#79869F',
  },
  comments: {
    flexDirection: 'row',
    marginLeft: horizontalScale(27),
    alignItems: 'center',
  },
  commentsText: {
    marginLeft: horizontalScale(3),
    color: '#79869F',
  },
  bookmarks: {
    flexDirection: 'row',
    marginLeft: horizontalScale(27),
    alignItems: 'center',
  },
  bookmarksText: {
    marginLeft: horizontalScale(3),
    color: '#79869F',
  },
});

export default style;
