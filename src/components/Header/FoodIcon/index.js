import React from 'react';
import {
  SafeAreaView, Text, TouchableWithoutFeedback, View,
} from 'react-native';
// import LottieView from 'lottie-react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import geolocation from '@react-native-community/geolocation';
import { useDispatch, useSelector } from 'react-redux';
import { Color, IconSize } from '../../../configs/colors';
import { styleHeader } from './styles';
import { GET_CURRENT_POSITION_REQUEST } from '../../../Redux/Actions';

const iconRightList = [
  {
    component: AntDesign,
    nameIcon: 'hearto',
    toComponent: '',
  },
  {
    component: FontAwesome,
    nameIcon: 'list-alt',
    toComponent: '',
  },
];

const FoodIconHeader = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  React.useEffect(() => {
    // console.log(1);
    const success = async (location) => {
      console.log('🚀 ~ file: index.js ~ line 37 ~ success ~ location', location);
      const { latitude, longitude } = location.coords;
      const coords = { latitude, longitude };
      dispatch({ type: GET_CURRENT_POSITION_REQUEST, coords });
    };

    const error = (err) => {
      console.log(err);
    };

    const options = {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 10000,
    };

    geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

  const currentPosition = false;

  const onPressBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderRightItems = React.useCallback(() => iconRightList.map((item, index) => {
    const Component = item.component;
    return (
      <View style={styleHeader.iconRightWrapper}>
        <Component
          name={item.nameIcon}
          size={IconSize.medium}
          color={Color.silver}
        />
      </View>
    );
  }), []);

  if (!currentPosition) {
    return (
    // <LottieView
    //   autoPlay
    //   style={styleHeader.lottie}
    //   loop
    //   source={require('../../../assets/Lottie/globe-world-map-search.json')}
    // />
      null
    );
  }

  const currentAddress = `${currentPosition?.results[0].address_components[0].long_name} ${currentPosition?.results[0].address_components[1].long_name}`;

  return (
    <SafeAreaView style={styleHeader.container}>
      <View style={styleHeader.iconLeftWrapper}>
        <TouchableWithoutFeedback onPress={onPressBack}>
          <MaterialIcons
            name="arrow-back-ios"
            size={IconSize.medium}
            color={Color.silver}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styleHeader.titleContainer}>
        <Text style={styleHeader.textDetail}>GIAO TỚI</Text>
        <Text style={styleHeader.textTitle}>
          {currentAddress}
          {' '}
          <AntDesign
            name="caretdown"
            size={IconSize.small}
            color={Color.black}
          />
        </Text>
      </View>

      {renderRightItems()}
    </SafeAreaView>
  );
};

export default FoodIconHeader;
