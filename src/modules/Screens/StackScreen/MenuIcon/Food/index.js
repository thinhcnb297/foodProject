import React from 'react';
import {SafeAreaView, Text, TouchableWithoutFeedback, View} from 'react-native';
import {Color, IconSize} from '../../../../../configs/colors';
import {stylesCasual} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import FoodIconHeader from '../../../../../components/Header/FoodIcon';
const Food = () => {
  const navigation = useNavigation();

  const onPressBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView>
      <FoodIconHeader />
      <View style={stylesCasual.container}></View>
    </SafeAreaView>
  );
};

export default Food;
