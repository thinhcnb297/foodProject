import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {styleHeader, stylesMap} from './styles';
import {Chip} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Color, IconSize} from '../../../../../configs/colors';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';

const MotorBikeScreen = () => {
  const navigation = useNavigation();
  const onPressBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);
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
          mapType={Platform.OS === 'android' ? 'none' : 'standard'}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          zoomEnabled
          showsUserLocation
        />
      </View>
    </SafeAreaView>
  );
};
export default MotorBikeScreen;
