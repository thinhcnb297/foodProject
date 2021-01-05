import {Dimensions, StyleSheet} from 'react-native';
import {Color} from '../../../configs/colors';
import {headerHeight} from '../../../constants';

const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    height: headerHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.green,
  },
  boxHeaderWrapper: {
    width: (width * 90) / 100,
    height: headerHeight - 15,
    flexDirection: 'row',
  },
  iconWrapper: {
    width: 50,
    backgroundColor: Color.light,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  textInput: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: Color.white,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    color: Color.gray,
  },
});

export default style;
