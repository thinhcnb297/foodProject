import {Dimensions, StyleSheet} from 'react-native';
import {Color, FontSize} from '../../../configs/colors';
import {headerHeight} from '../../../constants';

const {width, height} = Dimensions.get('window');

export const styleHeader = StyleSheet.create({
  container: {
    height: headerHeight,
    // flex:1,
    justifyContent: 'center',
    backgroundColor: Color.white,
    flexDirection: 'row',
  },

  lottieContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  lottie: {
    width: width - 30,
    // color: Color.green,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  iconLeftWrapper: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingRight: 70,
  },
  textDetail: {
    fontSize: FontSize.smallDetail,
    color: Color.silver,
  },
  textTitle: {
    fontSize: FontSize.title,
    color: Color.black,
    fontWeight: '600',
  },
  iconRightWrapper: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
