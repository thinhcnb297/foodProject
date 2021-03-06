import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Platform,
  PermissionsAndroid,
  TouchableWithoutFeedback,
  Dimensions,
  Alert,
  Linking,
  ActivityIndicator,
} from 'react-native';
import { styleHeader, stylesMap } from './styles';
import { Chip } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Color, IconSize } from '../../../../../configs/colors';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

import { APIKEYGOOGLEMAP } from '../../../../../constants';

// const {width, height} = Dimensions.get('window');

// const SCREEN_HEIGHT = height;
// const SCREEN_WIDTH = width;
// const ASPECT_RATIO = width / height;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const MotorBikeScreen = () => {
  const mapViewRef = React.useRef();

  const onMapInit = React.useRef(false);

  const [state, setState] = React.useState({});

  React.useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {return;}
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        } else {
          Alert.alert(
            'Location permission denied',
            'Please change settings to continue',
            [
              {
                text: 'OK',
                onPress: () => Linking.openSettings(),
              },
            ],
            { cancelable: false },
          );
        }
      } catch (err) {
        console.warn(err);
      }
    };
    requestLocationPermission();
  }, []);

  const navigation = useNavigation();

  const onPressBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onUserLocationChange = React.useCallback(async ({ nativeEvent }) => {
    const userLocation = nativeEvent.coordinate;
    getAdressByLocation(userLocation);

    if (onMapInit.current) {return null;}
    if (Platform.OS === 'ios') {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
    }
    moveCameraLocation(userLocation);
  },
    [moveCameraLocation, getAdressByLocation],
  );

  const getAdressByLocation = React.useCallback(async (location) => {
    const { latitude, longitude } = location;
    const APIKEY = APIKEYGOOGLEMAP;
    // const dataJson = await (
    //   await fetch(
    //     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${APIKEY}`,
    //   )
    // ).json();
    // console.log(
    //   '🚀 ~ file: index.js ~ line 90 ~ getAdressByLocation ~ dataJson',
    //   dataJson,
    // );
  }, []);

  const moveCameraLocation = React.useCallback((location) => {
    mapViewRef.current?.animateCamera(
      {
        center: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
        altitude: location.altitude,
        heading: location.heading,
        pitch: 1,
        zoom: 15,
      },
      { duration: 1 },
    );
    onMapInit.current = true;
  }, []);

  return (
    <SafeAreaView>
      <StatusBar animated backgroundColor={Color.gray} barStyle="default" />
      {/* Header */}
      <View style={styleHeader.container}>
        <View style={styleHeader.iconLeftWrapper}>
          <TouchableWithoutFeedback onPress={onPressBack}>
            <MaterialIcons
              name="arrow-back-ios"
              size={IconSize.medium}
              color={Color.gray}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styleHeader.titleContainer}>
          <Chip
            // selected
            // selectedColor={Color.green}
            onPress={() => console.log('Pressed')}>
            Gọi xe
          </Chip>
          <Text>{'   '}</Text>
          <Chip onPress={() => console.log('Pressed')}>Thuê xe</Chip>
        </View>
      </View>
      {/* Map */}
      <View style={stylesMap.container}>
        <MapView
          ref={mapViewRef}
          // onMapReady={onMapReady}
          style={stylesMap.map}
          mapType={'standard'}
          // region={state.initialPosition}
          zoomEnabled
          toolbarEnabled
          loadingEnabled
          showsUserLocation
          provider={PROVIDER_GOOGLE}
          loadingIndicatorColor={Color.green}
          onUserLocationChange={onUserLocationChange}
          pitchEnabled
          followsUserLocation
          showsCompass
          showsBuildings
          showsTraffic
          showsIndoors
        />
      </View>
    </SafeAreaView>
  );
};
export default MotorBikeScreen;
