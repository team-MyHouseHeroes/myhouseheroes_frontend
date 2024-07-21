// src/components/Write/WriteHostHeader.tsx

import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/Write/WriteHostHeaderStyles';
import RegisterOptionsModal from './RegisterOptionsModal';
import ConfirmationModal from './ConfirmationModal';

const WriteHostHeader = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [registerOptions, setRegisterOptions] = useState({
    gender: null,
    grade: null,
  });

  const handleRegister = () => {
    if (isRegistered) {
      setConfirmationVisible(true);
      return;
    }
    setModalVisible(true);
  };

  const handleSaveOptions = options => {
    setRegisterOptions(options);
    console.log('Saved options:', options); // 콘솔에 저장된 값 출력
    setModalVisible(false);
    setIsRegistered(true);
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
      <ConfirmationModal
        visible={confirmationVisible}
        onClose={() => setConfirmationVisible(false)}
      />
    </View>
  );
};

export default WriteHostHeader;
