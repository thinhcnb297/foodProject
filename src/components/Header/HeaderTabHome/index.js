import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IconSize} from '../../../configs/colors';

const HeaderTabHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxHeaderWrapper}>
        <View style={styles.iconWrapper}>
          <AntDesign name="scan1" size={IconSize.medium} />
        </View>

        <TextInput style={styles.textInput}>
          <AntDesign name="search1" size={IconSize.small} />
          {'  '}Tìm trên ứng dụng grap
        </TextInput>
      </View>
    </View>
  );
};
export default HeaderTabHome;
