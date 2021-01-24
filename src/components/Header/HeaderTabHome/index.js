import React from 'react';
import { View, TextInput, StatusBar } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import { Color, IconSize } from '../../../configs/colors';

const HeaderTabHome = () => (
  <>
    <StatusBar backgroundColor={Color.green} />
    <View style={styles.container}>
      <View style={styles.boxHeaderWrapper}>
        <View style={styles.iconWrapper}>
          <AntDesign name="scan1" size={IconSize.medium} />
        </View>

        <TextInput style={styles.textInput}>
          <AntDesign name="search1" size={IconSize.small} />
          {'  '}
          Tìm trên ứng dụng grap
        </TextInput>
      </View>
    </View>
  </>
);
export default HeaderTabHome;
