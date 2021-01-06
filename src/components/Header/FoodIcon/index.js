import React from 'react';
import {SafeAreaView, Text, TouchableWithoutFeedback, View} from 'react-native';

import {styleHeader} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {Color, IconSize} from '../../../configs/colors';
const FoodIconHeader = () => {
  const navigation = useNavigation();

  const onPressBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styleHeader.container}>
      <View style={styleHeader.iconLeftWrapper}>
        <TouchableWithoutFeedback onPress={onPressBack}>
          <MaterialIcons
            name="arrow-back-ios"
            size={IconSize.medium}
            color={Color.gray}
          />
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default FoodIconHeader;
