import {Dimensions, StyleSheet} from 'react-native';
import {Color} from '../../../../../configs/colors';
import {headerHeight} from '../../../../../constants';

const {width, height} = Dimensions.get('window');

export const stylesCasual = StyleSheet.create({
  container: {
    height: headerHeight,
    // flex:1,
    justifyContent: 'center',
    // backgroundColor: Color.white,
    flexDirection: 'row',
  },

});
