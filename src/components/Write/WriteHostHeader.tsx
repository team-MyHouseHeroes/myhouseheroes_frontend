// src/components/Write/WriteHostHeader.tsx

import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/Write/WriteHostHeaderStyles';
import RegisterOptionsModal from './RegisterOptionsModal';

const WriteHostHeader = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [registerOptions, setRegisterOptions] = useState({
    gender: null,
    grade: null,
  });

  const handleRegister = () => {
    setModalVisible(true);
  };

  const handleSaveOptions = options => {
    setRegisterOptions(options);
    console.log('Saved options:', options); // 콘솔에 저장된 값 출력
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
      <RegisterOptionsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSaveOptions}
      />
    </View>
  );
};

export default WriteHostHeader;
