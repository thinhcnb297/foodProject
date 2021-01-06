import {Dimensions, StyleSheet} from 'react-native';
import {Color, FontSize} from '../../../../configs/colors';

const {width, height} = Dimensions.get('window');

export const styleHeader = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  infoHeaderWrapper: {
    height: 50,
    flexDirection: 'row',
  },
  infoHeaderContent: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: Color.gray,
  },
  imgIcon: {width: 30, height: 30, borderRadius: 15},
});

export const styleMenu = StyleSheet.create({
  container: {
    width,
    height: 200,
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderBottomColor: Color.gray,
    borderBottomWidth: 0.2,
  },
  itemMenuWrapper: {
    width: width / 4,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export const styleAdvertisement = StyleSheet.create({
  container: {
    width,
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width,
    flex: 1,
  },
  image: {
    width: (width * 90) / 100,
    borderRadius: 5,
  },
  textWrapper: {
    width,
    height: 60,
  },
  textTitle: {
    fontSize: FontSize.title,
    fontWeight: '500',
    marginLeft: (width * 5) / 100,
  },
  textDetail: {
    fontSize: FontSize.detail,
    fontWeight: '400',
    color: Color.gray,
    marginLeft: (width * 5) / 100,
  },
});

export const styleList = StyleSheet.create({
  container: {
    width: width / 2,
    height: width / 2 + 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: width / 2 - 20,
    height: width / 2,
    borderRadius: 10,
  },
  textTitle: {
    color: Color.black,
    fontSize: FontSize.detail,
    fontWeight: '700',
    marginLeft: (width * 5) / 100,
  },
  textDetail: {
    color: Color.gray,
    fontWeight: '400',
    fontSize: FontSize.smallDetail,
  },
});

export const stylesFooter = StyleSheet.create({
  container: {
    width,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDetail: {
    color: Color.gray,
    fontWeight: '400',
    fontSize: FontSize.smallDetail,
  },
});
