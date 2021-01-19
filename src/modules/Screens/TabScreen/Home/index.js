/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  FlatList,
  RefreshControl,
  StatusBar,
} from 'react-native';
import HeaderTabHome from '../../../../components/Header/HeaderTabHome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  styleAdvertisement,
  styleHeader,
  styleList,
  styleMenu,
  stylesFooter,
} from './styles';
import {Color, IconSize} from '../../../../configs/colors';
import {TouchableRipple, Text} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const menuIcon = [
  {title: 'Ô tô', iconUrl: require('../../../../assets/images/icon/car.jpg')},
  {
    title: 'Xe máy',
    iconUrl: require('../../../../assets/images/icon/motor.jpg'),
    component: 'MotorScreen',
  },
  {
    title: 'Đồ ăn',
    iconUrl: require('../../../../assets/images/icon/food.jpg'),
    component: 'FoodScreen',
  },
  {
    title: 'Giao hàng',
    iconUrl: require('../../../../assets/images/icon/delivery.jpg'),
  },
  {title: 'Mart', iconUrl: require('../../../../assets/images/icon/mart.jpg')},
  {
    title: 'Nạp tiền ĐT',
    iconUrl: require('../../../../assets/images/icon/phoneCard.jpg'),
  },
  {
    title: 'Hóa đơn',
    iconUrl: require('../../../../assets/images/icon/phoneCard.jpg'),
  },
  {
    title: 'Xem thêm',
    iconUrl: require('../../../../assets/images/icon/more.jpg'),
  },
];
const menuAdvertiment = [
  {
    title: 'Ưu đãi 20% x 10 chuyến Grabike/GrabCar',
    imgUrl: require('../../../../assets/images/advertisement/adv2.jpg'),
    type: 'calendar',
    time: 'Đến 31 Dec',
  },
  {
    title: 'Ưu đãi 20% x 10 chuyến Grabike/GrabCar',
    imgUrl: require('../../../../assets/images/advertisement/adv3.jpg'),
    type: 'calendar',
    time: 'Đến 31 Dec',
  },
  {
    title: 'Ưu đãi 50% x 20 chuyến Grabike/GrabCar',
    imgUrl: require('../../../../assets/images/advertisement/adv4.jpg'),
    type: 'calendar',
    time: 'Đến 31 Dec',
  },
  {
    title: 'Cùng nhìn lại năm 2020 của bạn và Grab',
    imgUrl: require('../../../../assets/images/advertisement/adv5.jpg'),
    type: 'book',
    time: '2 phút đọc',
  },
  {
    title: 'Quà tặng sinh nhật cho bạn. Xem ngay!',
    imgUrl: require('../../../../assets/images/advertisement/adv6.jpg'),
    type: 'calendar',
    time: 'Đến 31 Dec',
  },
  {
    title: 'Quyền lợi của thanh toán KHÔNG TIỀN MẶT',
    imgUrl: require('../../../../assets/images/advertisement/adv7.jpg'),
    type: 'calendar',
    time: 'Đến 31 Dec',
  },
];

const Home = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const navigation = useNavigation();

  const onPressHeader = React.useCallback(() => {}, []);

  const infoHeader = React.useCallback(() => {
    return (
      <View style={styleHeader.infoHeaderWrapper}>
        <TouchableRipple
          rippleColor={Color.green}
          style={styleHeader.infoHeaderContent}
          onPress={onPressHeader}>
          <React.Fragment>
            <Image
              style={styleHeader.imgIcon}
              source={require('../../../../assets/images/icon/moca.jpg')}
            />
            <Text>{'   '}Use Moca</Text>
            <MaterialIcons
              name="navigate-next"
              size={IconSize.medium}
              color={Color.gray}
            />
          </React.Fragment>
        </TouchableRipple>

        <TouchableRipple
          rippleColor={Color.green}
          onPress={onPressHeader}
          style={styleHeader.infoHeaderContent}>
          <React.Fragment>
            <Image
              style={styleHeader.imgIcon}
              source={require('../../../../assets/images/icon/score.jpg')}
            />
            <Text>{'   '}0 Điểm</Text>
            <MaterialIcons
              name="navigate-next"
              size={IconSize.medium}
              color={Color.gray}
            />
          </React.Fragment>
        </TouchableRipple>
      </View>
    );
  }, [onPressHeader]);

  const onPressMenuItem = React.useCallback(
    (item) => () => {
      navigation.navigate(item.component);
    },
    [navigation],
  );

  const renderMenu = React.useCallback(() => {
    return menuIcon.map((item, index) => {
      return (
        <TouchableRipple
          rippleColor={Color.green}
          onPress={onPressMenuItem(item)}
          key={index}
          style={styleMenu.itemMenuWrapper}>
          <React.Fragment>
            <Image style={styleMenu.image} source={item.iconUrl} />
            <Text>{item.title}</Text>
          </React.Fragment>
        </TouchableRipple>
      );
    });
  }, [onPressMenuItem]);

  const renderAdvertisement = React.useCallback(() => {
    return (
      <View style={styleAdvertisement.container}>
        <View style={styleAdvertisement.imageWrapper}>
          <Image
            resizeMode="contain"
            style={styleAdvertisement.image}
            source={require('../../../../assets/images/advertisement/adv1.jpg')}
          />
        </View>
        <View style={styleAdvertisement.textWrapper}>
          <Text style={styleAdvertisement.textTitle}>
            Mua sắm online cùng MasterCard
          </Text>
          <Text style={styleAdvertisement.textDetail}>
            Tài trợ bởi MasterCard
          </Text>
        </View>
      </View>
    );
  }, []);

  const onScroll = React.useCallback((nativeEvent) => {
    console.log(
      '🚀 ~ file: index.js ~ line 124 ~ onScroll ~ value',
      nativeEvent,
    );
  }, []);

  const renderItem = React.useCallback((item) => {
    return (
      <View style={styleList.container}>
        <Image
          source={item.imgUrl}
          resizeMode="contain"
          style={styleList.img}
        />
        <Text style={styleList.textTitle}>{item.title}</Text>
        <FontAwesome name="calendar" size={IconSize.small} color={Color.gray}>
          {' '}
          <Text style={styleList.textDetail}>{item.time}</Text>
        </FontAwesome>
      </View>
    );
  }, []);

  const renderFooter = React.useMemo(
    () => (
      <View style={stylesFooter.container}>
        <Text style={stylesFooter.textDetail}>Bạn đã xem hết!</Text>
      </View>
    ),
    [],
  );

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styleHeader.container}>
      <StatusBar animated backgroundColor={Color.green} barStyle="default" />
      <HeaderTabHome />
      <ScrollView
        onScroll={(nativeEvent) => onScroll(nativeEvent)}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {infoHeader()}
        <View style={styleMenu.container}>{renderMenu()}</View>
        {renderAdvertisement()}

        <FlatList
          data={menuAdvertiment}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => renderItem(item)}
          numColumns={2}
          ListFooterComponent={renderFooter}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
