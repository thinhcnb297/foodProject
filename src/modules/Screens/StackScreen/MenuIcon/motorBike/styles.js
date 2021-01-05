import {Dimensions, StyleSheet} from 'react-native';
import {Color} from '../../../../../configs/colors';
import {headerHeight} from '../../../../../constants';

const {width, height} = Dimensions.get('window');

export const styleHeader = StyleSheet.create({
  container: {
    height: headerHeight,
    // flex:1,
    justifyContent: 'center',
    backgroundColor: Color.white,
    flexDirection: 'row',
  },
  iconLeftWrapper: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 70,
    flexDirection: 'row',
  },
});

export const stylesMap = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    height: 400,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop:100
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
