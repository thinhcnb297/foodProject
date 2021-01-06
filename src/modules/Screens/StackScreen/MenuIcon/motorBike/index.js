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
import {styleHeader, stylesMap} from './styles';
import {Chip} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Color, IconSize} from '../../../../../configs/colors';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import AndroidOpenSettings from 'react-native-android-open-settings';
import Geolocation from '@react-native-community/geolocation';

// const {width, height} = Dimensions.get('window');

// const SCREEN_HEIGHT = height;
// const SCREEN_WIDTH = width;
// const ASPECT_RATIO = width / height;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const MotorBikeScreen = () => {
  const [state, setState] = React.useState({
    isAlowFineLocation: false,
    initialPosition: null,
  });

  React.useEffect(() => {
    const success = (pos) => {
      const crd = pos.coords;
      const {latitude, longitude} = crd;
      const initialPosition = {
        latitude,
        longitude,
      };
      setState((prevState) => ({...prevState, initialPosition}));
    };

    const error = (err) => {
      console.log(err);
    };

    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          // {
          //   title: 'Location Permission',
          //   message:
          //     'Food App needs access to your location ' + 'so you can use map.',
          //   buttonNeutral: 'Ask Me Later',
          //   buttonNegative: 'Cancel',
          //   buttonPositive: 'OK',
          // },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          };
          Geolocation.getCurrentPosition(success, error, options);
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
            {cancelable: false},
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

  console.log("🚀 ~ file: index.js ~ line 97 ~ MotorBikeScreen ~ state.initialPosition", state.initialPosition)
  if (!state.initialPosition) return <ActivityIndicator />;

  return (
    <SafeAreaView>
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
            // selected={true}
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
          provider={PROVIDER_GOOGLE}
          style={stylesMap.map}
          // mapType={Platform.OS === 'android' ? 'none' : 'standard'}
          region={state.initialPosition}
          zoomEnabled
          showsUserLocation
        />
      </View>
    </SafeAreaView>
  );
};
export default MotorBikeScreen;
