// src/components/Write/WriteHostHeader.tsx

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/Write/WriteHostHeaderStyles';

const WriteHostHeader = () => {
  const navigation = useNavigation();

  // 게시글 등록 로직을 나중에 추가할 수 있음
  const handleRegister = () => {
    // TODO: 게시글 등록 로직 추가
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.button}>취소</Text>
      </TouchableOpacity>
      <Text style={styles.title}>요청 작성</Text>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.button}>등록</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WriteHostHeader;
